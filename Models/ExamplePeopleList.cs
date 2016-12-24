using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace peoplesearch.Models
{
    public class ExamplePeopleList
    {
        public List<Person> ExampleList;

        public ExamplePeopleList()
        {
            ExampleList = new List<Person>()
            {
                new Person() {FirstName = "Bob", LastName = "Smith", UserName = "BobbySmith756", PhoneNumber = "213-527-7257"},
                new Person() {FirstName = "Sally", LastName = "May", UserName = "MayJune", PhoneNumber = "263-638-8383"},
                new Person() {FirstName = "Yogi", LastName = "Bear", UserName = "YogiYoYo", PhoneNumber = "813-171-9368"}
            };
        }
    }
}
