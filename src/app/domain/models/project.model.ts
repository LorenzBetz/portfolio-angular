export interface Project {
  id: string
  projectname: string,
  from: Date,
  to?: Date,
  description: string,
  tecstack: string[]
}