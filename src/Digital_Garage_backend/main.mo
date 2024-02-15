import List "mo:base/List";
import Blob "mo:base/Blob";
import Debug "mo:base/Debug";

actor VehicleRegistry {
    
    public type Vehicle = {
        licenseNumber : Text;
        vehicleIdentificationNumber : Text;
        model : Text;
    };

    
    var vehicles: List.List<Vehicle> = List.nil<Vehicle>();

    public func addVehicle(licNumber: Text, vin: Text, mod: Text) {

          let newVehicle: Vehicle = {
            licenseNumber = licNumber;
            vehicleIdentificationNumber = vin;
            model = mod;
          };

          vehicles := List.push(newVehicle, vehicles);
    };



    public query func readVehicles(): async [Vehicle]{
      return List.toArray(vehicles);
    };

}

