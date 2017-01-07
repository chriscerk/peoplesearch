using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace peoplesearch.Models
{
    public class Person
    {
        public Guid Id = Guid.NewGuid();
        public string FirstName;
        public string LastName;
        public string UserName;
        public string PhoneNumber;
        public string Email;
    }
}
