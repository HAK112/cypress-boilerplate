Feature: Sandbox

  Scenario Outline: Navigate to Amazon and search for Phone

    Given I am on Amazon website
    Then Search for "One Plus 8T"
    And Open phone "OnePlus 8 iN2010 256GB 12GB RAM"
    And Verify "<price>" is displayed on detail page


    Examples:
    |price    |
    |$614.99  |

  Scenario Outline: Verify your Cart is Empty and then Add to Cart

    Given I am on Amazon website
    And Verify Cart is Empty
    Then Search for "One Plus 8T"
    And Open phone "OnePlus 8 iN2010 256GB 12GB RAM"
    And Click on Add to Cart
    And Verify Items added to Cart

    Examples:
      |price|
      |598  |

  @filters
  Scenario Outline: Apply Filters of different Brands and specific features

    Given I am on Amazon website
    Then Search for "Samsung Phone"
    And Select filters "<Brand>" from left panel and get results
    And Open phone "Samsung Galaxy S10+ Plus 128GB"
    And Click on Add to Cart
    And Verify Items added to Cart

    Examples:
      |Brand                 |
      |SAMSUNG;Android;8 GB  |
