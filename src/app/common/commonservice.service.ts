import { Injectable } from '@angular/core';
import { EducationalInfo } from '../educational-info';
import { Customer } from '../model/customer';
import { CustomerAddress } from '../model/customer-address';
import { CustomerAllDocuments } from '../model/customer-all-documents';
import { CustomerBankDetails } from '../model/customer-bank-details';
import { DealerBankDetails } from '../model/dealer-bank-details';

import { PersonalDocs } from '../model/personal-docs';
import { Profession } from '../model/profession';
import { VehicleDetails } from '../model/vehicle-details';

@Injectable({
  providedIn: 'root'
})
export class CommonserviceService {

  constructor() { }
  customerdetails:Customer={
    customerId: '',
    customerFirstName: '',
    customerMiddleName: '',
    customerLastName: '',
    customerEmail: '',
    customerMobileNumber: '',
    customerAlternateMobileNumber: '',
    customerGender: '',
    customerPanCard: '',
    customerAadharCard: '',
    customerDateOfBirth: '',
    customerQualification: '',
    customerCibilScore: '',
    customerLoanStatus: '',
    customerAddress: new CustomerAddress,
    customerProfession: new Profession,
    customerBankDetails: new CustomerBankDetails,
    vehicleDetails: new VehicleDetails,
    dealerBankDetails: new DealerBankDetails,
    customerAllDocuments: new CustomerAllDocuments,
    
  }
}
