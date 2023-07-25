Feature: Candidate Home Home

  Background: Navigate to  page
    Given   I am on page "/"


  @homePageJobSearch
  Scenario Outline: Verify Home Page
    And   I should see text "Find a job"
    And   I fill in search title field with "<Title>"
    And   I fill in search location with "<Location>"
    And   I select "<Distance>" from search distance
    #And   I click on find jobs button
    Then  I should be able to see in browser URL "/jobs/sales-in-10001?r=20"
    And   I should see text H one tag "Sales jobs in 10001"
    And   the title field should contain "<Title1>"
    And   the location field should contain "<Location>"
    And   the distance field should contain "<Distance1>"

    Examples:
      | Title | Location | Distance | Distance1 |   Title1 |
      | Sales | 10001    | 20 Miles |   20      |   sales  |

  # @homePageRecentSearches
  # Scenario: Search for a job and verify that recent searches are displayed on home page
  #   When   I navigate to page "https://www-master.ci.resume-library.com/jobs"
  #   Then  I am on page "https://www-master.ci.resume-library.com/"
  #   And   I should see text "Recent Searches"
  #   And   I click on recent searches link
  #   And   I should see text "Sales jobs"
  #   And   I click on "Sales jobs"
  #   And   I should be able to see in browser URL "Jobs Sales"
  #   Then  I am on page "https://www-master.ci.resume-library.com/"
  #   And   I should see text "Here are some job matches you might like. We've based them on your previous search."
  #   And   I should see text "See more job matches"
  #   Then  I click on "See more job matches"
  #   Then  I should be able to see in browser URL "https://www-master.ci.resume-library.com/jobs/sales-in-10001?r=20"

  # @homeClearRecentSearches
  # Scenario: Search for a job and verify clear recent searches
  #   When  I navigate to page "https://www-master.ci.resume-library.com/jobs/sales-in-10001?r=20"
  #   Then  I am on page
  #   And   I should see text "Recent Searches"
  #   And   I click on recent searches link
  #   Then  I should be able to see in browser URL "https://www-master.ci.resume-library.com/"
  #   And   I click on clear recent searches link
  #   And   I confirm browser popup
   


  # @homePageOtherLinksPart1
  # Scenario: Validate other links on home page part1
  #   And   I should see text "Upload your Resume"
  #   And   I should see text "Employers"
  #   When  I click on "Upload your Resume"
  #   Then  I should be able to see in browser URL "https://www-master.ci.resume-library.com/candidate/registration"
  #   Then  I move backward one page
  #   When  I click on "Employers"
  #   Then  I should be able to see in browser URL "https://www-master.ci.resume-library.com/hiring"
  #   Then  I move backward one page
  #   And   I should see text "Jobs by Industry"
  #   And   I click on "Accounting"
  #   Then  I should be able to see in browser URL "https://www-master.ci.resume-library.com/jobs/accounting"
  #   And   I should see text H one tag "Accounting jobs"
  #   Then  I move backward one page
  #   And   I click on "Jobs by State"
  #   And   I click on "Alabama"
  #   Then  I should be able to see in browser URL "https://www-master.ci.resume-library.com/jobs/in-alabama-al-state"
  #   And   I should see text H one tag "Jobs in Alabama"
  #   Then  I move backward one page
  #   And   I click on "Jobs by City"
  #   And   I click on "Arlington, TX"
  #   Then  I should be able to see in browser URL "https://www-master.ci.resume-library.com/jobs/in-arlington-tx"
  #   And   I should see text H one tag "Jobs in Arlington, TX"
  #   Then  I move backward one page
  #   And   I click on "Popular Jobs"
  #   And   I click on "Administrative Assistant"
  #   Then  I should be able to see in browser URL "https://www-master.ci.resume-library.com/jobs/administrative-assistant"
  #   And   I should see text H one tag "Administrative Assistant jobs"
  #   Then  I move backward one page
  #   Then  I should see text "Upload your Resume"
  #   And   I should see text "Employers"
  #   When  I click on "Upload your Resume"
  #   Then  I should be able to see in browser URL "https://www-master.ci.resume-library.com/candidate/registration"
  #   Then  I move backward one page
  #   When  I click on "Employers"
  #   Then  I should be able to see in browser URL "https://www-master.ci.resume-library.com/hiring" 

  # @homePageOtherLinksPart2
  # Scenario: Validate other links and buttons on home page part2
  #   And   I should see text H two tag "Featured Companies"
  #   And   I click on "View all companies"
  #   Then  I should be able to see in browser URL "https://www-master.ci.resume-library.com/companies" 
  #   And   I should see text H one tag "Search Companies"
  #   Then  I move backward one page
  #   #And   I should see text "America's Fastest-Growing Job Board"
  #   And   I should see text "Resume-Library is one of the leading U.S. job boards, ready to assist with every aspect of your job hunt."
  #   #And  I should see text p tag "Upload your resume and use our " and verify message "Upload your resume and use our advanced searching tool to browse jobs, from over 50 different industries. Our Career Advice, written by industry experts, will support you from job search, to interview, and beyond."
  #   And   I click on "advanced searching tool"
  #   Then  I should be able to see in browser URL "https://www-master.ci.resume-library.com/search-jobs" 
  #   And   I should see text H one tag "Advanced Job Search"
  #   Then  I move backward one page
  #   And   I click on "browse jobs"
  #   Then  I should be able to see in browser URL "https://www-master.ci.resume-library.com/search-jobs/locations" 
  #   And   I should see text H one tag "Browse Jobs By Location"
  #   Then  I move backward one page
  #   And   I click on "50 different industries"
  #   Then  I should be able to see in browser URL "https://www-master.ci.resume-library.com/search-jobs" 
  #   And   I should see text H one tag "Advanced Job Search"
  #   Then  I move backward one page
  #   And   I click on "Career Advice"
  #   Then  I should be able to see in browser URL "https://www-master.ci.resume-library.com/career-advice/" 
  #   And   I should see text H one tag "Career Advice"

 
  # @homePageDropdowns 
  # Scenario Outline: Validate the link Text under Jobs by Industry, Jobs by State, Jobs by City and Popular Jobs tabs on HomePage
  #   And   I should see text "Jobs by Industry"
  #   Then  I should see linkText "<JobsByIndustry>" under Jobs by Industry tab
  #   And   I click on "Jobs by State"
  #   Then  I should see linkText "<JobsByState>" under Jobs by State tab
  #   And   I click on "Jobs by City"
  #   Then  I should see linkText "<JobsByCity>" under Jobs by City tab
  #   And   I click on "Popular Jobs"
  #   Then  I should see linkText "<PopularJobs>" under Popular Jobs tab
  #   Examples:
  #     |   JobsByIndustry     | JobsByState  | JobsByCity | PopularJobs              |
  #     |   Manufacturing      | South Dakota | Denver, CO | Administrative Assistant |

  
  # @verifySector @ReleaseRegression2
  # Scenario: Verify results by changing sector and location
  #   Given I login as a client
  #   Then  I navigate to page "https://www-master.ci.resume-library.com/hiring/demographics"
  #   And   I should see text "Explore candidates from every sector across the U.S."
  #   When  I select the option "Accounting" from "Sector" field
  #   Then  I select the option "California" from "Status" field
  #   And   I confirm browser popup
  #   Then  I should see text "Resume Matches"
  #   When  I click on "Preview Resume"
  #   And   I switch tab
  #   #Then  I should be able to see in browser URL "Client Resume View Candidate Profile" or I should see "Client Resume Search"
  