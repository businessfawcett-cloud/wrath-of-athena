import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Wrath of ATHENA Store')
    .items([
      S.documentTypeListItem('product').title('Products'),
      S.documentTypeListItem('siteSettings').title('Site Settings'),
      S.divider(),
      S.documentTypeListItem('post').title('Blog Posts'),
      S.documentTypeListItem('category').title('Blog Categories'),
      S.documentTypeListItem('author').title('Blog Authors'),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !['product', 'siteSettings', 'post', 'category', 'author'].includes(item.getId()!),
      ),
    ])
