import { EducationalInfo } from "../educational-info"
import { CustomerAddress } from "./customer-address"
import { CustomerAllDocuments } from "./customer-all-documents"
import { CustomerBankDetails } from "./customer-bank-details"
import { DealerBankDetails } from "./dealer-bank-details"

import { PersonalDocs } from "./personal-docs"
import { Profession } from "./profession"
import { VehicleDetails } from "./vehicle-details"

export class Customer {
    
    customerId:string
    customerFirstName:string
    customerMiddleName:string
    customerLastName:string
    customerEmail:string
    customerMobileNumber:string
    customerAlternateMobileNumber:string
    customerPanCard:string;
    customerAadharCard:string;
    customerDateOfBirth:string;
    customerGender:string
    
    customerQualification:string;
    customerCibilScore:string;
    customerLoanStatus:string;

    customerAddress:CustomerAddress;
    customerProfession:Profession;
    customerBankDetails:CustomerBankDetails;
    vehicleDetails:VehicleDetails;
    dealerBankDetails:DealerBankDetails;
    customerAllDocuments:CustomerAllDocuments;


   
}
