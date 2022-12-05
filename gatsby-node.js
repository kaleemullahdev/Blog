/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query EABLOG {
      eablog {
        articles {
          _id
        }
      }
    }
  `);
  data.eablog.articles &&
    data.eablog.articles.forEach((article) => {
      const _id = article._id;
      actions.createPage({
        path: `blog/${_id}`,
        component: require.resolve(`./src/templates/post/singlePost.tsx`),
        context: { _id: _id },
      });
    });
};
