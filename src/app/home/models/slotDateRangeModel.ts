export class Session {
  session_id: string | undefined;
  date: string | undefined;
  available_capacity: number | undefined;
  min_age_limit: number | undefined;
  vaccine: string | undefined;
  slots: string[] | undefined;
  available_capacity_dose1: number | undefined;
  available_capacity_dose2: number | undefined;
}

export class Center {
  center_id: number | undefined;
  name: string | undefined;
  address: string | undefined;
  state_name: string | undefined;
  district_name: string | undefined;
  block_name: string | undefined;
  pincode: number | undefined;
  lat: number | undefined;
  long: number | undefined;
  from: string | undefined;
  to: string | undefined;
  fee_type: string | undefined;
  sessions: Session[] | undefined;
}

export class RootObjectWeekSlot {
  centers: Center[] | undefined;
}
