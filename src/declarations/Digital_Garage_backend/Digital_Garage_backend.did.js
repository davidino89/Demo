export const idlFactory = ({ IDL }) => {
  const Vehicle = IDL.Record({
    'model' : IDL.Text,
    'vehicleIdentificationNumber' : IDL.Text,
    'licenseNumber' : IDL.Text,
  });
  return IDL.Service({
    'addVehicle' : IDL.Func([IDL.Text, IDL.Text, IDL.Text], [], ['oneway']),
    'readVehicles' : IDL.Func([], [IDL.Vec(Vehicle)], ['query']),
  });
};
export const init = ({ IDL }) => { return []; };
