export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '5fcfcfa549b13c0b0af721a0',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-1cuwun8p',
                  apiId: '1af89e1f-e271-4bc4-8db9-8ec4d78ffc97'
                },
                {
                  buildHookId: '5fcfcfa6e65e7b0d902b0484',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-kgau79xx',
                  apiId: '915b0968-3866-4f82-960e-24e1d50fc6aa'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/philippekubler/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-kgau79xx.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
