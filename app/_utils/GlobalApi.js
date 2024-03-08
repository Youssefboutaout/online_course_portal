const {gql} = require("graphql-request")

const MASTER_URL = "https://api-us-west-2.hygraph.com/v2/"+process.env.NEXT_PUBLIC_HYGRAPH_API_KEY+"/master"

const getAllCourseList=async()=>{
    const query=gql`
    query MyQuery {
        onlineCoursePortals {
          author
          name
          id
          free
          description
          demoUrl
          banner {
            url
          }
          chapter {
            ... on Chapter {
              id
              name
              video {
                url
              }
            }
          }
          totalChapters
          sourceCode
          tag
        }
      }
      
    `
    const result=await request(MASTER_URL,query);
    return result;
}

export default{
    getAllCourseList
}