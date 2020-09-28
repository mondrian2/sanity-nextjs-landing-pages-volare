export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f7206ed0684aefb9f946732',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-volare-studio',
                  apiId: 'af9b84e8-b12d-492b-94ab-0cc7dee6e21f'
                },
                {
                  buildHookId: '5f7206ed161991418d8eb0b2',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-volare',
                  apiId: '1eca0818-84b4-4555-a241-97271858e901'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mondrian2/sanity-nextjs-landing-pages-volare',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-volare.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
