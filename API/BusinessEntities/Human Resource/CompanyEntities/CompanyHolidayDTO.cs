﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;

namespace BusinessEntities
{

    [Serializable]
    [DataContract]
    public class CompanyHolidayDTO
    {

        [DataMember]
        public int Id { get; set; }
        [DataMember]
        public int CompanyId { get; set; }
        [DataMember]
        public string CompanyName { get; set; }
        [DataMember]
        public string EmployeeType { get; set; }
        [DataMember]
        public DateTime Date { get; set; }
        [DataMember]
        public string Description { get; set; }
        [DataMember]
        public string CreatedBy { get; set; }
        [DataMember]
        public DateTime CreatedDate { get; set; }
        [DataMember]
        public string ModifiedBy { get; set; }
        [DataMember]
        public DateTime ModifiedDate { get; set; }
        [DataMember]
        public byte Active { get; set; }
    }

    [Serializable]
    [DataContract]
    public class CompanyHolidayGetDTO
    {
        [DataMember]
        public int Id { get; set; }
        [DataMember]
        public byte Active { get; set; }
        [DataMember]
        public string ActionBy { get; set; }
    }
    [Serializable]
    [DataContract]
    public class CompanyHolidayInsertDTO
    {
        [DataMember]
        public int CompanyId { get; set; }
        [DataMember]
        public string EmployeeType { get; set; }
        [DataMember]
        public DateTime Date { get; set; }
        [DataMember]
        public string Description { get; set; }
        [DataMember]
        public string CreatedBy { get; set; }
    }


    [Serializable]
    [DataContract]
    public class CompanyHolidayUpdateDTO
    {
        [DataMember]
        public int Id { get; set; }
        [DataMember]
        public int CompanyId { get; set; }
        [DataMember]
        public string EmployeeType { get; set; }
        [DataMember]
        public DateTime Date { get; set; }
        [DataMember]
        public string Description { get; set; }
        [DataMember]
        public string ModifiedBy { get; set; }
        [DataMember]
        public byte Active { get; set; }
    }

    [Serializable]
    [DataContract]
    public class CompanyHolidayRemoveDTO
    {
        [DataMember]
        public int Id { get; set; }
        [DataMember]
        public byte Active { get; set; }
        [DataMember]
        public string ActionBy { get; set; }
    }
}
