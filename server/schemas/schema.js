// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'
// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import blockContent from './blockContent'
import category from './category'
import course from './course'
import user from './user'
import courseVariant from './courseVariant'
import tags from './tags'
import review from './review'
import blog from './blog'
import postedBy from './postedBy'
import order from './order'
import orderItem from './orderItem'
import shippingDetails from './shippingDetails'
import paymentResult from './paymentResult'
import blogCategory from './blogCategory'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    course,
    user,
    category,
    tags,
    review,
    blog,
    order,
    blogCategory,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    blockContent,
    courseVariant,
    postedBy,
    orderItem,
    shippingDetails,
    paymentResult
  ]),
})
