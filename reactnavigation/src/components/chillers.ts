/* eslint-disable prettier/prettier */
interface Chiller {

    id: string| null;

    brickClass: string| null;

    serialNumber: string | null;

    description: string| null;

    model: string | null;

    modelNumber: string | null;

    equipmentFamily: string|null;

    cioTags: string[]|null;

    productType: string | null;

    picControllerVersion: string|null;

    softwareVersion: string | null;

    isMigrated: boolean|null;

    isOnline: boolean|null;

    customer: {

      id: string;

      name: string;

      contactName: string;

      contactEmail: string;

    }|null;

    location: {

      id: string|null;

      salesforceLocationId: string|null;

      name: string|null;

      street: string|null;

      city: string|null;

      state: string|null;

      zip: string|null;

      country: string|null;

      timezone: string|null;

      latitude: string|null;

      longitude: string|null;

    }|null;

    connectivityStatus: boolean|null;

    overallConnectivityStatus: boolean|null;

    runStatus: string | null;

    name: string|null;

    edge: {

      id: string|null|undefined;

      name: string|null;

      mac: string | null;

      serialNumber: string | null;

      sourceSalesforceEnv: string | null;

      firmware: string | null;

      model: string|null;

      iccId: string | null;

      imei: string | null;

      isMigrated: boolean|null;

      isOnline: boolean|null;

      connectivityStatus: boolean|null;

    };

  }

  export default Chiller;
