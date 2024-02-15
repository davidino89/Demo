import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export interface Vehicle {
  'model' : string,
  'vehicleIdentificationNumber' : string,
  'licenseNumber' : string,
}
export interface _SERVICE {
  'addVehicle' : ActorMethod<[string, string, string], undefined>,
  'readVehicles' : ActorMethod<[], Array<Vehicle>>,
}
