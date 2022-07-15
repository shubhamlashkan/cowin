export class State {
  state_id: number | undefined;
  state_name: string | undefined;
}

export class RootObjectStates {
  states: State[] | undefined ;
  ttl: number | undefined;
}
