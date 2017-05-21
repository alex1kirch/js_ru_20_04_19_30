import { normalizedArticles as defaultArticles } from '../fixtures'
import { DELETE_ARTICLE, ADD_COMMENT } from '../constants'

const articlesMap = new Map(defaultArticles
    .map(article => [article.id, article]))

export default (articles = articlesMap, action) => {
    const { type, payload, newId } = action
    switch (type) {
        case DELETE_ARTICLE:
            articles = new Map(articles)
            articles.delete(payload.id)
            return articles
        case ADD_COMMENT:
            const { user, text, articleId } = payload
            articles = new Map(articles)
            const article = articles.get(articleId)
            const comments = article.comments.slice()
            comments.push(newId);
            articles.set(articleId, { ...article, comments })
            return articles
    }

    return articles;
}
