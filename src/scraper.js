const cheerio = require("cheerio");

async function scrapeDummyArticles(htmlContent) {
  try {
    const $ = cheerio.load(htmlContent);

    const articles = $(".postArticle")
      .map((index, element) => {
        const title = $(element).find("h2").text().trim();
        const subTitle = $(element).find("h3").text().trim();
        const url = $(element).find("a").attr("href").trim();

        return { title, subTitle, url };
      })
      .get();

    return articles;
  } catch (error) {
    console.error("Scraping failed:", error);
    throw error;
  }
}

module.exports = { scrapeDummyArticles };
