export class Session {
  center_id: number | undefined;
  name: string | undefined;
  address: string | undefined;
  state_name: string | undefined;
  district_name: string | undefined;
  block_name: string | undefined;
  pincode: number | undefined;
  from: string | undefined;
  to: string | undefined;
  lat: number | undefined;
  long: number | undefined;
  fee_type: string | undefined;
  session_id: string | undefined;
  date: string | undefined;
  available_capacity_dose1: number | undefined;
  available_capacity_dose2: number | undefined;
  available_capacity: number | undefined;
  fee: string | undefined;
  min_age_limit: number | undefined;
  vaccine: string | undefined;
  slots: string[] | undefined;
}

export class RootObjectSession {
  sessions: Session[] | undefined;
}
