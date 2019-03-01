# TO-DO
*Note: I am terrible at commenting my code, if you see something that doesn’t make sense and figure it out please comment. Don't be a me and make it harder on future coders.*
## 1.	Functionality
1. Troubleshoot Current Issues
    1. Can't edit or update processes appropriately
    2. The graph starts with a crazy number
        1. Force graph to start at 0
## 2.	Dashboard
1.	A broad overview of how many processes have saved or costed money
2.	TCO of TCO (should be money saved, a negative number)
3.	Overview of how many suppliers, users, templates
4.	How many open templates outstanding
## 3.	Templates for Suppliers (editors)
1.	Roll this into role-based
## 4.	Private Label for Customers/ Resellers
1. Uploading a custom logo of a specific size
## 5.	Stripe Integration
1.	Tied to company not user
2.	Workflow streamlined
3.	Need seats
4.  Prevent user access if account isn't current on payments
## 6.	Migrate from Meteor / Mongo to   X / sql 
1.	Backup Current Database
2.	Create Usable SQL Tables
3.	Migrate to SQL
## 7.	Roles
1.	Company Admin
    1.	Add remove operators and editors
    2.	“Remove” processes (store all processes for later)
2.	Operator
    1.	Can edit and insert Processes
    2.	Cannot delete ANYTHING
3.	Editors/Suppliers
    1.	Can only update current templates
4.	The layout of Company/User/Processes Interaction
    1.	Company has many users
    2.	Processes have one Company
    3.	Company has many Processes
    4.	User can edit or add Processes
    5.	Company is created once by signup
    6.	Role(Admin) can edit Company
## 8.	Usability
1.	Calendar Edits for all dates
## 9.	Different language capability - enabled not necessarily executed
1.	I18n implementation for major and minor conventions
## 10.	Reports
1.	Create templates for reports
2.	Must have our logo at the bottom
3.	Timestamped and CreatedBy “username”
## 11.	Import/Export Functions
1.	Save Processes to an external device
2.	Import Saved Processes
## 12.	Applications (Handled with Cordova and Electron)
1.	iOS
2.	Android
3.	Linux
4.	Windows
5.	Mac
## 13.	Pricing Structure
1.	Create Owner’s Admin Panel for Joe
    1.	Create special pricing (intergrate with Stripe)
    2.	Create Resellers Accounts
