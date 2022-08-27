import {Project} from './project.model'
import {Personal} from './personal.model'

export interface Cv {
  personal: Personal;
  projects: Project[];
}
