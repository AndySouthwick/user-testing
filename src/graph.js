import gql from 'graphql-tag'


export const createNewSession = gql`
  mutation (
    $sessionName: String!
    $startTime: Int
  ){
    createSession(
      sessionName: $sessionName
      startTime: $startTime
    ){
      id sessionName startTime
    }
  }
`
export const updateSessionTime = gql`
  mutation (
    $id: ID!
    $stopTime: Int!
  ){
    updateSession(id: $id  stopTime: $stopTime){
    id
  }
  }
`
export const createNewMood = gql`
  mutation (
    $moodTime: Int!
    $mood: Int!
    $id: ID!
  ){
    createSessionUserFeeling(sessionId: $id moods: $mood moodTime: $moodTime){
      id moods  moodTime
    }
  }
`
export const querySessions = gql`
  query(
    $id: ID!
  ){
    Session(id: $id){
      id
      sessionUserFeelings{
        id moods moodTime
      }
    }
  }
`
export const createNewProject = gql`
  mutation(
    $projectName: String!
  ){
    createProject(
      projectName: $projectName
    ){
      id projectName
    }
  }
`
export const updateProject = gql`
  mutation(
    $projectId: ID!
  )
  {
    updateProject(
    projectId: $projectId
  ){
      id
    }
  }
`
export const createFeature = gql`
  mutation(
    $featureName: String!
    $projectId: ID!
  ){
   createFeature(
      featureName: $featureName,
      projectId: $projectId
    ){
     id featureName
   }
  }
`
export const queryFeaturesOnProject = gql`
  query(
    $projectId: ID!
  ){
    Project(id: $projectId){
      features{
        id featureName
      }
    }
  }
`
// export const querySessionLocal = client.readQuery({
//   query: gql`
//     query(
//     $id: ID!
//     ){
//       Session(id: $id){
//         id
//         sessionUserFeelings{
//           id moods moodTime
//         }
//       }
//     }
//   `
// })