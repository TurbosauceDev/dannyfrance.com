import { config, collection, singleton, fields } from '@keystatic/core';
import { TAGS } from './src/data/tags';

// Editor for dannyfrance.com, served at /keystatic.
// `npm run dev` edits files on disk (local mode). The live site at
// dannyfrance.com/keystatic signs in with GitHub and commits straight to main,
// which triggers a Vercel deploy. Set PUBLIC_KEYSTATIC_STORAGE=github locally to
// test the GitHub flow (and to run the one-time GitHub App setup).
const useGitHub = import.meta.env.PROD || import.meta.env.PUBLIC_KEYSTATIC_STORAGE === 'github';

const tagOptions = Object.entries(TAGS).map(([value, t]) => ({ label: t.label, value }));

export default config({
  storage: useGitHub
    ? { kind: 'github', repo: { owner: 'TurbosauceDev', name: 'dannyfrance.com' } }
    : { kind: 'local' },
  ui: {
    brand: { name: 'dannyfrance.com' },
    navigation: { Writing: ['posts'], Pages: ['home', 'projects', 'resume'] },
  },
  collections: {
    posts: collection({
      label: 'Blog posts',
      path: 'src/content/blog/*',
      slugField: 'title',
      entryLayout: 'content',
      format: { contentField: 'content' },
      columns: ['title', 'date'],
      schema: {
        title: fields.slug({ name: { label: 'Title' }, slug: { label: 'URL slug', description: 'dannyfrance.com/blog/<slug>' } }),
        description: fields.text({ label: 'Description', description: 'One line shown in the post list and RSS.' }),
        date: fields.date({ label: 'Date', defaultValue: { kind: 'today' }, validation: { isRequired: true } }),
        updated: fields.date({ label: 'Updated', description: 'Optional. Set when you revise an old post.' }),
        tags: fields.multiselect({ label: 'Tags', options: tagOptions }),
        draft: fields.checkbox({ label: 'Draft', description: 'Drafts are hidden on the live site.', defaultValue: true }),
        content: fields.markdoc({
          label: 'Post',
          extension: 'md',
          options: { image: { directory: 'src/content/blog/_images', publicPath: './_images/' } },
        }),
      },
    }),
  },
  singletons: {
    home: singleton({
      label: 'Home page',
      path: 'src/data/home',
      format: { data: 'json' },
      schema: {
        intro: fields.text({ label: 'Intro', multiline: true, description: 'Blank line = new paragraph.' }),
        tagline: fields.text({ label: 'Tagline', description: 'Short line under the intro.' }),
      },
    }),
    projects: singleton({
      label: 'Projects',
      path: 'src/data/projects',
      format: { data: 'json' },
      schema: {
        items: fields.array(
          fields.object({
            name: fields.text({ label: 'Name', validation: { isRequired: true } }),
            blurb: fields.text({ label: 'One-liner', multiline: true }),
            when: fields.text({ label: 'When', description: 'e.g. 2026-10 →' }),
            status: fields.text({ label: 'Status' }),
            tags: fields.multiselect({ label: 'Tags', options: tagOptions }),
            url: fields.url({ label: 'Link' }),
          }),
          { label: 'Projects', itemLabel: (p) => p.fields.name.value || 'New project' },
        ),
      },
    }),
    resume: singleton({
      label: 'Resume',
      path: 'src/data/resume',
      format: { data: 'json' },
      schema: {
        lede: fields.text({ label: 'Summary line' }),
        sections: fields.array(
          fields.object({
            title: fields.text({ label: 'Section', validation: { isRequired: true } }),
            items: fields.array(
              fields.object({
                what: fields.text({ label: 'What', validation: { isRequired: true } }),
                where: fields.text({ label: 'Where' }),
                when: fields.text({ label: 'When' }),
                note: fields.text({ label: 'Note', multiline: true }),
              }),
              { label: 'Entries', itemLabel: (i) => i.fields.what.value || 'New entry' },
            ),
          }),
          { label: 'Sections', itemLabel: (s) => s.fields.title.value || 'New section' },
        ),
      },
    }),
  },
});
