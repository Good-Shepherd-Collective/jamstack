const EleventyFetch = require("@11ty/eleventy-fetch");

async function getMondoweiss() {
  const url = "https://mondoweiss.net/wp-json/wp/v2/posts?_embed/?&per_page=1";
  const response = await EleventyFetch(url, {
    duration: "1d", 
    type: "json"
  });
  const articles = response;
  return articles;
}

module.exports = getMondoweiss;