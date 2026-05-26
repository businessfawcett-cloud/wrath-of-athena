import { defineType, defineField } from 'sanity'
import { BasketIcon } from '@sanity/icons'

export const product = defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  icon: BasketIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Product Name',
      type: 'string',
      validation: (Rule) => Rule.required().max(100),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
      description: 'Price in USD',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      validation: (Rule) => 
        Rule.required()
          .custom((value, context) => {
            if (!value || !['tops', 'bottoms', 'accessories'].includes(value)) {
              return 'Must be one of: tops, bottoms, accessories'
            }
            return true
          }),
      options: {
        list: [
          { title: 'Tops', value: 'tops' },
          { title: 'Bottoms', value: 'bottoms' },
          { title: 'Accessories', value: 'accessories' },
        ],
        layout: 'dropdown',
      },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required().max(500),
    }),
    defineField({
      name: 'image',
      title: 'Product Image',
      type: 'image',
      validation: (Rule) => Rule.required(),
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'featured',
      title: 'Featured Product',
      type: 'boolean',
      description: 'Show this product on the homepage',
      initialValue: false,
    }),
  ],
})