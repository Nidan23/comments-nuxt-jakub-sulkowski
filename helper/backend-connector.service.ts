
export class BackendConnectorService {
  private static instance?: BackendConnectorService
  private constructor() {}

  static getInstance() {
    if(!BackendConnectorService.instance)
      BackendConnectorService.instance = new BackendConnectorService()

    return BackendConnectorService.instance
  }
}
