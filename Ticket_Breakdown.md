# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

- create database models (Facilities Table, Agents Table, Shifts Table)
    
    # Acceptance Criteria
        1. Each Record in Shifts Table should have (Auto generate Unique Shift ID, Agent ID, Facility ID, Name, Start Date/Time of Shift, and End Date/Time of Shift, Shift Status which either completed, not-started, cancelled)
        2. Each Record in Agents Table should have (Auto generate Unique Agent ID, Agent Name, Agent Contact, Agent Availability)
        3. Each Record in Facilities Table should have (Unique Facility ID, Facility Name, Facility Location, Array of Agents Containing Object Of Agent Name, Agent ID, auto generate unique IDs according on when Agent worked on the facility or according to the number of agents added before)
    # Time/Effort
        1. To be completed in 1 days 
        2. This SubTask have 1 Story Point 
- GET/POST/DELETE/PUT Facilities API    

    # Acceptance Criteria
        1. Admin should be able to add a facility with (Facility Name, Facility Location) and auto generate unique ID for each facility
        2. Admin should be able to get All falicilities in the system 
        3. Admin should be able to delete facility
        4. Admin should be able to update facility
    # Time/Effort
        1. To be completed in 1.5 days 
        2. This SubTask have 1.5 Story Point 

- GET/POST/DELETE/PUT Agents API  

    # Acceptance Criteria
        1. Admin should be able to add a agent with (Agent Name, Agent Contact, Agent Availability by default agent is available) and auto generate unique ID for each agent
        2. Admin should be able to get All agents in the system 
        3. Admin should be able to delete agent
        4. Admin should be able to update agent
    # Time/Effort
        1. To be completed in 1.5 days 
        2. This SubTask have 1.5 Story Point 

- GET/POST/DELETE/PUT Shifts API  

    # Acceptance Criteria
        1. Admin should be able to add a shifts with (Agent ID, Facility ID, start Date/Time, end Date/Time, shift Status by default is not-started) and auto generate unique ID for each Shift and Update the Facility (add Agent as one the agents who worked on that facility). 
        2. Admin should be able to get All shifts in the system and generate PDF report including all information with (`generateReport` Function)
        3. Admin should be able to get all shifts by facility ID with (`getShiftsByFacility` Function) and generate PDF report including all information with (`generateReport` Function)
        3. Admin should be able to delete shifts
        4. Admin should be able to update shifts

    # Time/Effort
        1. To be completed in 2.5 days 
        2. This SubTask have 2.5 Story Point 
