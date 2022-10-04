import { default as axios } from 'axios'
import {AddCommentModel} from '~/model/add-comment.model'
import {CommentModel} from '~/model/comment.model'

export class BackendConnectorService {
  private static instance?: BackendConnectorService
  private constructor() {}

  static getInstance() {
    if(!BackendConnectorService.instance)
      BackendConnectorService.instance = new BackendConnectorService()

    return BackendConnectorService.instance
  }

  async getComments(): Promise<CommentModel> {
    return (await axios.get('http://localhost:3000/comments')).data as CommentModel
  }

  async addComment(rawComment: AddCommentModel): Promise<CommentModel> {
    return (await axios.post('http://localhost:3000/comments', rawComment)).data as CommentModel
  }
}
