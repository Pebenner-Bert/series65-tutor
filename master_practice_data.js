// Master Practice Test — Series 65 — 220 original questions covering concepts from
// the High-Yield 100 Drill and TestGeek 130 Final question banks, newly worded.
// Balanced across the 4 exam domains: Economic Factors, Investment Vehicles,
// Client Recommendations & Strategies, and Laws/Regs/Ethics.
// Math-heavy plug-in items rewritten to concept/ranking/direction (2026-08-31).
const MASTER_PRACTICE_QUESTIONS = [
  {
    "id": 1,
    "question": "A planner tells a client that a diversified portfolio has historically compounded at a mid- to high-single-digit annual rate. Using the Rule of 72, how should doubling time be described?",
    "choices": {
      "A": "Years to double ≈ 72 divided by the annual percent return—an approximation, not a precise TVM result",
      "B": "Years to double equal 72 minus the return",
      "C": "Money doubles every 72 years regardless of return",
      "D": "The Rule of 72 estimates years to triple, not double"
    },
    "correct": "A",
    "explanation": "Rule of 72 ≈ 72/rate for doubling. The Series 65 wants the shortcut's meaning. Grinding 72 ÷ 9 = 8 is not the skill being tested."
  },
  {
    "id": 2,
    "question": "A CD quotes a positive nominal interest rate in a year when CPI inflation is also positive. The investor's approximate real rate of return is:",
    "choices": {
      "A": "Nominal plus inflation",
      "B": "Equal to the stated CD rate, because CDs ignore inflation",
      "C": "Nominal minus inflation—the purchasing-power result, which is smaller than the quoted rate",
      "D": "Equal to CPI alone"
    },
    "correct": "C",
    "explanation": "Real ≈ nominal − inflation. You do not need 5.5% − 3.1% = 2.4% to know why the statement rate overstates purchasing-power growth."
  },
  {
    "id": 3,
    "question": "An economics professor explains GDP to a client as the sum of consumption, investment, government spending, and net exports (C + I + G + (X − M)). Which of the following would NOT be directly included in this calculation of GDP?",
    "choices": {
      "A": "Purchase of a newly constructed home",
      "B": "Government spending on a new highway",
      "C": "The resale of an existing home between two private parties",
      "D": "A corporation's purchase of new manufacturing equipment"
    },
    "correct": "C",
    "explanation": "GDP measures the value of newly produced goods and services in a given period. The resale of an existing home involves no new production and is therefore excluded, whereas new construction, government spending, and business investment in new equipment all represent current production."
  },
  {
    "id": 4,
    "question": "Approximate real GDP growth equals:",
    "choices": {
      "A": "Nominal GDP growth plus inflation",
      "B": "Nominal GDP growth minus inflation (the GDP deflator)—real growth strips out price changes",
      "C": "Inflation alone",
      "D": "Nominal GDP, because the deflator is not used for GDP"
    },
    "correct": "B",
    "explanation": "Real ≈ nominal − inflation. That identity replaces 6.5% − 4.0% = 2.5% clones."
  },
  {
    "id": 5,
    "question": "A bank temporarily short on reserves has two borrowing options: borrowing overnight reserves from another bank at the fed funds rate, or borrowing directly from the Federal Reserve's discount window at the discount rate. Which statement best describes the typical relationship between these two rates?",
    "choices": {
      "A": "The discount rate is normally set below the fed funds rate to encourage banks to borrow from the Fed",
      "B": "The fed funds rate and discount rate are always identical because both are directly set by the FOMC",
      "C": "The discount rate is normally set above the fed funds rate, making it a backup, higher-cost source of funds",
      "D": "The discount rate applies only to consumer loans and has no connection to bank reserves"
    },
    "correct": "C",
    "explanation": "The discount rate is typically set above the fed funds rate so that banks use the Fed's discount window only as a last resort after exhausting cheaper interbank borrowing options. This penalty-rate structure discourages routine reliance on the Fed as a funding source."
  },
  {
    "id": 6,
    "question": "The FOMC decides to purchase $50 billion of U.S. Treasury securities from primary dealers in the open market. What is the most likely immediate effect of this action on bank reserves and short-term interest rates?",
    "choices": {
      "A": "Bank reserves decrease and short-term rates rise",
      "B": "Bank reserves increase and short-term rates tend to fall",
      "C": "Bank reserves are unaffected because open market operations only affect the discount rate",
      "D": "Bank reserves increase, but short-term rates typically rise because more money is available to lend"
    },
    "correct": "B",
    "explanation": "When the Fed buys Treasury securities, it pays for them by crediting reserves to the selling banks, increasing the overall supply of reserves in the banking system. With more reserves available, banks compete to lend excess reserves, pushing short-term rates, including the fed funds rate, lower."
  },
  {
    "id": 7,
    "question": "To stimulate a sluggish economy, the Federal Reserve reduces the reserve requirement for depository institutions. What is the most likely effect on the money supply and bank lending capacity?",
    "choices": {
      "A": "The money supply contracts because banks must hold more reserves",
      "B": "Banks can lend a larger percentage of each new deposit, expanding the money supply through the multiplier effect",
      "C": "There is no effect on money supply since reserve requirements only apply to foreign banks",
      "D": "The prime rate automatically increases as a direct result"
    },
    "correct": "B",
    "explanation": "A lower reserve requirement allows banks to hold less of each deposit in reserve and lend out more, increasing the money multiplier and expanding the overall money supply. This is an expansionary monetary policy tool used to stimulate economic activity."
  },
  {
    "id": 8,
    "question": "During a recession with high unemployment, Congress passes a bill that cuts personal income taxes and increases spending on infrastructure projects. This is an example of:",
    "choices": {
      "A": "Contractionary monetary policy",
      "B": "Expansionary fiscal policy intended to boost aggregate demand",
      "C": "Supply-side monetary easing",
      "D": "A balanced-budget policy with no net economic effect"
    },
    "correct": "B",
    "explanation": "Fiscal policy involves government taxation and spending decisions made by the legislative and executive branches, not the central bank. Cutting taxes and increasing spending during a downturn are classic expansionary fiscal measures designed to increase aggregate demand and stimulate growth."
  },
  {
    "id": 9,
    "question": "A client observes that 2-year Treasury notes yield 3.0% while 10-year Treasury bonds yield 4.2%. This upward-sloping pattern is often referred to as a normal yield curve. What does this shape typically reflect?",
    "choices": {
      "A": "Investors demand a lower return for holding longer-term bonds",
      "B": "The economy is very likely headed for a recession",
      "C": "Investors generally require higher yields to compensate for the greater interest rate and inflation risk of longer maturities",
      "D": "Short-term rates are always set higher than long-term rates by the Fed"
    },
    "correct": "C",
    "explanation": "A normal, upward-sloping yield curve reflects the fact that investors typically demand higher compensation for the added interest rate risk, inflation risk, and uncertainty associated with longer-maturity bonds. This is the most common and expected shape of the yield curve in a healthy, growing economy."
  },
  {
    "id": 10,
    "question": "Six-month Treasury bills currently yield 5.1%, while 10-year Treasury notes yield 3.9%. This inverted relationship has historically been viewed by economists as:",
    "choices": {
      "A": "A sign of imminent hyperinflation",
      "B": "A reliable leading indicator that frequently precedes an economic recession",
      "C": "Evidence that the bond market is functioning inefficiently",
      "D": "A permanent structural feature of the U.S. debt market"
    },
    "correct": "B",
    "explanation": "An inverted yield curve, where short-term yields exceed long-term yields, has historically preceded most U.S. recessions, as it often reflects market expectations that the Fed will need to cut rates in the future due to a weakening economy. It is widely tracked as a leading economic indicator."
  },
  {
    "id": 11,
    "question": "Which of the following is generally classified as a leading economic indicator, useful for predicting the future direction of the economy?",
    "choices": {
      "A": "The unemployment rate",
      "B": "Corporate profits reported last quarter",
      "C": "Building permits for new private housing",
      "D": "The average duration of unemployment"
    },
    "correct": "C",
    "explanation": "Building permits are considered a leading indicator because increased permit activity signals future construction and economic activity before it occurs. Unemployment rate and average duration of unemployment are lagging indicators, and reported corporate profits reflect past performance."
  },
  {
    "id": 12,
    "question": "An economist reviewing data notes that a particular statistic tends to confirm a business cycle turning point only after it has already occurred. Which of the following is considered a lagging economic indicator?",
    "choices": {
      "A": "New orders for durable goods",
      "B": "The index of consumer expectations",
      "C": "The average duration of unemployment",
      "D": "Building permits"
    },
    "correct": "C",
    "explanation": "The average duration of unemployment is a lagging indicator because it typically continues to rise for a period after a recession has technically ended, confirming a downturn only in hindsight. New orders, consumer expectations, and building permits are all leading indicators."
  },
  {
    "id": 13,
    "question": "Which economic measure moves roughly in tandem with the overall business cycle, rising and falling at approximately the same time as the broader economy?",
    "choices": {
      "A": "Stock market index levels",
      "B": "Industrial production",
      "C": "Average prime rate charged by banks",
      "D": "Manufacturers' new orders for capital goods"
    },
    "correct": "B",
    "explanation": "Industrial production is a coincident indicator because it tends to move in sync with current overall economic activity. Stock prices and new orders are leading indicators (anticipating future activity), while the prime rate tends to lag changes in the broader economy."
  },
  {
    "id": 14,
    "question": "A government agency calculates the change in price of a fixed basket of goods and services typically purchased by urban households and publishes the result monthly. This statistic is best known as:",
    "choices": {
      "A": "The GDP deflator",
      "B": "The Producer Price Index (PPI)",
      "C": "The Consumer Price Index (CPI)",
      "D": "The Index of Leading Economic Indicators"
    },
    "correct": "C",
    "explanation": "The CPI tracks the price of a fixed market basket of consumer goods and services purchased by urban households and is the most widely cited measure of consumer inflation. The PPI instead measures prices at the wholesale/producer level, and the GDP deflator covers all domestically produced output."
  },
  {
    "id": 15,
    "question": "An analyst notes that wholesale prices paid by manufacturers for raw materials rose sharply last month. Because these cost increases are often eventually passed on to consumers, the Producer Price Index (PPI) is often viewed as:",
    "choices": {
      "A": "A lagging indicator that only confirms changes in CPI after they occur",
      "B": "A potential leading indicator of future changes in consumer prices (CPI)",
      "C": "Identical to the CPI in methodology and coverage",
      "D": "Irrelevant to inflation forecasting since it excludes finished goods"
    },
    "correct": "B",
    "explanation": "Because rising producer costs are frequently passed through the supply chain to end consumers, increases in the PPI are often watched as an early signal of potential future increases in the CPI. The PPI and CPI measure different stages of the economy (producer versus consumer) and are not identical."
  },
  {
    "id": 16,
    "question": "During the 1970s, the U.S. economy experienced a period of high unemployment and stagnant economic growth occurring simultaneously with high inflation, largely triggered by an oil price shock. This economic condition is known as:",
    "choices": {
      "A": "Disinflation",
      "B": "Stagflation",
      "C": "Deflation",
      "D": "A liquidity trap"
    },
    "correct": "B",
    "explanation": "Stagflation describes the unusual combination of high inflation, high unemployment, and stagnant (or negative) economic growth occurring at the same time, which contradicts the typical inverse relationship between inflation and unemployment. The 1970s oil embargo is the classic textbook example."
  },
  {
    "id": 17,
    "question": "The U.S. dollar depreciates significantly against the euro. Which of the following is the most likely effect on a U.S. manufacturer that exports goods to Europe?",
    "choices": {
      "A": "The manufacturer's goods become more expensive for European buyers, reducing export sales",
      "B": "The manufacturer's goods become relatively cheaper for European buyers, likely boosting export sales",
      "C": "The exchange rate change has no effect on international sales, only on domestic sales",
      "D": "The manufacturer will need to raise prices in the U.S. to offset the currency change"
    },
    "correct": "B",
    "explanation": "When the dollar depreciates (weakens) against another currency, U.S. goods become relatively less expensive for foreign buyers purchasing with their stronger currency, which tends to make U.S. exports more competitive and can boost export volumes."
  },
  {
    "id": 18,
    "question": "The Japanese yen appreciates sharply against the U.S. dollar. How would this most likely affect a U.S. retailer that imports electronics manufactured in Japan?",
    "choices": {
      "A": "The retailer's cost of imported goods decreases, improving profit margins",
      "B": "The retailer's cost of imported goods increases, likely raising prices or squeezing margins",
      "C": "There is no impact because exchange rates do not affect the price of imported goods",
      "D": "The retailer will benefit from cheaper imports because a stronger yen makes Japanese goods less expensive in dollar terms"
    },
    "correct": "B",
    "explanation": "If the yen appreciates relative to the dollar, it takes more dollars to buy the same amount of yen-denominated goods, raising the retailer's cost of imported Japanese electronics. This typically leads to higher retail prices or reduced profit margins for the importer."
  },
  {
    "id": 19,
    "question": "A country runs a persistent current account deficit, importing more goods and services than it exports. For the overall balance of payments to balance, this deficit must generally be offset by:",
    "choices": {
      "A": "A capital/financial account surplus, such as foreign investors purchasing the country's securities and real assets",
      "B": "An equal current account surplus in the following year",
      "C": "A reduction in the country's GDP",
      "D": "Mandatory tariffs imposed on all trading partners"
    },
    "correct": "A",
    "explanation": "The balance of payments must balance overall; a current account deficit (more imports than exports) is typically offset by a capital/financial account surplus, meaning foreign investors are net purchasers of the country's securities, real estate, or other assets, effectively financing the trade gap."
  },
  {
    "id": 20,
    "question": "In response to concerns about a domestic steel industry, the federal government imposes a significant tariff on imported steel. Which outcome is most likely?",
    "choices": {
      "A": "Domestic steel prices fall as competition increases",
      "B": "Domestic steel producers face lower costs and can undercut foreign competitors without price changes",
      "C": "Prices for steel-consuming domestic industries (e.g., automakers) rise, and trading partners may retaliate with their own tariffs",
      "D": "The tariff has no effect on domestic prices because tariffs apply only to the exporting country's producers"
    },
    "correct": "C",
    "explanation": "Tariffs raise the price of imported goods, which tends to increase costs for domestic industries that rely on those imported materials (such as automakers using steel), and often provokes retaliatory tariffs from affected trading partners, escalating trade tensions rather than lowering costs."
  },
  {
    "id": 21,
    "question": "During a severe economic downturn, the Federal Reserve announces it will purchase large quantities of long-term Treasury securities and mortgage-backed securities, significantly expanding its balance sheet. This unconventional monetary policy tool is known as:",
    "choices": {
      "A": "Quantitative tightening",
      "B": "Quantitative easing",
      "C": "A reverse repurchase agreement",
      "D": "Fiscal stimulus"
    },
    "correct": "B",
    "explanation": "Quantitative easing (QE) involves the central bank purchasing large quantities of longer-term securities to inject liquidity into the financial system, lower long-term interest rates, and stimulate economic activity when conventional short-term rate cuts are no longer sufficient or available."
  },
  {
    "id": 22,
    "question": "As the economy strengthens and inflation becomes a concern, the Federal Reserve begins allowing its holdings of Treasury and mortgage-backed securities to mature without reinvesting the proceeds, shrinking its balance sheet. This process is best described as:",
    "choices": {
      "A": "Quantitative easing",
      "B": "An open market purchase",
      "C": "Quantitative tightening",
      "D": "A discount rate cut"
    },
    "correct": "C",
    "explanation": "Quantitative tightening (QT) is the reverse of quantitative easing: the central bank reduces the size of its balance sheet by letting securities mature (or actively selling them) without reinvesting the proceeds, which reduces liquidity in the financial system and tends to put upward pressure on interest rates."
  },
  {
    "id": 23,
    "question": "Consumer spending surges due to a combination of low unemployment, rising wages, and easy credit, causing aggregate demand to outpace the economy's productive capacity and prices to rise broadly. This is best described as:",
    "choices": {
      "A": "Cost-push inflation",
      "B": "Demand-pull inflation",
      "C": "Structural deflation",
      "D": "Stagflation"
    },
    "correct": "B",
    "explanation": "Demand-pull inflation occurs when aggregate demand grows faster than the economy's ability to produce goods and services, causing prices to rise as too much money chases too few goods. This contrasts with cost-push inflation, which originates from rising input costs rather than excess demand."
  },
  {
    "id": 24,
    "question": "A sudden spike in global crude oil prices sharply raises transportation and production costs across many industries, causing businesses to raise prices even though consumer demand has not increased. This is best described as:",
    "choices": {
      "A": "Demand-pull inflation",
      "B": "Cost-push inflation",
      "C": "Hyperinflation caused by monetary expansion",
      "D": "Deflation"
    },
    "correct": "B",
    "explanation": "Cost-push inflation results from rising production costs, such as an oil price shock, that force businesses to raise prices independent of any change in consumer demand. This differs from demand-pull inflation, which is driven by excess demand rather than supply-side cost increases."
  },
  {
    "id": 25,
    "question": "An economist argues that inflation over the long run is primarily caused by growth in the money supply exceeding the growth in real economic output, and recommends the central bank maintain a steady, predictable rate of money supply growth. This view is most closely associated with:",
    "choices": {
      "A": "Keynesian economics",
      "B": "Supply-side economics",
      "C": "Monetarism",
      "D": "Mercantilism"
    },
    "correct": "C",
    "explanation": "Monetarism, associated with economists such as Milton Friedman, holds that inflation is fundamentally a monetary phenomenon caused by excessive growth in the money supply relative to output, and advocates for controlled, predictable money supply growth rather than active fiscal intervention."
  },
  {
    "id": 26,
    "question": "An economist recommends that during a recession, the government should increase deficit spending and cut taxes to stimulate aggregate demand, arguing that markets do not always self-correct quickly enough on their own. This approach is most closely associated with:",
    "choices": {
      "A": "Monetarist theory",
      "B": "Keynesian economics",
      "C": "Supply-side economics",
      "D": "The efficient market hypothesis"
    },
    "correct": "B",
    "explanation": "Keynesian economics emphasizes active government intervention through fiscal policy—increased spending and tax cuts—to boost aggregate demand during economic downturns, based on the view that markets can remain in a state of underemployment without such intervention."
  },
  {
    "id": 27,
    "question": "A policymaker proposes reducing marginal tax rates on businesses and investment income, arguing this will increase incentives to work, save, and invest, thereby shifting the economy's aggregate supply curve to the right and boosting long-run growth. This approach is best characterized as:",
    "choices": {
      "A": "Keynesian demand management",
      "B": "Supply-side economics",
      "C": "Monetarist policy",
      "D": "Protectionism"
    },
    "correct": "B",
    "explanation": "Supply-side economics focuses on policies, such as lower marginal tax rates on business and investment income, designed to increase the incentives to produce, save, and invest, thereby expanding the economy's productive capacity (aggregate supply) rather than directly targeting aggregate demand."
  },
  {
    "id": 28,
    "question": "A manager holds Bond X with a much lower effective duration than Bond Y. If market interest rates rise, which statement is most accurate?",
    "choices": {
      "A": "Bond X will fall more because low duration means more risk",
      "B": "Bond Y (higher duration) is expected to fall by a larger percentage; % price change ≈ −duration × change in yield",
      "C": "Both bonds decline by the same percent because both are fixed-income",
      "D": "Bond X will rise in price because it has lower duration"
    },
    "correct": "B",
    "explanation": "Duration ranks rate sensitivity. Rates up → prices down; more duration → more decline. Skip multiplying 12 × 1% to print 12%."
  },
  {
    "id": 29,
    "question": "An economist wants to measure price changes across all goods and services produced domestically, not just a fixed basket of consumer goods, and needs a broader measure to convert nominal GDP into real GDP. Which economic measure is most appropriate for this purpose?",
    "choices": {
      "A": "The Consumer Price Index (CPI)",
      "B": "The Producer Price Index (PPI)",
      "C": "The GDP deflator",
      "D": "The unemployment rate"
    },
    "correct": "C",
    "explanation": "The GDP deflator measures the price level of all goods and services produced domestically within an economy, making it the appropriate broad-based tool for converting nominal GDP into real GDP, unlike the CPI (a fixed consumer basket) or the PPI (wholesale prices)."
  },
  {
    "id": 30,
    "question": "A steel town's mill closes permanently due to automation, and many laid-off workers lack the skills needed for available jobs in other industries. This type of unemployment, which persists even during periods of economic expansion, is best classified as:",
    "choices": {
      "A": "Frictional unemployment",
      "B": "Cyclical unemployment",
      "C": "Structural unemployment",
      "D": "Seasonal unemployment"
    },
    "correct": "C",
    "explanation": "Structural unemployment results from a fundamental mismatch between workers' skills and the skills demanded by available jobs, often due to technological change or shifting industries, and it can persist even when the broader economy is expanding, unlike cyclical unemployment tied to the business cycle."
  },
  {
    "id": 31,
    "question": "A regional bank facing an unexpected short-term liquidity shortage borrows directly from the Federal Reserve rather than from other banks in the fed funds market. This borrowing facility, which typically carries a higher, penalty-like rate, is known as:",
    "choices": {
      "A": "The prime rate facility",
      "B": "The discount window",
      "C": "The federal funds market",
      "D": "A repurchase agreement with the Treasury"
    },
    "correct": "B",
    "explanation": "The discount window is the Federal Reserve facility through which eligible depository institutions can borrow directly from the Fed, typically as a backup source of funds at a rate set above the fed funds rate, functioning as the Fed's lender-of-last-resort mechanism."
  },
  {
    "id": 32,
    "question": "The economy has reached the trough of the business cycle, characterized by high unemployment and minimal growth. Which combination of Federal Reserve actions would most likely be implemented to stimulate a recovery?",
    "choices": {
      "A": "Raising the discount rate and increasing reserve requirements",
      "B": "Selling Treasury securities in the open market and raising the fed funds rate target",
      "C": "Lowering the fed funds rate target, reducing reserve requirements, and purchasing securities in the open market",
      "D": "Maintaining all monetary policy tools unchanged to allow the economy to self-correct"
    },
    "correct": "C",
    "explanation": "At the trough of the business cycle, the Fed typically pursues expansionary (easy) monetary policy using all available tools together: lowering the fed funds rate target, reducing reserve requirements, and conducting open market purchases, all of which increase liquidity and encourage borrowing and investment to spur recovery."
  },
  {
    "id": 33,
    "question": "In a given quarter, a country exports $340 billion of goods and services and imports $415 billion of goods and services. What is the country's trade balance for the quarter, and what does it represent?",
    "choices": {
      "A": "A $75 billion trade surplus",
      "B": "A $755 billion trade deficit",
      "C": "A $75 billion trade deficit",
      "D": "A $415 billion trade surplus"
    },
    "correct": "C",
    "explanation": "The trade balance equals exports minus imports: $340 billion − $415 billion = −$75 billion, meaning the country imported $75 billion more than it exported, resulting in a trade deficit rather than a surplus."
  },
  {
    "id": 34,
    "question": "A corporate coupon bond trades in the secondary market below par. Relative to the stated coupon rate, current yield is:",
    "choices": {
      "A": "Equal to the coupon rate at every price",
      "B": "Higher than the coupon rate, because annual coupon dollars are divided by a price below par",
      "C": "Lower than the coupon rate for every discount bond",
      "D": "Equal to YTM only for zeros"
    },
    "correct": "B",
    "explanation": "Current yield = annual coupon / market price. Discount → CY > coupon. The exam wants that ranking, not $50 / $960 ≈ 5.21%."
  },
  {
    "id": 35,
    "question": "A corporate bond is currently trading at a premium to its par value. Which of the following correctly ranks the bond's coupon rate, current yield, and yield to maturity from highest to lowest?",
    "choices": {
      "A": "Yield to maturity > current yield > coupon rate",
      "B": "Coupon rate > current yield > yield to maturity",
      "C": "Current yield > coupon rate > yield to maturity",
      "D": "All three are always equal regardless of price"
    },
    "correct": "B",
    "explanation": "For a premium bond, coupon rate is highest, current yield is in the middle, and yield to maturity is lowest, because YTM also reflects the capital loss the investor will realize as the price declines to par at maturity."
  },
  {
    "id": 36,
    "question": "Bond A has a 5-year maturity and Bond B has a 20-year maturity; both carry identical 4% coupons and identical credit quality. If market interest rates rise by 100 basis points, which bond will experience the larger percentage price decline, and why?",
    "choices": {
      "A": "Bond A, because shorter maturities are always more sensitive to rate changes",
      "B": "Bond B, because longer-maturity bonds have higher duration and greater price sensitivity to a given change in yield",
      "C": "Both bonds will decline by an identical percentage since they share the same coupon",
      "D": "Neither bond's price will change because both bonds have fixed coupon rates"
    },
    "correct": "B",
    "explanation": "Duration increases with time to maturity (holding coupon constant), and bonds with higher duration experience larger percentage price swings for a given change in yield. Bond B's longer maturity gives it materially greater interest-rate sensitivity than Bond A."
  },
  {
    "id": 37,
    "question": "A risk-averse client is comparing three municipal bonds: (1) an unlimited-tax general obligation bond backed by a state's full taxing power, (2) a limited-tax GO bond capped by statute, and (3) a revenue bond funding a new toll bridge with uncertain traffic projections. Ranked from lowest to highest credit risk, which order is most accurate?",
    "choices": {
      "A": "Revenue bond, limited-tax GO, unlimited-tax GO",
      "B": "Unlimited-tax GO, limited-tax GO, revenue bond",
      "C": "Limited-tax GO, revenue bond, unlimited-tax GO",
      "D": "All three carry identical credit risk because they are all municipal bonds"
    },
    "correct": "B",
    "explanation": "Unlimited-tax GO bonds are backed by the issuer's broadest taxing power and are generally lowest risk; limited-tax GOs are constrained in how much tax can be raised; single-purpose revenue bonds depend entirely on uncertain project revenue and typically carry the highest credit risk of the three."
  },
  {
    "id": 38,
    "question": "An investor purchases a newly issued 10-year zero-coupon corporate bond in a taxable brokerage account at a deep discount to face value. Which statement about the federal tax treatment of this bond is correct?",
    "choices": {
      "A": "No taxes are due until the bond matures or is sold, since no cash interest is ever paid annually",
      "B": "The investor must report the annual accreted (imputed) original issue discount as taxable ordinary income each year, even though no cash interest is received",
      "C": "The entire original issue discount is taxed as a long-term capital gain, but only in the year of maturity",
      "D": "Zero-coupon corporate bonds are exempt from federal taxation because they pay no periodic coupon"
    },
    "correct": "B",
    "explanation": "Zero-coupon bonds accrete in value toward par each year, and the IRS requires holders to recognize this phantom (imputed) interest as ordinary taxable income annually under the original issue discount rules, even though no cash is actually received until maturity."
  },
  {
    "id": 39,
    "question": "An investor buys a $1,000 par Treasury Inflation-Protected Security (TIPS) with a 2% real coupon rate. Over the next year the CPI rises by 3%. Which statement best describes the effect on the investor's principal and interest payments?",
    "choices": {
      "A": "The par value remains $1,000, and only the coupon rate itself is increased to compensate for inflation",
      "B": "The principal is adjusted upward to approximately $1,030, and the coupon payment is calculated as 2% of the new, higher adjusted principal, so the dollar amount of interest received also rises",
      "C": "TIPS pay a fixed dollar coupon regardless of inflation, and only the redemption value at maturity is adjusted for CPI changes",
      "D": "The coupon rate itself is adjusted upward by the CPI change while the principal amount stays fixed at $1,000"
    },
    "correct": "B",
    "explanation": "TIPS adjust the underlying principal semiannually to reflect changes in the CPI, and the fixed real coupon rate is then applied to that adjusted (higher) principal, increasing the dollar amount of each interest payment as inflation rises."
  },
  {
    "id": 40,
    "question": "A convertible corporate bond with a $1,000 par value has a conversion ratio of 25 shares. The underlying common stock currently trades at $32 per share, and the bond is trading at $850. Which statement is correct?",
    "choices": {
      "A": "The bond is trading below its conversion value, so the investor should convert immediately for a guaranteed profit",
      "B": "The bond's conversion value is $800 (25 × $32), which is below its $850 market price; the stock would need to reach $34 per share (parity) for conversion to be economically neutral",
      "C": "The conversion price is $32, exactly equal to the current stock price, indicating the bond is trading at parity",
      "D": "The bond's par value must be reduced because the conversion value is less than the bond's market price"
    },
    "correct": "B",
    "explanation": "Conversion value equals the conversion ratio times the stock price: 25 × $32 = $800, well below the bond's $850 market price, so converting now would be a losing trade. Parity occurs when the stock reaches $850 ÷ 25 = $34."
  },
  {
    "id": 41,
    "question": "Modified duration is used mainly to estimate:",
    "choices": {
      "A": "A rise in price when yields rise",
      "B": "The percentage price change for a small yield change: prices fall when yields rise, by roughly duration times the yield change",
      "C": "A collapse of price to zero for any 50 bp move",
      "D": "Convexity only, not price sensitivity"
    },
    "correct": "B",
    "explanation": "Know the sign and the rule. A 50 bp example does not require computing −8 × 0.005 = −$40 on the Series 65."
  },
  {
    "id": 42,
    "question": "XYZ Corp has 8% cumulative preferred stock outstanding with a $100 par value. The company suspended preferred dividends entirely for two consecutive years due to financial distress. In the third year, the board wants to resume paying a dividend to common shareholders. What must occur first?",
    "choices": {
      "A": "Nothing; cumulative preferred shareholders are only entitled to the current year's dividend before common shareholders may be paid",
      "B": "The company must first pay all missed and current preferred dividends — a total of $24 per share (two missed years plus the current year, at $8 each) — before any dividend can be paid to common shareholders",
      "C": "The missed dividends are forfeited entirely because the preferred stock is non-participating",
      "D": "Preferred shareholders must convert their shares into common stock before they can receive any back dividends"
    },
    "correct": "B",
    "explanation": "Cumulative preferred dividends that are skipped accumulate as arrearages that must be fully paid before any dividend can be distributed to common shareholders. Two missed years plus the current year at $8 per share totals $24 per share owed."
  },
  {
    "id": 43,
    "question": "An investor purchases a 20-year, 7% corporate bond at par. The bond is callable in 5 years at 103. If interest rates decline sharply and the issuer calls the bond at the first opportunity, which yield measure best reflects the investor's actual realized return, and how does it compare with the yield to maturity calculated at purchase?",
    "choices": {
      "A": "Yield to maturity; it will be identical to the yield to call in this scenario",
      "B": "Yield to call; because the bond was bought at par and redeemed early at a 103 call premium after only 5 years, the realized yield to call will likely exceed the original 7% yield to maturity",
      "C": "Current yield; because it reflects only coupon income and ignores the timing of principal repayment",
      "D": "Yield to worst, which by definition is always lower than a bond's yield to maturity when purchased at par"
    },
    "correct": "B",
    "explanation": "Because the bond was purchased at par (so YTM equaled the 7% coupon) and was called early at a 103 premium, the extra capital gain realized over a shorter holding period boosts the annualized realized return above the original YTM — this is captured by yield to call."
  },
  {
    "id": 44,
    "question": "A resident of State A purchases a municipal bond issued by a municipal authority located within State A, and the investor owes no alternative minimum tax. Which of the following best describes the taxation of the bond's interest income?",
    "choices": {
      "A": "Exempt from federal income tax only; state income tax still applies because it is a local bond",
      "B": "Exempt from federal income tax and, in most cases, also exempt from that investor's home-state income tax (double tax-exempt), because the bond was issued within the investor's state of residence",
      "C": "Fully taxable at both the federal and state level because municipal bond tax exemption was eliminated in 2018",
      "D": "Exempt from state tax only; federal income tax still applies at ordinary income rates"
    },
    "correct": "B",
    "explanation": "Interest on most municipal bonds is exempt from federal income tax, and most states also exempt interest on bonds issued by municipalities within that same state, producing a \"double tax-exempt\" result for in-state residents."
  },
  {
    "id": 45,
    "question": "An investor evaluating two callable municipal revenue bonds notices that one issue has a sinking fund provision requiring the issuer to retire a portion of the bonds annually, while the other issue has no sinking fund. From the investor's perspective, which statement about the sinking fund bond is most accurate?",
    "choices": {
      "A": "It carries higher risk because sinking fund provisions increase the total amount of debt outstanding over time",
      "B": "It generally carries somewhat lower credit risk and may trade at a slightly lower yield, since systematic retirement of debt reduces the amount outstanding at final maturity and signals orderly repayment",
      "C": "It cannot be called prior to final maturity under any circumstances",
      "D": "It eliminates reinvestment risk entirely because all bonds in the issue are retired on the exact same date"
    },
    "correct": "B",
    "explanation": "Sinking fund provisions require an issuer to periodically retire portions of an outstanding bond issue, which reduces the amount of debt outstanding at maturity and provides evidence of an orderly repayment plan, typically viewed favorably by credit markets."
  },
  {
    "id": 46,
    "question": "A municipality issues $50 million in bonds structured as a serial bond issue, with portions maturing each year from 2027 through 2046. Which statement best compares this structure with a term bond issue of the same total size?",
    "choices": {
      "A": "All $50 million matures on a single date, exactly like a term bond, so the two structures are functionally identical",
      "B": "Serial bonds spread principal repayment across many maturity dates, which can lower borrowing costs and reduce the issuer's refinancing (rollover) risk, whereas a term bond issue repays the full principal in one lump sum at a single maturity date",
      "C": "Serial bonds are legally required to pay a lower coupon than any term bond of comparable credit quality",
      "D": "Serial bonds must always be secured by the issuer's full taxing power, while term bonds must always be revenue bonds"
    },
    "correct": "B",
    "explanation": "A serial bond issue matures in installments over many years, spreading out the issuer's repayment obligation and reducing the risk of needing to refinance one large lump sum, unlike a term bond issue where the entire principal comes due at a single maturity date."
  },
  {
    "id": 47,
    "question": "An investor purchases Treasury STRIPS (Separate Trading of Registered Interest and Principal Securities) in a taxable brokerage account. Which of the following is a key characteristic the investor should understand about this product?",
    "choices": {
      "A": "STRIPS pay semiannual coupon interest just like conventional Treasury notes and bonds",
      "B": "STRIPS are purchased at a deep discount to face value, pay no periodic cash interest, and the annually accreted imputed interest is taxable as ordinary income even though no cash is received until maturity",
      "C": "STRIPS carry meaningful credit risk because separating the coupon from principal removes the U.S. government's backing",
      "D": "STRIPS have no interest rate risk because their cash flows were stripped from the original coupon payments"
    },
    "correct": "B",
    "explanation": "STRIPS are zero-coupon instruments created by separating a Treasury security's principal and interest components; they are sold at a discount and, despite paying no periodic cash interest, generate annual phantom taxable income under original issue discount rules."
  },
  {
    "id": 48,
    "question": "A coupon bond trades at a discount. The approximate YTM shortcut (coupon plus average annual accretion, over the average of par and price) is teaching that:",
    "choices": {
      "A": "YTM equals the coupon on every discount bond",
      "B": "YTM is above the coupon because the investor also earns the pull from discount up to par if held to maturity",
      "C": "YTM is below current yield on discount bonds",
      "D": "YTM ignores the difference between price and par"
    },
    "correct": "B",
    "explanation": "Discount → YTM > current yield > coupon. Understand the shortcut; do not grind $62 / $940 ≈ 6.60% as exam drill."
  },
  {
    "id": 49,
    "question": "An investor buys 100 shares of ABC stock at $60 per share and simultaneously sells one ABC call option with a $65 strike for a premium of $2.50 per share, writing a covered call. If the stock rises to $70 at expiration and the call is exercised, what is the investor's total profit per share?",
    "choices": {
      "A": "$10.00, the full amount the stock appreciated",
      "B": "$7.50, consisting of $5.00 in stock appreciation up to the strike plus the $2.50 premium collected",
      "C": "$2.50, only the premium collected, since the stock gain is forfeited entirely upon exercise",
      "D": "$12.50, the sum of the $10.00 stock gain plus the $2.50 premium with no cap on upside"
    },
    "correct": "B",
    "explanation": "A covered call caps the stock gain at the strike price. The investor keeps $5.00 of stock appreciation (from $60 to the $65 strike) plus the $2.50 premium collected, for a total profit of $7.50 per share, even though the market price rose to $70."
  },
  {
    "id": 50,
    "question": "An investor is long 100 shares of XYZ stock purchased at $80 per share. To protect against a decline while preserving upside potential, she buys one XYZ put option with a $75 strike for a premium of $3 per share. What is her maximum possible loss per share on the combined position, and what is her break-even price?",
    "choices": {
      "A": "Maximum loss is unlimited; break-even is $75",
      "B": "Maximum loss is $8 per share (the $5 stock decline to the strike plus the $3 premium paid); break-even is $83 per share",
      "C": "Maximum loss is $3 per share; break-even is $80 per share",
      "D": "Maximum loss is $5 per share; break-even is $75 per share"
    },
    "correct": "B",
    "explanation": "The protective put limits downside risk to the difference between the purchase price and strike ($80 − $75 = $5) plus the premium paid ($3), for a maximum loss of $8 per share. Break-even equals the original purchase price plus the premium paid: $80 + $3 = $83."
  },
  {
    "id": 51,
    "question": "An investor writes (sells) one uncovered (naked) call option on DEF stock with a $50 strike, collecting a premium of $4 per share. The investor does not currently own shares, and the stock later rises sharply to $80 at expiration. What is the investor's approximate loss per share if assigned and forced to buy shares in the market to deliver?",
    "choices": {
      "A": "$4 per share, limited to the premium originally received",
      "B": "$26 per share ($30 loss on having to buy at $80 and deliver at $50, minus the $4 premium collected)",
      "C": "Zero, because naked call writers can never be assigned when the market is rising",
      "D": "$50 per share, equal to the full strike price"
    },
    "correct": "B",
    "explanation": "A naked call writer has theoretically unlimited risk. If assigned, the writer must buy stock in the open market at $80 and deliver it for only $50, a $30 loss, offset by the $4 premium received, for a net loss of $26 per share."
  },
  {
    "id": 52,
    "question": "A portfolio manager holds a diversified bond portfolio and is concerned that rising interest rates over the next quarter will reduce the portfolio's value. Which options strategy would most directly hedge against this specific risk?",
    "choices": {
      "A": "Selling covered calls against the bond portfolio's holdings to generate additional income",
      "B": "Buying put options on an interest-rate-sensitive bond index or futures contract, which increase in value as bond prices fall when rates rise",
      "C": "Buying call options on the same bond index, which profit if bond prices rise",
      "D": "Writing cash-secured puts on the bond index to collect premium income"
    },
    "correct": "B",
    "explanation": "Since bond prices fall when interest rates rise, buying put options on a bond index or futures contract provides a hedge: the puts gain value as the hedged bond positions lose value, offsetting the portfolio's decline."
  },
  {
    "id": 53,
    "question": "An investor believes a stock will experience a large price move but is uncertain of the direction. She buys one at-the-money call and one at-the-money put on the same stock, with the same strike price and expiration date. This is best described as which strategy, and what is required for it to be profitable?",
    "choices": {
      "A": "A straddle; the stock must move far enough in either direction to exceed the combined premiums paid for both options",
      "B": "A spread; the stock must stay exactly at the strike price at expiration",
      "C": "A collar; profit is generated regardless of which direction the stock moves, even with minimal movement",
      "D": "A covered combination; profit requires the investor to already own the underlying shares"
    },
    "correct": "A",
    "explanation": "Buying a call and a put with the same strike and expiration is a long straddle. It profits from a large price move in either direction, once the move exceeds the total premium paid for both options; small price moves result in a loss of some or all of the premium."
  },
  {
    "id": 54,
    "question": "An open-end mutual fund calculates its NAV once per business day after market close, while a closed-end fund of similar composition trades continuously throughout the day on an exchange. Which statement correctly distinguishes the two structures?",
    "choices": {
      "A": "Both fund types issue a fixed number of shares at inception and never issue or redeem additional shares",
      "B": "The open-end fund continuously issues and redeems shares at NAV, while the closed-end fund has a fixed number of shares outstanding that trade at a market price which may differ from NAV (a premium or discount)",
      "C": "Closed-end funds must always redeem shares directly from the fund at NAV upon shareholder request",
      "D": "Open-end funds trade throughout the day on exchanges, while closed-end funds only price once daily"
    },
    "correct": "B",
    "explanation": "Open-end funds continuously create and redeem shares at NAV based on investor demand, keeping share price aligned with NAV. Closed-end funds issue a fixed number of shares in an IPO, and thereafter shares trade on an exchange at a market-determined price that can significantly deviate from underlying NAV."
  },
  {
    "id": 55,
    "question": "A unit investment trust (UIT) is created with a fixed portfolio of 25 municipal bonds and a stated termination date 20 years in the future. Which of the following best describes how a UIT differs from an actively managed open-end mutual fund?",
    "choices": {
      "A": "A UIT has a professional portfolio manager who actively trades securities to seek outperformance, just like a mutual fund",
      "B": "A UIT's portfolio is fixed at inception and is not actively managed or traded; the trust dissolves on its stated termination date, whereas an open-end fund is continuously and actively managed with no fixed termination",
      "C": "A UIT continuously issues new units that are redeemable at NAV and has no fixed portfolio",
      "D": "A UIT is legally structured as a corporation, while a mutual fund is legally structured as a trust"
    },
    "correct": "B",
    "explanation": "UITs purchase a fixed, unmanaged portfolio of securities at inception and hold it largely unchanged until the trust terminates on a predetermined date; this passive, fixed structure contrasts with an open-end mutual fund's ongoing active management and perpetual existence."
  },
  {
    "id": 56,
    "question": "An ETF's shares are trading on the exchange at a price notably below its underlying NAV. Which action by an authorized participant (AP) would help correct this discount?",
    "choices": {
      "A": "The AP buys ETF shares on the open market and redeems them in-kind with the ETF sponsor in exchange for the underlying basket of securities, reducing ETF share supply and pushing the market price back up toward NAV",
      "B": "The AP creates new ETF shares by delivering the underlying securities basket to the sponsor, increasing ETF share supply",
      "C": "The AP asks the ETF sponsor to increase the expense ratio to discourage further selling",
      "D": "The AP shorts the underlying securities and buys additional ETF shares to widen the discount further"
    },
    "correct": "A",
    "explanation": "When an ETF trades at a discount to NAV, an AP can buy the undervalued ETF shares on the market and redeem them in-kind for the more valuable underlying securities basket, profiting from the spread while reducing ETF share supply, which pushes the market price back toward NAV."
  },
  {
    "id": 57,
    "question": "An investor in a taxable account compares a traditional actively managed equity mutual fund to a similarly invested equity ETF tracking the same index. Both have comparable expense ratios. Which factor most explains why the ETF is likely to generate fewer taxable capital gains distributions to the investor over time?",
    "choices": {
      "A": "ETFs are legally prohibited from ever distributing capital gains to shareholders",
      "B": "The ETF's in-kind creation and redemption mechanism allows the fund to remove low-basis securities from the portfolio without triggering a taxable sale inside the fund, unlike the mutual fund which must sell securities to meet cash redemptions",
      "C": "Mutual funds are required by law to distribute 100% of realized gains annually, while ETFs have no such requirement",
      "D": "ETFs hold no appreciated securities because they only track passive indexes"
    },
    "correct": "B",
    "explanation": "ETFs use in-kind redemptions with authorized participants, allowing the fund to hand off appreciated securities without an internal taxable sale. Mutual funds meeting cash redemptions may need to sell appreciated securities, realizing gains that must be distributed to all remaining shareholders, including those who didn't redeem."
  },
  {
    "id": 58,
    "question": "An investor purchases $30,000 of Class A shares in a mutual fund family that offers a breakpoint schedule with a reduced sales charge starting at $50,000. The fund also permits a Letter of Intent (LOI). If the investor signs an LOI committing to invest an additional $25,000 within 13 months, what is the primary benefit?",
    "choices": {
      "A": "The LOI eliminates all future sales charges permanently on any purchases in the fund family",
      "B": "The LOI allows the investor to receive the reduced sales charge applicable to the $50,000 breakpoint immediately on the initial $30,000 purchase, in anticipation of reaching that total within the stated time frame",
      "C": "The LOI requires the fund company to refund all sales charges already paid on prior unrelated purchases",
      "D": "The LOI guarantees the fund's future performance will match the breakpoint discount percentage"
    },
    "correct": "B",
    "explanation": "A Letter of Intent lets an investor commit in writing to invest a specified total amount (usually within 13 months) and receive the reduced sales charge for that total breakpoint immediately, rather than waiting until the full amount is actually invested."
  },
  {
    "id": 59,
    "question": "A mutual fund investor is deciding between Class A, B, and C shares of the same fund for a $200,000 investment intended to be held for at least 15 years. The fund offers breakpoints starting at $100,000. Which choice is generally most cost-effective for this investor?",
    "choices": {
      "A": "Class C shares, because they have no front-end load at all regardless of investment size",
      "B": "Class A shares, because the $200,000 investment qualifies for a substantial breakpoint discount on the front-end load, and the lower ongoing 12b-1 fees will minimize costs over a long holding period",
      "C": "Class B shares, because the contingent deferred sales charge is always cheaper than a front-end load for large investments",
      "D": "It makes no difference because all share classes charge identical total fees regardless of investment size or holding period"
    },
    "correct": "B",
    "explanation": "For a large investment held long-term, Class A shares are usually most cost-effective because a large purchase can qualify for breakpoint discounts that substantially reduce the front-end load, and Class A's lower ongoing 12b-1 fees compound favorably over a long holding period compared with B or C shares."
  },
  {
    "id": 60,
    "question": "A mutual fund shareholder has a Rights of Accumulation (ROA) privilege with a fund family. She currently holds $42,000 in Fund X and wants to invest an additional $10,000 in Fund X. The fund family's breakpoint schedule offers a reduced sales charge starting at $50,000. Which statement about the ROA privilege is correct?",
    "choices": {
      "A": "ROA only applies to purchases made on the exact same day, so this purchase would not qualify for any discount",
      "B": "Her existing $42,000 holding can be combined with the new $10,000 purchase under ROA, bringing the total to $52,000, which qualifies the new purchase for the reduced sales charge at the $50,000 breakpoint",
      "C": "ROA privileges apply only to retirement accounts and cannot be used in a taxable brokerage account",
      "D": "She must first redeem her existing shares before the ROA privilege can be applied to a new purchase"
    },
    "correct": "B",
    "explanation": "Rights of Accumulation allow an investor to aggregate the current value of existing fund family holdings with a new purchase to determine eligibility for sales charge breakpoints. Her combined total of $52,000 qualifies the new $10,000 purchase for the reduced sales charge."
  },
  {
    "id": 61,
    "question": "A fund's annual expense ratio (excluding sales loads) is:",
    "choices": {
      "A": "The 12b-1 fee only",
      "B": "The front-end sales charge plus the CDSC",
      "C": "The sum of ongoing costs such as the 12b-1 fee, management fee, and other operating expenses—not a one-time load",
      "D": "Management fee minus 12b-1"
    },
    "correct": "C",
    "explanation": "Expense ratio = ongoing annual costs. Loads are separate. No need to add 0.75 + 0.50 + 0.10 = 1.35 as exam drill."
  },
  {
    "id": 62,
    "question": "An investor redeems Class B shares of a mutual fund after holding them for exactly 4 years. The fund's contingent deferred sales charge (CDSC) schedule declines from 5% in year one to 1% in year five, reaching zero after year six. What sales charge, if any, will the investor most likely pay upon this redemption?",
    "choices": {
      "A": "No sales charge, because Class B shares never impose a CDSC after the first year",
      "B": "A CDSC based on the applicable declining percentage for year four of the holding period, typically around 2%, applied to the original investment or redemption value depending on the fund's specific schedule",
      "C": "The full 5% first-year CDSC regardless of how long the shares were held",
      "D": "A front-end sales charge is also assessed in addition to the CDSC upon redemption"
    },
    "correct": "B",
    "explanation": "Class B shares impose a contingent deferred sales charge that declines each year the shares are held, typically disappearing entirely after five to eight years. Redeeming in year four would trigger the applicable declining-scale percentage for that year, not the full initial rate nor zero."
  },
  {
    "id": 63,
    "question": "A money market mutual fund is described in its prospectus as seeking to maintain a stable $1.00 net asset value per share. Which of the following statements about this type of fund is most accurate?",
    "choices": {
      "A": "Money market funds are insured by the FDIC in the same manner as bank deposit accounts",
      "B": "Money market funds invest in high-quality, short-term debt instruments and, while most seek a stable $1.00 NAV, they are not federally insured and it is possible, though rare, for a fund to break the buck if it cannot maintain that value",
      "C": "Money market funds are guaranteed by the U.S. Treasury never to lose principal value",
      "D": "Money market funds typically hold long-term corporate bonds to generate higher current income than short-term instruments"
    },
    "correct": "B",
    "explanation": "Money market funds invest in high-quality, short-term instruments such as T-bills, commercial paper, and repos, and most retail funds aim to maintain a stable $1.00 NAV, but this is not guaranteed or federally insured; in rare stress events a fund's NAV can fall below $1.00 (breaking the buck)."
  },
  {
    "id": 64,
    "question": "A 60-year-old investor purchases a variable annuity and allocates the entire premium to equity subaccounts. During the accumulation phase, which statement correctly describes the risk borne by the annuity owner as compared to a fixed annuity?",
    "choices": {
      "A": "The insurance company bears all investment risk, and the owner is guaranteed a minimum stated return regardless of subaccount performance",
      "B": "The owner bears the investment risk of the subaccounts, since the annuity's cash value and eventual payout fluctuate with the performance of the underlying separate account investments, unlike a fixed annuity where the insurer bears the investment risk and guarantees the rate",
      "C": "Variable annuities guarantee the same minimum crediting rate as fixed annuities, eliminating market risk for the owner",
      "D": "There is no meaningful difference in risk allocation between fixed and variable annuities during the accumulation phase"
    },
    "correct": "B",
    "explanation": "In a variable annuity, premiums are invested in separate account subaccounts chosen by the owner, and the account value rises and falls with the performance of those investments, meaning the owner bears the investment risk. In a fixed annuity, the insurer bears the investment risk and guarantees a minimum rate."
  },
  {
    "id": 65,
    "question": "A retiree annuitizes a nonqualified variable annuity and elects a straight life payout option. Compared to a joint-and-survivor payout option with the same account value, which statement is correct?",
    "choices": {
      "A": "The straight life option will produce a lower periodic payment because it must also provide income to a second beneficiary",
      "B": "The straight life option will produce the highest periodic payment of the two, because payments are based on a single life expectancy and cease entirely at the annuitant's death with no further payout to a survivor",
      "C": "Both options must legally provide identical monthly payments regardless of the number of lives covered",
      "D": "The joint-and-survivor option always pays more because it covers two people instead of one"
    },
    "correct": "B",
    "explanation": "A straight life (single life) annuity payout is calculated using only the annuitant's life expectancy, ceasing at death with no continuing payments, which allows for the highest periodic payment among common payout options. A joint-and-survivor option must fund payments over two lives, resulting in a lower periodic payment for the same account value."
  },
  {
    "id": 66,
    "question": "A client purchases a nonqualified fixed annuity with $100,000 and it grows to $140,000 before she begins taking withdrawals under the last-in, first-out (LIFO) tax treatment applicable to nonqualified annuities. What is the tax treatment of her first withdrawal?",
    "choices": {
      "A": "The withdrawal is entirely a tax-free return of principal because withdrawals are treated as return of basis first",
      "B": "The withdrawal is taxed as ordinary income to the extent it represents earnings (the $40,000 of growth), since nonqualified annuity withdrawals are taxed LIFO, with earnings coming out first and taxed as ordinary income, potentially with a 10% penalty if taken before age 59 1/2",
      "C": "The withdrawal is taxed entirely as a long-term capital gain regardless of the amount withdrawn",
      "D": "The withdrawal is tax-free because annuity earnings are never taxed if held for more than five years"
    },
    "correct": "B",
    "explanation": "Nonqualified annuity withdrawals follow LIFO tax treatment: earnings (the growth above basis) are considered withdrawn first and are taxed as ordinary income, not capital gains. Withdrawals before age 59 1/2 may also incur a 10% early withdrawal penalty on the taxable portion."
  },
  {
    "id": 67,
    "question": "A client purchases an equity-indexed annuity with a 70% participation rate and a 6% annual cap, tied to a broad stock index. If the referenced index rises 12% in one contract year, how much index-linked growth will the client's contract value receive?",
    "choices": {
      "A": "12%, the full amount of the index gain",
      "B": "8.4% (70% of 12%), but this result is subject to the 6% annual cap, so the client actually receives 6% for that year",
      "C": "6%, calculated as the participation rate applied to the cap",
      "D": "0%, because equity-indexed annuities never credit gains in years the cap is exceeded"
    },
    "correct": "B",
    "explanation": "Applying the 70% participation rate to the 12% index gain would produce 8.4%, but because the contract has a 6% annual cap, the credited return is limited to the lower cap amount of 6% for that contract year."
  },
  {
    "id": 68,
    "question": "A REIT distributes 95% of its taxable income to shareholders each year to maintain its favorable tax status. Which statement about REIT distributions to individual shareholders is most accurate?",
    "choices": {
      "A": "REIT distributions are always taxed as long-term capital gains regardless of the underlying source of the income",
      "B": "A portion of REIT distributions is typically taxed as ordinary income (not eligible for the qualified dividend rate), since the REIT itself generally avoids corporate-level tax by distributing most of its income, and distributions may also include return-of-capital and capital-gain components",
      "C": "REIT distributions are entirely tax-exempt to shareholders because REITs do not pay corporate income tax on distributed income",
      "D": "REIT distributions are only taxable if the shareholder sells the shares within the same calendar year"
    },
    "correct": "B",
    "explanation": "Because a REIT generally does not pay corporate tax on income it distributes, most REIT dividends do not qualify for the lower qualified-dividend tax rate and are instead taxed to shareholders as ordinary income; distributions can also include nontaxable return-of-capital and capital-gain components, each taxed differently."
  },
  {
    "id": 69,
    "question": "An investor is comparing a publicly traded (exchange-listed) equity REIT to a nontraded REIT with similar underlying real estate holdings. Which of the following is the most significant practical difference for a client who may need to access funds within two years?",
    "choices": {
      "A": "Nontraded REITs offer superior daily liquidity compared with exchange-listed REITs",
      "B": "The exchange-listed REIT can generally be sold quickly at a transparent, market-determined price, while the nontraded REIT is illiquid, often has limited or no redemption windows, and may be difficult to sell before a liquidity event",
      "C": "Both REIT types provide identical liquidity because all REITs are legally required to redeem shares at NAV upon request",
      "D": "Nontraded REITs are always safer investments because they are not subject to daily price volatility"
    },
    "correct": "B",
    "explanation": "Exchange-listed REITs trade continuously on a stock exchange with readily available market pricing, offering good liquidity. Nontraded REITs are not listed, typically have long holding periods, limited redemption programs, and significant illiquidity, making them unsuitable for a client with a near-term liquidity need."
  },
  {
    "id": 70,
    "question": "A limited partner invests $50,000 in a real estate direct participation program (DPP) structured as a limited partnership. The DPP subsequently loses money and creditors sue the partnership. What is the maximum amount the limited partner can lose as a result of the partnership's liabilities?",
    "choices": {
      "A": "Unlimited, because all partners in a partnership bear unlimited personal liability for partnership debts",
      "B": "The limited partner's loss is generally limited to the amount invested (the capital contribution), because limited partners, unlike the general partner, have limited liability and are not personally liable for partnership debts beyond their investment",
      "C": "Zero, because limited partnerships fully indemnify all partners against any losses by law",
      "D": "The limited partner is liable only for the general partner's personal debts, not the partnership's business debts"
    },
    "correct": "B",
    "explanation": "A key feature of the limited partnership structure is that limited partners enjoy limited liability, meaning their financial exposure is generally capped at their capital contribution, whereas the general partner bears unlimited personal liability for the partnership's obligations."
  },
  {
    "id": 71,
    "question": "An investor wants indirect exposure to a foreign company's shares without dealing with foreign currency conversion, foreign settlement procedures, or a foreign brokerage account. Which instrument best meets this need, and who issues it?",
    "choices": {
      "A": "A Global Depositary Receipt issued directly by the foreign company itself",
      "B": "An American Depositary Receipt (ADR), issued by a U.S. depositary bank, representing shares of the foreign company held in custody abroad, and traded and settled in U.S. dollars on U.S. exchanges",
      "C": "A foreign currency futures contract, which eliminates the need to hold any equity position",
      "D": "A direct purchase of shares on the foreign exchange settled in the foreign currency"
    },
    "correct": "B",
    "explanation": "ADRs are issued by U.S. depositary banks and represent an ownership interest in shares of a foreign company held in custody overseas. ADRs trade in U.S. dollars on U.S. exchanges and pay dividends in U.S. dollars, allowing U.S. investors to gain foreign equity exposure without direct foreign currency transactions or foreign settlement."
  },
  {
    "id": 72,
    "question": "A U.S. investor holding an ADR representing shares of a foreign company receives a dividend declared in the foreign company's local currency. Which of the following risks does the ADR holder retain despite the convenience of the ADR structure?",
    "choices": {
      "A": "None; ADRs completely eliminate all currency risk for the investor because dividends are automatically converted to U.S. dollars",
      "B": "Currency (exchange rate) risk remains, because the dividend is declared in the foreign currency and then converted to U.S. dollars by the depositary bank, so a weakening foreign currency reduces the U.S. dollar value of the dividend received",
      "C": "The investor bears no risk from currency fluctuations because ADR dividends are always fixed in U.S. dollar terms at issuance",
      "D": "ADR holders receive dividends only in the foreign currency and must personally arrange conversion"
    },
    "correct": "B",
    "explanation": "Although ADRs simplify custody and trading, the underlying dividend is declared in the foreign currency and converted to U.S. dollars by the depositary bank before distribution; this means ADR holders remain exposed to currency risk, as a depreciating foreign currency reduces the dollar value of dividends received."
  },
  {
    "id": 73,
    "question": "An investor purchases participating preferred stock of XYZ Corp with a stated 6% dividend rate and a $100 par value. In a year when the corporation performs exceptionally well and pays a larger-than-normal dividend to common shareholders, which statement about the participating preferred shares is correct?",
    "choices": {
      "A": "Participating preferred shareholders are contractually limited to the stated 6% dividend and can never receive more, regardless of common stock performance",
      "B": "In addition to the guaranteed stated 6% dividend, participating preferred shareholders may be entitled to receive an additional dividend based on a formula tied to common shareholder distributions, as specified in the preferred stock's provisions",
      "C": "Participating preferred stock automatically converts to common stock whenever common dividends exceed the preferred dividend rate",
      "D": "Participating preferred shareholders lose their preferred dividend entirely in any year that common shareholders receive an above-average dividend"
    },
    "correct": "B",
    "explanation": "Participating preferred stock entitles the holder to the stated fixed dividend plus the potential to participate in additional distributions when the company performs particularly well, based on formulas set out in the stock's provisions, unlike straight (non-participating) preferred stock, which is limited strictly to its stated rate."
  },
  {
    "id": 74,
    "question": "An investor purchases a callable preferred stock with a 7% dividend rate, callable at $105 (par $100), five years from now. Market interest rates have since fallen significantly. Which statement best describes the likely effect on the preferred stock's price and the issuer's incentive?",
    "choices": {
      "A": "The issuer has no incentive to call the shares because falling rates never affect preferred stock pricing",
      "B": "The preferred stock's price will likely rise toward the call price, and the issuer has an increased incentive to call and refinance the shares with lower-cost preferred or debt, capping further price appreciation for the investor near the call price",
      "C": "The preferred stock's price will fall because callable securities always decline when interest rates fall",
      "D": "The call feature guarantees the investor will receive a price above $105 regardless of market conditions"
    },
    "correct": "B",
    "explanation": "Like callable bonds, callable preferred stock is subject to having its price appreciation capped as it approaches the call price when rates decline, because the issuer becomes more likely to call and refinance at a lower dividend rate, limiting the investor's upside from falling rates."
  },
  {
    "id": 75,
    "question": "An investor purchases a real estate limited partnership (a direct participation program) that generates passive losses due to depreciation deductions in its early years. The investor has no other passive income. Under federal tax rules, how are these passive losses generally treated?",
    "choices": {
      "A": "The losses may be fully deducted immediately against the investor's ordinary wage income in the current year",
      "B": "The passive losses are generally limited and can typically only offset passive income; unused passive losses are suspended and carried forward to offset future passive income or to be used when the investment is fully disposed of",
      "C": "Passive losses from DPPs can always be used to offset short-term capital gains from stock trading with no restriction",
      "D": "Passive losses automatically convert to tax credits that reduce the investor's tax liability dollar for dollar"
    },
    "correct": "B",
    "explanation": "Under passive activity loss rules, losses from passive investments like most limited partnership DPPs generally can only offset passive income; if there is insufficient passive income, the losses are suspended and carried forward until there is passive income to absorb them or until the investment is disposed of in a taxable transaction."
  },
  {
    "id": 76,
    "question": "A sophisticated investor wants to invest in a hedge fund that uses significant leverage and short selling, targeting absolute returns uncorrelated with the broader market. Which of the following is a key structural characteristic the investor should understand before investing?",
    "choices": {
      "A": "Hedge funds are required to register as investment companies under the Investment Company Act of 1940, just like mutual funds",
      "B": "Hedge funds are typically structured as private placements exempt from Investment Company Act registration, generally available only to accredited investors or qualified purchasers, and often feature high fees (e.g., a management fee plus a performance/incentive fee), limited liquidity, and lock-up periods",
      "C": "Hedge funds must provide daily liquidity and NAV pricing identical to open-end mutual funds",
      "D": "Hedge funds are prohibited from charging any performance-based incentive fees under federal securities law"
    },
    "correct": "B",
    "explanation": "Hedge funds typically rely on private placement exemptions (avoiding registration as investment companies), restrict investment to accredited investors or qualified purchasers, and commonly charge a management fee plus an incentive fee (e.g., \"2 and 20\"), while imposing lock-up periods and limited redemption windows that reduce liquidity compared with mutual funds."
  },
  {
    "id": 77,
    "question": "A financial planner is comparing a fixed annuity to a certificate of deposit (CD) for a risk-averse retiree seeking guaranteed principal protection and steady income. Which of the following is a key distinction between the two, aside from FDIC insurance coverage on the CD?",
    "choices": {
      "A": "Fixed annuities and CDs are functionally identical in every respect, including tax treatment of interest earned",
      "B": "Fixed annuity earnings grow tax-deferred until withdrawal, whereas CD interest is generally taxable annually as it is earned (or credited), even if not withdrawn",
      "C": "CD interest grows tax-deferred, whereas fixed annuity earnings are taxed annually regardless of withdrawal",
      "D": "Fixed annuities are insured by the FDIC in the same manner as bank CDs"
    },
    "correct": "B",
    "explanation": "A fixed annuity's earnings grow on a tax-deferred basis, with taxation deferred until withdrawal, while a bank CD's interest is generally taxable in the year it is earned or credited, regardless of whether the depositor withdraws it. Annuities are backed by the issuing insurer, not FDIC-insured like CDs."
  },
  {
    "id": 78,
    "question": "A portfolio manager sells 10 put option contracts on a broad market index as part of a cash-secured put writing strategy, setting aside sufficient cash to purchase the underlying at the strike price if assigned. Which statement about this strategy's risk/return profile is correct?",
    "choices": {
      "A": "The strategy has unlimited profit potential and unlimited risk, similar to a naked short call",
      "B": "The strategy's maximum profit is limited to the premium received, while its maximum loss occurs if the index falls to zero (loss equal to the strike price minus the premium received, per share), making it economically similar to a covered call from a risk perspective",
      "C": "The strategy guarantees a profit regardless of market direction because cash is held in reserve",
      "D": "The strategy has no risk at all because the position is fully cash-secured"
    },
    "correct": "B",
    "explanation": "A cash-secured put writer's maximum gain is capped at the premium received, while the maximum loss (if the underlying falls to zero) equals the strike price minus the premium received per share. This risk/reward profile mirrors that of a covered call, though the mechanics differ."
  },
  {
    "id": 79,
    "question": "A young investor with a long time horizon is deciding between a target-date fund glide path fund of funds and a static 60/40 balanced fund for a retirement account. Which statement best describes a target-date fund?",
    "choices": {
      "A": "A target-date fund maintains a fixed, unchanging asset allocation throughout the investor's lifetime, just like a static balanced fund",
      "B": "A target-date fund is a fund of funds that automatically shifts its asset allocation to become progressively more conservative (reducing equity exposure and increasing fixed income) as the fund approaches its stated target retirement year",
      "C": "A target-date fund invests exclusively in individual target-date bonds maturing on the fund's stated date",
      "D": "A target-date fund guarantees a specific retirement income amount regardless of market performance"
    },
    "correct": "B",
    "explanation": "Target-date funds follow a predetermined \"glide path,\" automatically reducing equity allocation and increasing fixed-income allocation as the fund approaches and passes its stated target date, unlike a static balanced fund whose allocation does not shift with the passage of time."
  },
  {
    "id": 80,
    "question": "A T-bill bought at a discount has an investment yield that:",
    "choices": {
      "A": "Always equals the coupon on a T-note of the same maturity",
      "B": "Uses the discount relative to the purchase price (not par) in the denominator, so it exceeds the discount-from-face quote",
      "C": "Is computed only as discount divided by face, which overstates the investor's return",
      "D": "Ignores the purchase price entirely"
    },
    "correct": "B",
    "explanation": "Know price vs face in the denominator. You do not need $20 / $980 ≈ 2.04% as a Series 65 skill."
  },
  {
    "id": 81,
    "question": "A conservative money market fund's portfolio manager is selecting among several short-term instruments for the fund's holdings: bank-issued negotiable certificates of deposit, commercial paper of a highly rated corporation, and repurchase agreements collateralized by U.S. Treasuries. Which of the following is a defining characteristic these instruments share that makes them suitable for a money market fund?",
    "choices": {
      "A": "They are all long-term instruments with maturities exceeding ten years, providing stable long-duration income",
      "B": "They are all short-term, high-quality debt instruments with maturities typically under 397 days that provide liquidity and capital preservation with modest current income",
      "C": "They are all equity instruments that provide dividend income and capital appreciation potential",
      "D": "They are all instruments that carry no credit risk whatsoever and are backed directly by the U.S. Treasury"
    },
    "correct": "B",
    "explanation": "Money market funds invest in short-term, high-quality debt instruments (commercial paper, negotiable CDs, repos, T-bills) generally maturing within 397 days or less, consistent with the fund's objectives of capital preservation, liquidity, and modest income, as required under SEC Rule 2a-7."
  },
  {
    "id": 82,
    "question": "A retail investor wants exposure to short-term bank obligations and considers both a negotiable (jumbo) certificate of deposit and a savings account. What is a key distinguishing feature of a negotiable CD compared with a standard savings account?",
    "choices": {
      "A": "Negotiable CDs can be actively traded in a secondary market before maturity, whereas funds in a standard savings account are simply withdrawn, not sold to another party",
      "B": "Negotiable CDs are never FDIC-insured, while savings accounts always carry unlimited FDIC coverage",
      "C": "Negotiable CDs pay variable interest rates that reset daily, while savings account rates are always fixed for the account's life",
      "D": "There is no meaningful difference between the two instruments"
    },
    "correct": "A",
    "explanation": "Negotiable (jumbo) CDs are large-denomination CDs, typically issued in amounts of $100,000 or more, that can be bought and sold in an active secondary market prior to maturity. Savings account balances are simply held and withdrawn rather than traded to third parties."
  },
  {
    "id": 83,
    "question": "A retail client purchases $18,000 of Class A shares in Fund X and simultaneously (through the same fund family) has an immediate family member's account holding $35,000 in the identical fund. The fund family's breakpoint schedule considers combined family holdings for breakpoint purposes. Under the sales-charge breakpoint rules, what should the selling representative do?",
    "choices": {
      "A": "Ignore the family member's holdings entirely, since breakpoints only apply to purchases made by the exact same named account holder",
      "B": "Aggregate the client's new $18,000 purchase with the qualifying family member's existing $35,000 holding (totaling $53,000) to determine whether a breakpoint discount applies, since many funds permit combining holdings of immediate family members for breakpoint purposes",
      "C": "Automatically deny any breakpoint discount because only retirement account holdings can be aggregated",
      "D": "Charge the maximum sales load regardless of combined holdings to avoid any compliance risk"
    },
    "correct": "B",
    "explanation": "Many mutual fund breakpoint schedules permit aggregating holdings of immediate family members within the same household for purposes of determining breakpoint eligibility. Failing to inform the client of available breakpoints, when eligible, is considered a sales practice violation."
  },
  {
    "id": 84,
    "question": "An issuer sells a floating-rate note that resets its coupon quarterly based on a short-term reference rate plus a fixed spread. Compared with a fixed-rate bond of the same maturity and credit quality, which statement about the floating-rate note's price sensitivity to changes in market interest rates is correct?",
    "choices": {
      "A": "The floating-rate note will experience significantly larger price swings than the fixed-rate bond when rates change",
      "B": "The floating-rate note's price will remain relatively stable when market rates change because its coupon periodically resets to reflect current rates, giving it a much lower effective duration than a comparable fixed-rate bond",
      "C": "Floating-rate notes have exactly the same duration as fixed-rate bonds of the same maturity",
      "D": "Floating-rate notes are entirely immune to credit risk because their coupon adjusts with market rates"
    },
    "correct": "B",
    "explanation": "Because a floating-rate note's coupon resets periodically to reflect prevailing short-term rates, its price remains relatively stable when general interest rates move, giving it a much lower effective duration (and thus lower interest-rate risk) than a fixed-rate bond of comparable maturity, though it still carries credit risk."
  },
  {
    "id": 85,
    "question": "An investor holds a bond that is putable at par at the investor's option after five years. If interest rates rise significantly after purchase, which statement best describes the value and benefit of this put feature to the bondholder?",
    "choices": {
      "A": "The put feature is worthless when rates rise because put bonds can only be exercised when rates fall",
      "B": "The put feature becomes valuable when rates rise, because it allows the bondholder to sell the bond back to the issuer at par, avoiding the market price decline that would otherwise occur on a comparable non-putable bond",
      "C": "The put feature obligates the issuer to raise the coupon rate instead of allowing redemption at par",
      "D": "The put feature has no effect on the bond's price behavior compared with an otherwise identical non-putable bond"
    },
    "correct": "B",
    "explanation": "A put bond gives the holder the right to sell the bond back to the issuer at a predetermined price (often par) on specified dates. When interest rates rise and the bond's market price would otherwise fall, this put feature protects the investor by allowing redemption at par, limiting downside price risk."
  },
  {
    "id": 86,
    "question": "A financial adviser recommends a leveraged inverse ETF designed to deliver -2x the daily return of an equity index to a buy-and-hold client with a five-year time horizon who wants to hedge a long-term equity position. Which of the following is the primary concern with this recommendation?",
    "choices": {
      "A": "Leveraged and inverse ETFs are designed to accurately track -2x the index's cumulative return over any holding period, including multi-year periods, making them ideal for this client",
      "B": "Leveraged and inverse ETFs reset their leverage daily, so compounding effects over longer holding periods can cause significant tracking error and divergence from -2x the index's longer-term cumulative return, making them generally unsuitable for a multi-year buy-and-hold hedge",
      "C": "Leveraged inverse ETFs are risk-free hedging instruments appropriate for any time horizon",
      "D": "There is no material difference between a leveraged inverse ETF and a simple short sale of the index held over five years"
    },
    "correct": "B",
    "explanation": "Leveraged and inverse ETFs are designed to achieve their stated multiple of the underlying index's return on a daily basis, and due to daily rebalancing and compounding, their returns over longer periods (especially in volatile markets) often diverge substantially from the simple multiple of the index's longer-term return, making them unsuitable for extended holding periods."
  },
  {
    "id": 87,
    "question": "An investor holding a diversified stock portfolio wants protection against a broad market decline over the next quarter without selling any individual positions. Which strategy would most efficiently accomplish this using options?",
    "choices": {
      "A": "Buying calls on individual stocks within the portfolio to generate additional income",
      "B": "Buying put options on a broad market index (such as one tracking the S&P 500) to hedge the portfolio's overall market exposure, since it is typically more efficient than buying puts on each individual holding",
      "C": "Selling naked calls on a broad market index to generate downside protection",
      "D": "Purchasing additional shares of the same stocks already held to average down the cost basis"
    },
    "correct": "B",
    "explanation": "Buying index put options provides a cost-effective way to hedge broad market risk across a diversified portfolio in a single transaction, rather than purchasing puts on each individual stock position, which would be more costly and administratively burdensome."
  },
  {
    "id": 88,
    "question": "A 45-year-old investor holds a $500,000 diversified portfolio, most of which is invested in a taxable brokerage account. Comparing an actively managed bond mutual fund to a laddered portfolio of individual municipal bonds held to maturity, which of the following is a key structural difference the adviser should explain?",
    "choices": {
      "A": "Both options guarantee the same fixed maturity date and eliminate all interest rate risk",
      "B": "Individual bonds held to maturity have a known maturity date and return of principal (absent default), while a bond fund has no maturity date, and its NAV will fluctuate indefinitely with interest rate changes since the fund continuously buys and sells bonds to maintain its target duration",
      "C": "Bond mutual funds always guarantee return of principal at a specific date, just like holding individual bonds to maturity",
      "D": "There is no meaningful difference between the two approaches from an interest-rate-risk perspective"
    },
    "correct": "B",
    "explanation": "An individual bond held to maturity has a defined maturity date at which principal is returned (barring default), giving the investor certainty about eventual cash flow. A bond fund is a continuously managed, open-ended pool with no maturity date; its NAV fluctuates indefinitely with interest rates as the manager buys and sells bonds to maintain the fund's target duration and objectives."
  },
  {
    "id": 89,
    "question": "Two portfolios: Alpha has a lower expected return and much lower volatility; Beta has a higher expected return and much higher volatility. Ranking by Sharpe ratio, the best statement is:",
    "choices": {
      "A": "Alpha can outrank Beta if its excess return per unit of standard deviation is better—raw return does not automatically win",
      "B": "Beta always has the higher Sharpe because its raw return is higher",
      "C": "Both are equal because Sharpe considers only systematic risk",
      "D": "Beta wins because a higher standard deviation always increases Sharpe"
    },
    "correct": "A",
    "explanation": "Sharpe = (Rp − Rf) / SD. More volatility hurts the ratio. Skip computing 1.00 vs 0.875."
  },
  {
    "id": 90,
    "question": "Fund M has a higher raw return and higher beta; Fund N has a lower raw return and a substantially lower beta. Using the Treynor ratio (excess return / beta), which conclusion is most defensible?",
    "choices": {
      "A": "M always wins Treynor because raw return is higher",
      "B": "N can still have the better Treynor if it delivers more excess return per unit of systematic risk",
      "C": "Higher beta always produces a higher Treynor ratio",
      "D": "The funds are identical if raw returns differ by only a couple of points"
    },
    "correct": "B",
    "explanation": "Treynor uses beta, not SD. Lower beta can win on a risk-adjusted basis. You do not need 12.0 vs 10.0."
  },
  {
    "id": 91,
    "question": "A managed portfolio's actual return exceeds the return CAPM required given its beta, the risk-free rate, and the market return. Jensen's alpha is:",
    "choices": {
      "A": "Negative: the manager underperformed on a risk-adjusted basis",
      "B": "Positive: the manager outperformed the return predicted by CAPM for the systematic risk taken",
      "C": "Zero: the portfolio performed exactly as CAPM predicted",
      "D": "Undefined without the portfolio's standard deviation"
    },
    "correct": "B",
    "explanation": "Alpha = actual − CAPM required. SD is not an input. The sign and meaning matter more than a +1.6% worksheet."
  },
  {
    "id": 92,
    "question": "A fund with beta below 1.0 posts an actual return below the return CAPM required for that beta. The fund's alpha reveals:",
    "choices": {
      "A": "Positive alpha, because any beta below 1 automatically beats CAPM",
      "B": "Negative alpha: it underperformed its CAPM-predicted return even though beta was below 1",
      "C": "Alpha equal to the fund return minus the market return, ignoring beta",
      "D": "That alpha is undefined for funds with beta below 1.0"
    },
    "correct": "B",
    "explanation": "Low beta does not guarantee positive alpha. Compare actual to CAPM required. Skip the −0.9% arithmetic."
  },
  {
    "id": 93,
    "question": "An investor combines two assets: 60% in Asset X (standard deviation 25%) and 40% in Asset Y (standard deviation 15%), with a correlation coefficient of 0.3 between them. What is the approximate standard deviation of the combined two-asset portfolio?",
    "choices": {
      "A": "21.0% (the simple weighted average of the two standard deviations)",
      "B": "16.2% (as if the correlation were zero)",
      "C": "17.75%, reflecting the diversification benefit from a correlation below 1.0",
      "D": "25.0%, equal to the higher of the two individual standard deviations"
    },
    "correct": "C",
    "explanation": "Portfolio variance = (0.6²×25²) + (0.4²×15²) + (2×0.6×0.4×25×15×0.3) = 225 + 36 + 54 = 315. The square root of 315 ≈ 17.75%, which is lower than the naive weighted average of 21% because the correlation is below 1.0."
  },
  {
    "id": 94,
    "question": "In the constant-growth (Gordon) DDM, if the company just paid D0, intrinsic value is:",
    "choices": {
      "A": "D0 / required return, ignoring growth",
      "B": "D0 / (k − g), using the dividend just paid rather than next year's",
      "C": "Next year's expected dividend D1 = D0 × (1+g), then D1 / (k − g), provided k > g",
      "D": "k / g, with no dividend in the formula"
    },
    "correct": "C",
    "explanation": "Grow D0 to D1 first. Multi-step dollar values ($43.33) are not the Series 65 emphasis."
  },
  {
    "id": 95,
    "question": "When next year's dividend D1 is already given, the constant-growth DDM value of a stock is:",
    "choices": {
      "A": "D1 × (required return − growth)",
      "B": "D1 / required return, ignoring growth in the denominator",
      "C": "Required return / growth",
      "D": "D1 / (required return − growth), with required return greater than growth"
    },
    "correct": "D",
    "explanation": "P0 = D1 / (k − g). Know the identity and k > g. You do not need $3 / 0.05 = $60 as an exam skill."
  },
  {
    "id": 96,
    "question": "A client in a high federal tax bracket is comparing a municipal bond to fully taxable alternatives. Tax-equivalent yield is used to:",
    "choices": {
      "A": "Reduce the muni yield by multiplying by the tax rate",
      "B": "Gross up the muni by dividing its yield by (1 − the client's tax rate) so it can be compared to taxable yields",
      "C": "Leave the muni yield unchanged because munis are never compared to taxables",
      "D": "Quote the muni yield as-is, since municipal yields are not grossed up for comparison"
    },
    "correct": "B",
    "explanation": "TEY = tax-free yield / (1 − t). Higher brackets make a given muni more competitive. Skip 3.5% / 0.68 ≈ 5.15%."
  },
  {
    "id": 97,
    "question": "The break-even tax bracket at which a muni and a taxable bond offer the same after-tax yield is:",
    "choices": {
      "A": "The muni yield plus the taxable yield",
      "B": "Always 37%, the top statutory rate",
      "C": "1 minus (muni yield / taxable yield); above that bracket the muni generally wins, below it the taxable generally wins",
      "D": "The taxable yield divided by the muni yield, with no subtraction from 1"
    },
    "correct": "C",
    "explanation": "t* = 1 − (muni/taxable). Directional suitability, not a 30% plug-in."
  },
  {
    "id": 98,
    "question": "An investor sells 400 shares of a stock at a loss on November 5 to harvest a tax loss. On November 20, the same investor purchases deep in-the-money call options on the same stock that are economically equivalent to owning the shares outright. What is the tax effect of this options purchase?",
    "choices": {
      "A": "It has no effect because options and stock are different security types.",
      "B": "It triggers the wash sale rule because the options are a substantially identical position, disallowing the loss and adding it to the option's basis.",
      "C": "It is permitted because the wash sale rule applies only to identical share purchases, not derivatives.",
      "D": "It converts the loss from a capital loss into an ordinary loss."
    },
    "correct": "B",
    "explanation": "The wash sale rule disallows a loss when a taxpayer acquires a substantially identical position — including certain options that are economically equivalent to the stock — within 30 days before or after the sale. The disallowed loss is added to the basis of the new position."
  },
  {
    "id": 99,
    "question": "An investor purchases three equal lots of a mutual fund: 100 shares at $20, 100 shares at $25, and 100 shares at $30. Using the average cost basis method, what is the cost basis of 150 shares sold today?",
    "choices": {
      "A": "$2,000, using only the first lot purchased",
      "B": "$3,000, using only the most recent lot",
      "C": "$3,750, based on an average cost of $25 per share",
      "D": "$4,500, based on an average cost of $30 per share"
    },
    "correct": "C",
    "explanation": "Total cost of all 300 shares = $2,000 + $2,500 + $3,000 = $7,500; average cost per share = $7,500 / 300 = $25.00. For 150 shares sold, basis = 150 × $25 = $3,750."
  },
  {
    "id": 100,
    "question": "An investor purchases stock 45 days before the ex-dividend date and sells it 20 days after the ex-dividend date, receiving a cash dividend while holding the shares. Assuming the stock is otherwise eligible, how will this dividend be taxed?",
    "choices": {
      "A": "As ordinary income, because the total holding period around the ex-dividend date is less than 61 days",
      "B": "As a qualified dividend at preferential long-term capital gains rates, because the investor held the shares more than 60 days within the 121-day window",
      "C": "Tax-free, because the shares were held less than 121 days total",
      "D": "As a short-term capital gain rather than dividend income"
    },
    "correct": "B",
    "explanation": "To receive qualified dividend treatment, a shareholder must hold the stock for more than 60 days during the 121-day period beginning 60 days before the ex-dividend date. Here, 45 days before plus 20 days after totals 65 days, satisfying the requirement."
  },
  {
    "id": 101,
    "question": "An IRA owner fails to take her required minimum distribution by the deadline. Under current rules following the SECURE 2.0 Act, what excise tax applies to the shortfall, and how can it be reduced?",
    "choices": {
      "A": "A flat 50% excise tax applies with no possibility of reduction.",
      "B": "A 25% excise tax applies on the shortfall, which can be reduced to 10% if the RMD is corrected within the applicable correction window.",
      "C": "No excise tax applies as long as the RMD is eventually taken before the owner's death.",
      "D": "A 6% excise tax applies annually until the shortfall is corrected, similar to excess IRA contributions."
    },
    "correct": "B",
    "explanation": "SECURE 2.0 reduced the excise tax for a missed RMD from 50% to 25% of the shortfall, with a further reduction to 10% if the account owner corrects the missed distribution promptly within the IRS-defined correction window."
  },
  {
    "id": 102,
    "question": "A Traditional IRA required minimum distribution for a year is:",
    "choices": {
      "A": "Always 10% of the account, regardless of age",
      "B": "The account balance multiplied by the IRS factor",
      "C": "Prior year-end account balance divided by the IRS Uniform Lifetime (or other applicable) factor—age 73 is when RMDs generally start, but the dollar RMD is not a Series 65 arithmetic drill",
      "D": "Zero for Traditional IRAs; only Roth IRAs have RMDs"
    },
    "correct": "C",
    "explanation": "RMD = balance / factor. Memorize age 73 (SECURE 2.0). Do not grind $620,000 ÷ 23.8."
  },
  {
    "id": 103,
    "question": "A 401(k) participant requests a distribution of $50,000 to be paid directly to himself, intending to complete a 60-day indirect rollover into an IRA. The plan is required to withhold 20% for federal taxes, so he receives a check for $40,000. To roll over the full $50,000 and avoid any current taxation, what must he do?",
    "choices": {
      "A": "Deposit only the $40,000 check into the IRA; the $10,000 withheld is automatically treated as a rollover.",
      "B": "Contribute the $40,000 check plus $10,000 from other personal funds to the IRA within 60 days to replace the withheld amount.",
      "C": "Wait until he files his tax return to claim the $10,000 as a rollover contribution.",
      "D": "Request that the plan reverse the withholding after the fact since he intends to roll over the full amount."
    },
    "correct": "B",
    "explanation": "Mandatory 20% withholding applies to distributions paid directly to the participant. To complete a full $50,000 rollover and avoid tax and possible penalty on the shortfall, he must deposit the $40,000 received plus make up the $10,000 withheld from other funds within 60 days; a direct trustee-to-trustee rollover avoids this issue entirely."
  },
  {
    "id": 104,
    "question": "A 55-year-old client separates from her employer and wants to know if she can access her 401(k) funds without the 10% early withdrawal penalty before reaching age 59.5. Which statement is correct regarding the 'Rule of 55'?",
    "choices": {
      "A": "She can never access retirement funds early without a 10% penalty regardless of separation from service.",
      "B": "If she separates from service during or after the calendar year she turns 55, she may take penalty-free distributions from that specific employer's 401(k) plan, though ordinary income tax still applies.",
      "C": "The Rule of 55 applies only to IRA accounts, not to 401(k) plans.",
      "D": "She must wait until age 59.5 regardless of when she separated from service."
    },
    "correct": "B",
    "explanation": "The Rule of 55 allows penalty-free (but still taxable) withdrawals from a 401(k) if the participant separates from service in or after the year they turn 55; this exception applies to the plan of the employer from which they separated, not to IRAs."
  },
  {
    "id": 105,
    "question": "A client's traditional IRA contains $80,000 of pre-tax deductible contributions and $20,000 of nondeductible (after-tax) contributions, for a total basis of $20,000 against a $100,000 balance. If the client withdraws $10,000, what portion is taxable under the pro-rata rule?",
    "choices": {
      "A": "$0, because after-tax contributions are withdrawn first (FIFO).",
      "B": "$2,000 is tax-free and $8,000 is taxable, based on the 20% basis ratio.",
      "C": "$10,000 is entirely tax-free because the account has after-tax basis.",
      "D": "$10,000 is entirely taxable because IRA basis cannot be recovered until full liquidation."
    },
    "correct": "B",
    "explanation": "Under the pro-rata rule (IRS Form 8606), the nontaxable portion of any distribution equals the same ratio as basis to total IRA balance: $20,000/$100,000 = 20%. So 20% of the $10,000 withdrawal ($2,000) is tax-free return of basis, and $8,000 is taxable."
  },
  {
    "id": 106,
    "question": "A grantor establishes an irrevocable trust and retains the right to receive an annuity payment for a fixed term of years, after which the remaining trust assets pass to his children. This describes which estate planning technique, and what is its primary tax benefit?",
    "choices": {
      "A": "A GRAT (Grantor Retained Annuity Trust), which can transfer future appreciation to heirs with minimal gift tax if the assets outperform the IRS Section 7520 rate.",
      "B": "A QTIP trust, which qualifies for the unlimited marital deduction.",
      "C": "A charitable remainder trust, which provides an income tax deduction for the grantor.",
      "D": "A 2503(c) minor's trust, which allows tax-free gifts to minors."
    },
    "correct": "A",
    "explanation": "A GRAT allows the grantor to retain an annuity for a term of years while transferring any appreciation above the IRS Section 7520 hurdle rate to remainder beneficiaries with reduced gift tax cost; if the grantor survives the term, this removes future appreciation from the estate."
  },
  {
    "id": 107,
    "question": "A married couple wants to leave assets to their surviving spouse in a way that qualifies for the unlimited marital deduction but also ensures that, upon the surviving spouse later death, the remaining principal passes to children from the grantor's first marriage rather than to whomever the surviving spouse chooses. Which trust structure accomplishes this?",
    "choices": {
      "A": "A revocable living trust naming the spouse as sole beneficiary with full discretion.",
      "B": "A QTIP (Qualified Terminable Interest Property) trust, which provides income to the surviving spouse for life while directing the remainder to the grantor's chosen beneficiaries.",
      "C": "An outright bequest to the spouse with a nonbinding letter of wishes.",
      "D": "A dynasty trust funded entirely with life insurance proceeds."
    },
    "correct": "B",
    "explanation": "A QTIP trust qualifies for the marital deduction (deferring estate tax until the second spouse's death) while allowing the grantor to control the ultimate disposition of the remainder, ensuring children from a prior marriage receive the principal rather than the surviving spouse's chosen heirs."
  },
  {
    "id": 108,
    "question": "A donor wants to make a gift to a simple trust for the benefit of his 8-year-old grandchild, and specifically wants the gift to qualify for the annual gift tax exclusion. Which trust provision is required to ensure the gift qualifies as a present interest?",
    "choices": {
      "A": "The trust must prohibit any distributions until the beneficiary turns 25.",
      "B": "The trust must include a Crummey withdrawal power giving the beneficiary a limited window to withdraw the contribution, or otherwise satisfy the requirements of Section 2503(c).",
      "C": "The trust must be revocable by the donor at any time.",
      "D": "The trust must name a corporate trustee rather than a family member."
    },
    "correct": "B",
    "explanation": "Gifts to trusts are generally treated as future interests (not eligible for the annual exclusion) unless the trust grants the beneficiary a present right to withdraw the gift (a Crummey power) or meets the specific requirements of a Section 2503(c) minor's trust."
  },
  {
    "id": 109,
    "question": "A 45-year-old client wants to compare a 20-year term life policy to a cash-value whole life policy to cover a $500,000 mortgage-protection need that will be fully paid off in 20 years. The client has limited discretionary income and wants the lowest-cost way to cover this specific, temporary need. Which recommendation is most appropriate?",
    "choices": {
      "A": "Whole life insurance, because the cash value component builds savings that can later be borrowed against.",
      "B": "A 20-year level term life policy, because it provides the needed death benefit at the lowest premium cost for a temporary, defined need.",
      "C": "Variable universal life, because it allows the client to invest the cash value in equity subaccounts for higher growth.",
      "D": "Universal life with a low, flexible premium, because it never requires additional premium payments."
    },
    "correct": "B",
    "explanation": "For a temporary, clearly defined need (paying off a mortgage within 20 years) with limited discretionary income, level term insurance matched to the need's duration provides the necessary death benefit at the lowest cost; permanent insurance is more expensive and better suited to permanent needs."
  },
  {
    "id": 110,
    "question": "Under the needs (human life value) approach to life insurance, additional coverage is generally:",
    "choices": {
      "A": "Always equal to 10 times salary with no other inputs",
      "B": "The sum of debts, education goals, and income-replacement needs, minus existing savings and insurance already in force",
      "C": "Existing savings plus current insurance, ignoring future needs",
      "D": "Only the face amount of the client's 401(k)"
    },
    "correct": "B",
    "explanation": "Add needs, subtract resources. Series 65 tests the framework, not a $1,035,000 worksheet."
  },
  {
    "id": 111,
    "question": "A financial planner is comparing a defined benefit pension plan to a defined contribution plan for a 50-year-old business owner who wants to maximize retirement savings quickly before retiring in 10 years. Which plan type would most likely allow the largest tax-deductible contribution for this owner?",
    "choices": {
      "A": "A SIMPLE IRA, because it has the lowest administrative cost.",
      "B": "A defined contribution 401(k) alone, because contribution limits are indexed annually for inflation.",
      "C": "A defined benefit plan, because contributions are actuarially determined based on funding a specific promised benefit and can substantially exceed defined contribution limits for older, highly compensated owners.",
      "D": "A payroll deduction IRA, because it requires no employer contribution."
    },
    "correct": "C",
    "explanation": "Defined benefit plans base contributions on actuarial calculations needed to fund a specific promised retirement benefit; for older business owners with a short time horizon to retirement, this often permits substantially larger tax-deductible contributions than defined contribution plan limits allow."
  },
  {
    "id": 112,
    "question": "A client owns both a Roth IRA and a traditional IRA. She is 66 years old, retired, and needs to withdraw $30,000 this year. From a tax-planning perspective, which factor is most relevant in deciding which account to draw from first when she does not urgently need the funds?",
    "choices": {
      "A": "Withdrawals from the Roth IRA are always mandatory once RMD age is reached, so it must be tapped first.",
      "B": "There is no meaningful difference since both accounts are tax-deferred.",
      "C": "Roth IRAs have no RMDs during the owner's lifetime and continue growing tax-free, so drawing from the traditional IRA first while preserving Roth assets for tax-free growth and legacy purposes is often more tax-efficient.",
      "D": "The traditional IRA should always be preserved longest because it has a stepped-up basis at death."
    },
    "correct": "C",
    "explanation": "Roth IRAs are not subject to lifetime RMDs for the original owner and grow tax-free, making it generally more efficient to draw down the traditional IRA (which will eventually require RMDs and is taxable) first, preserving the Roth for continued tax-free growth or legacy transfer."
  },
  {
    "id": 113,
    "question": "A client wants to leave her IRA to a special needs trust for her disabled adult son rather than as an outright bequest so he retains eligibility for means-tested government benefits, while also stretching distributions over his life expectancy under the SECURE Act's eligible designated beneficiary rules. Which of the following describes why this arrangement can work?",
    "choices": {
      "A": "A disabled beneficiary qualifies as an eligible designated beneficiary under SECURE Act rules, allowing life-expectancy stretch distributions rather than the standard 10-year rule, and a properly drafted trust preserves government benefit eligibility.",
      "B": "All trusts named as IRA beneficiaries automatically qualify for the 10-year rule regardless of the beneficiary's status.",
      "C": "Special needs trusts are prohibited from being named as IRA beneficiaries under federal law.",
      "D": "Naming a special needs trust converts the IRA into a Roth IRA automatically for tax purposes."
    },
    "correct": "A",
    "explanation": "Disabled individuals are classified as eligible designated beneficiaries under the SECURE Act and may stretch inherited IRA distributions over their life expectancy rather than the general 10-year rule; a properly structured special needs trust can receive these distributions while preserving the beneficiary's eligibility for means-tested benefits."
  },
  {
    "id": 114,
    "question": "A wealthy client's estate is valued well above the federal estate tax exemption. She wants to transfer wealth to grandchildren while minimizing generation-skipping transfer (GST) tax exposure. Which technique specifically addresses the GST tax?",
    "choices": {
      "A": "Allocating the client's GST exemption to transfers made to a dynasty trust benefiting grandchildren and later generations.",
      "B": "Making outright gifts to her children first, who will then gift the assets to the grandchildren.",
      "C": "Establishing a QTIP trust for her spouse, since QTIP trusts automatically shelter GST tax.",
      "D": "Relying solely on the annual gift tax exclusion, which also automatically exempts GST tax."
    },
    "correct": "A",
    "explanation": "The GST tax applies to transfers that skip a generation (e.g., grandparent to grandchild). Allocating the donor's GST exemption to a properly structured dynasty trust shields those transfers from GST tax as the assets pass to grandchildren and beyond."
  },
  {
    "id": 115,
    "question": "A 70-year-old client wants to donate directly from her IRA to a qualified charity to satisfy part of her required minimum distribution obligation, without recognizing the distribution as taxable income. Which vehicle accomplishes this specific goal?",
    "choices": {
      "A": "A Qualified Charitable Distribution (QCD), which allows up to a set annual limit to be transferred directly from the IRA to a qualified charity, satisfying the RMD without including the amount in taxable income.",
      "B": "A charitable remainder trust funded with IRA assets, since IRAs can be transferred into any trust tax-free.",
      "C": "A donor-advised fund, which allows the donor to take a full income tax deduction while also avoiding the RMD requirement entirely.",
      "D": "Simply withdrawing the RMD and later itemizing a charitable deduction for the full amount donated."
    },
    "correct": "A",
    "explanation": "A Qualified Charitable Distribution allows IRA owners age 70.5 or older to transfer IRA funds (up to an annually indexed limit) directly to a qualified charity; the QCD counts toward satisfying the RMD but is excluded from taxable income, which is more beneficial than withdrawing and deducting."
  },
  {
    "id": 116,
    "question": "An investment adviser is constructing a bond portfolio to fund a client's known $2 million liability due in exactly 8 years, and wants to protect against both price risk and reinvestment risk from interest rate changes. Which duration-matching strategy should be used?",
    "choices": {
      "A": "Select bonds with a duration substantially longer than 8 years to maximize yield.",
      "B": "Select bonds with a duration substantially shorter than 8 years to reduce price volatility.",
      "C": "Match the portfolio's Macaulay duration to the 8-year investment horizon (classical immunization), so price risk and reinvestment risk offset each other regardless of moderate rate shifts.",
      "D": "Ignore duration and instead select the highest-coupon bonds available regardless of maturity."
    },
    "correct": "C",
    "explanation": "Classical immunization matches portfolio duration to the investment time horizon; when rates rise, reinvestment income increases but bond prices fall (and vice versa), and matching duration to the horizon causes these two effects to offset, protecting the target value at the liability date."
  },
  {
    "id": 117,
    "question": "A retiree's bond portfolio has a multi-year duration. If yields rise across the curve, duration predicts:",
    "choices": {
      "A": "A negligible dollar change for any 50 bp move",
      "B": "A decline in market value; the longer the duration, the larger the percentage drop for a given yield increase",
      "C": "An increase in market value because coupons are fixed",
      "D": "A decline twice as large as duration times the yield change, always"
    },
    "correct": "B",
    "explanation": "% ΔP ≈ −duration × Δy. Rates up, prices down. No need for 3% of $400,000 = $12,000."
  },
  {
    "id": 118,
    "question": "A financial planner is evaluating asset allocation using modern portfolio theory. Client A's portfolio lies exactly on the efficient frontier. Client B's portfolio, with the same standard deviation as Client A's, lies below the efficient frontier. What does this indicate about Client B's portfolio?",
    "choices": {
      "A": "Client B's portfolio is optimally diversified and simply has a different risk tolerance.",
      "B": "Client B's portfolio is inefficient; a portfolio exists with the same risk but a higher expected return, or the same return with lower risk.",
      "C": "Client B's portfolio must contain only bonds, since bond portfolios always plot below the efficient frontier.",
      "D": "Both portfolios are equally efficient because they share the same standard deviation."
    },
    "correct": "B",
    "explanation": "The efficient frontier represents the set of portfolios offering the maximum expected return for each level of risk (or minimum risk for each level of return). A portfolio plotting below the frontier is inefficient because an alternative combination exists that dominates it on a risk-return basis."
  },
  {
    "id": 119,
    "question": "A client who is fully invested in a risky portfolio moves a portion of assets into risk-free T-bills. Combined expected return and combined standard deviation will:",
    "choices": {
      "A": "Keep the original expected return and original SD",
      "B": "Move both expected return toward the T-bill rate and SD toward zero, in proportion to the weight still in the risky portfolio (T-bills have SD ≈ 0)",
      "C": "Keep expected return at the risky portfolio's return while only SD falls",
      "D": "Leave SD unchanged because T-bills do not affect volatility"
    },
    "correct": "B",
    "explanation": "Capital allocation line: both mean and SD scale with the risky weight. Skip 0.75×9% + 0.25×3% = 7.50% and 0.75×14% = 10.5%."
  },
  {
    "id": 120,
    "question": "An adviser is explaining systematic versus unsystematic risk to a client who holds a concentrated position in a single technology stock. Which statement correctly distinguishes the two types of risk and how they relate to diversification?",
    "choices": {
      "A": "Systematic risk (e.g., market-wide recessions, interest rate changes) cannot be eliminated through diversification, while unsystematic risk (e.g., company-specific issues) can be reduced or eliminated by holding a diversified portfolio.",
      "B": "Unsystematic risk cannot be diversified away, while systematic risk can be fully eliminated by adding more securities to the portfolio.",
      "C": "Both systematic and unsystematic risk are eliminated once a portfolio holds more than 20 securities.",
      "D": "Systematic risk only affects bonds, while unsystematic risk only affects equities."
    },
    "correct": "A",
    "explanation": "Systematic (market) risk affects all securities and cannot be diversified away; unsystematic (company- or industry-specific) risk can be substantially reduced or eliminated through diversification across many uncorrelated holdings, which is why beta (not standard deviation) measures relevant risk for diversified investors."
  },
  {
    "id": 121,
    "question": "A client wants a passive, low-cost approach to broad market equity exposure and is skeptical that active managers can consistently outperform their benchmarks net of fees, citing efficient market hypothesis (EMH) concepts. Which investment approach is most consistent with the client's stated philosophy?",
    "choices": {
      "A": "Actively managed mutual funds with high portfolio turnover, aiming to exploit short-term mispricing.",
      "B": "A broad-based index fund or ETF that tracks a market benchmark at low cost, consistent with a belief in reasonably efficient markets.",
      "C": "A concentrated portfolio of individual stocks selected using proprietary technical analysis signals.",
      "D": "A market-timing strategy that shifts fully between stocks and cash based on momentum indicators."
    },
    "correct": "B",
    "explanation": "A belief in efficient markets suggests it is difficult to consistently beat the market after costs, supporting a passive, low-cost indexing approach rather than active stock-picking, technical analysis, or market-timing strategies."
  },
  {
    "id": 122,
    "question": "A client's investment policy statement calls for a target allocation of 50% equities, 40% fixed income, and 10% cash, with a 5-percentage-point rebalancing tolerance band on each asset class. At the most recent quarterly review, the portfolio shows 58% equities, 32% fixed income, and 10% cash. According to the IPS's stated rebalancing policy, what action is required?",
    "choices": {
      "A": "No action is required because cash remains exactly at target.",
      "B": "Rebalance is triggered because equities (58%, +8 points) and fixed income (32%, -8 points) have both breached their 5-point tolerance bands; sell equities and buy fixed income to return toward target.",
      "C": "Wait until the annual review regardless of the drift, since quarterly reviews are informational only.",
      "D": "Increase the equity target to 58% to reflect current market conditions rather than rebalancing."
    },
    "correct": "B",
    "explanation": "Since equities are 8 percentage points above target (exceeding the 5-point band) and fixed income is 8 points below target (also exceeding its band), the tolerance-band rebalancing policy is triggered, requiring trades to bring the portfolio back within its allowable ranges."
  },
  {
    "id": 123,
    "question": "A client purchases a fixed immediate annuity with a $300,000 premium. Her financial planner explains that this product is primarily designed to address which specific risk in retirement?",
    "choices": {
      "A": "Inflation risk, because fixed annuity payments always increase with the CPI.",
      "B": "Longevity risk, because the annuity provides a guaranteed income stream for as long as the annuitant lives, transferring the risk of outliving assets to the insurer.",
      "C": "Reinvestment risk, because annuity payments can be reinvested at the original crediting rate indefinitely.",
      "D": "Liquidity risk, because immediate annuities allow unlimited penalty-free withdrawals."
    },
    "correct": "B",
    "explanation": "A fixed immediate annuity converts a lump sum into a stream of guaranteed periodic payments for life, transferring longevity risk (the risk of outliving one's savings) to the insurance company. It does not address inflation risk unless it includes a cost-of-living adjustment, and it generally has limited liquidity."
  },
  {
    "id": 124,
    "question": "A portfolio's actual return is below the return CAPM required given its beta, rf, and the market. Jensen's alpha indicates:",
    "choices": {
      "A": "Negative alpha: the manager subtracted value versus the CAPM benchmark for the systematic risk taken",
      "B": "Positive alpha whenever the market itself was positive",
      "C": "Alpha equal to actual return minus the market return, ignoring beta",
      "D": "Zero alpha, because CAPM always predicts the actual return"
    },
    "correct": "A",
    "explanation": "Alpha = actual − [rf + β(rm − rf)]. Underperformance is the story, not a −3.0% worksheet."
  },
  {
    "id": 125,
    "question": "A client compares two growth stocks. Stock A trades at a P/E of 30 with an expected 5-year earnings growth rate of 25% (PEG = 1.2). Stock B trades at a P/E of 18 with an expected 5-year earnings growth rate of 20% (PEG = 0.9). Based solely on the PEG ratio, which stock appears more attractively valued relative to its growth?",
    "choices": {
      "A": "Stock A, because its P/E of 30 reflects greater market confidence.",
      "B": "Stock B, because a lower PEG ratio (0.9 versus 1.2) suggests the stock is more attractively priced relative to its expected earnings growth.",
      "C": "Stock A, because higher absolute growth always justifies a higher valuation regardless of PEG.",
      "D": "Both stocks are equally attractive because their P/E-to-growth relationship nets out."
    },
    "correct": "B",
    "explanation": "PEG ratio = P/E / growth rate. Stock A: 30/25 = 1.2. Stock B: 18/20 = 0.9. A lower PEG ratio generally indicates a stock is cheaper relative to its expected growth rate, making Stock B more attractively valued on this basis."
  },
  {
    "id": 126,
    "question": "A client's portfolio consists of two asset classes with a correlation coefficient of -0.2 between them. A colleague argues that combining these assets provides no diversification benefit because both asset classes have positive expected returns. Which statement correctly evaluates this claim?",
    "choices": {
      "A": "The colleague is correct; diversification benefit depends only on expected returns, not correlation.",
      "B": "The colleague is incorrect; a negative correlation between two assets reduces overall portfolio standard deviation more than would occur with a positive or zero correlation, providing a meaningful diversification benefit regardless of each asset's own expected return.",
      "C": "Diversification benefit only exists when correlation is exactly 1.0.",
      "D": "Negative correlation eliminates all portfolio risk regardless of individual asset volatility."
    },
    "correct": "B",
    "explanation": "Diversification benefit is a function of correlation between assets, not their individual expected returns. A negative correlation (-0.2) causes returns to partially offset each other, reducing overall portfolio volatility more effectively than assets with higher or positive correlations."
  },
  {
    "id": 127,
    "question": "A client wants to know the primary distinction between fundamental analysis and technical analysis when evaluating a potential stock purchase. Which statement best describes this distinction?",
    "choices": {
      "A": "Fundamental analysis examines a company's financial statements, competitive position, and economic factors to estimate intrinsic value, while technical analysis studies historical price and volume patterns to predict future price movements.",
      "B": "Technical analysis relies exclusively on a company's earnings reports, while fundamental analysis relies exclusively on chart patterns.",
      "C": "Fundamental analysis assumes markets are always inefficient, while technical analysis assumes markets are perfectly efficient.",
      "D": "There is no meaningful difference; both approaches use identical inputs and produce the same conclusions."
    },
    "correct": "A",
    "explanation": "Fundamental analysis focuses on a company's financial health, earnings, industry position, and macroeconomic factors to determine intrinsic value; technical analysis instead studies historical price/volume charts and trading patterns to forecast future price direction, independent of the underlying business fundamentals."
  },
  {
    "id": 128,
    "question": "A client's adviser recommends a dollar-cost averaging (DCA) strategy of investing $1,000 per month into a volatile equity fund rather than investing a $12,000 lump sum immediately. Which statement correctly describes a key characteristic of dollar-cost averaging?",
    "choices": {
      "A": "DCA guarantees a lower average cost per share than a lump-sum investment under all market conditions.",
      "B": "DCA eliminates market risk entirely because purchases are spread over time.",
      "C": "DCA results in purchasing more shares when prices are low and fewer shares when prices are high, which can lower the average cost per share compared to investing the same fixed number of shares each period, but it does not guarantee outperformance versus a lump sum, particularly in a rising market.",
      "D": "DCA is only appropriate for fixed-income investments, not equities."
    },
    "correct": "C",
    "explanation": "Dollar-cost averaging invests a fixed dollar amount at regular intervals, buying more shares when prices are low and fewer when prices are high. This can reduce average cost per share versus buying a fixed number of shares each period, but it does not eliminate market risk and often underperforms a lump-sum investment in consistently rising markets."
  },
  {
    "id": 129,
    "question": "A client's account had a beginning value of $500,000. Midway through the year, the client contributed an additional $100,000 right before a market decline, after which the account fell in value. At year end, the account value was $560,000. The firm's composite index (excluding this client's cash flows) returned 9% for the year. The client is upset that his account underperformed the composite. What is the most likely explanation to give the client?",
    "choices": {
      "A": "The composite return is money-weighted and is distorted by other clients' larger cash flows.",
      "B": "The client's personal money-weighted (dollar-weighted) return was penalized by the poorly timed $100,000 contribution just before the decline, whereas the firm's composite is typically calculated on a time-weighted basis that removes the effect of the timing and size of external cash flows.",
      "C": "The account underperformed solely because the manager made poor security selections during the period.",
      "D": "There is no valid explanation; the two returns should always be identical regardless of cash flow timing."
    },
    "correct": "B",
    "explanation": "A client's money-weighted (IRR) return reflects the actual timing and size of their cash flows, so a poorly timed large contribution right before a decline will depress the money-weighted return. In contrast, firm composite returns are typically time-weighted, which removes the impact of external cash flow timing, so the two figures can diverge significantly even with identical underlying investments."
  },
  {
    "id": 130,
    "question": "A client's traditional 401(k) allows for after-tax (non-Roth) contributions in addition to the standard pre-tax elective deferral limit. The client wants to maximize tax-advantaged savings and later plans to convert the after-tax contributions to a Roth account. Which strategy does this describe?",
    "choices": {
      "A": "A backdoor Roth IRA conversion using nondeductible traditional IRA contributions.",
      "B": "A mega backdoor Roth strategy, in which after-tax contributions made within the 401(k) (up to the overall annual additions limit) are subsequently converted or rolled over to a Roth account, allowing significantly larger Roth-equivalent savings than the standard elective deferral limit alone.",
      "C": "A standard Roth 401(k) elective deferral election.",
      "D": "A qualified charitable distribution structured through the 401(k) plan."
    },
    "correct": "B",
    "explanation": "A mega backdoor Roth strategy uses after-tax (non-Roth) contributions permitted within a 401(k) plan, up to the total annual additions limit (which is significantly higher than the elective deferral limit), and then converts or rolls those after-tax dollars into a Roth account, allowing much larger Roth savings than standard Roth 401(k) deferrals alone."
  },
  {
    "id": 131,
    "question": "A client's investment adviser representative recommends a 60% equity / 40% fixed income strategic allocation based on the client's stated moderate risk tolerance and 20-year time horizon. The adviser explains that this allocation will remain largely fixed over time, with only periodic rebalancing back to target, regardless of short-term market forecasts. This describes which portfolio management approach?",
    "choices": {
      "A": "Tactical asset allocation",
      "B": "Strategic asset allocation",
      "C": "Market timing",
      "D": "Momentum-based sector rotation"
    },
    "correct": "B",
    "explanation": "Strategic asset allocation establishes a long-term target mix of asset classes based on the investor's objectives, risk tolerance, and time horizon, with periodic rebalancing back to that target; it does not involve short-term shifts based on market forecasts, which instead characterizes tactical allocation or market timing."
  },
  {
    "id": 132,
    "question": "An adviser is comparing a growth-style equity mutual fund to a value-style equity mutual fund for a client. Which characteristic would most likely distinguish the value fund's typical holdings from the growth fund's typical holdings?",
    "choices": {
      "A": "The value fund's holdings would typically have lower price-to-earnings and price-to-book ratios relative to the market, while the growth fund's holdings would typically have higher P/E and P/B ratios reflecting expectations of above-average future earnings growth.",
      "B": "The value fund's holdings would always pay no dividends, while the growth fund's holdings always pay high dividends.",
      "C": "The growth fund would hold only fixed-income securities to reduce volatility.",
      "D": "There is no meaningful distinction; value and growth styles hold identical securities."
    },
    "correct": "A",
    "explanation": "Value investing targets stocks trading at lower valuation multiples (P/E, P/B) relative to fundamentals, often due to being out of favor, while growth investing targets companies with above-average expected earnings growth, typically trading at higher valuation multiples reflecting those growth expectations."
  },
  {
    "id": 133,
    "question": "A client's portfolio manager uses an active management approach and charges a 1.25% annual management fee, while a comparable passive index fund charges 0.10%. Over a 20-year holding period, assuming both funds achieve the same gross (pre-fee) average annual return, which statement about the likely outcome is most accurate?",
    "choices": {
      "A": "The actively managed fund will likely have a higher net return because active managers generate alpha that fully offsets the higher fee.",
      "B": "The passive index fund will likely have a meaningfully higher net (after-fee) ending value over the 20-year period, because the 1.15% annual fee differential compounds substantially over a long time horizon, and net returns (not gross returns) determine wealth accumulation for the investor.",
      "C": "Fee differences of this size have a negligible cumulative effect on ending wealth over 20 years.",
      "D": "The fee differential is irrelevant because mutual fund fees are deducted from the fund sponsor's revenue, not the investor's return."
    },
    "correct": "B",
    "explanation": "Since net returns to the investor are gross returns minus fees, and the two funds are assumed to have equal gross returns, the fund with the lower ongoing expense ratio will accumulate meaningfully more wealth for the investor over a long time horizon due to fee drag compounding over 20 years."
  },
  {
    "id": 134,
    "question": "An adviser gathering KYC information learns that a client has a stated 'moderate' risk tolerance on a risk questionnaire, but the client's actual net worth, income stability, and short investment time horizon suggest a low risk capacity. Under suitability and fiduciary principles, how should the adviser resolve this discrepancy when constructing the client's portfolio?",
    "choices": {
      "A": "Always defer entirely to the client's stated risk tolerance score on the questionnaire, since that is the client's own assessment.",
      "B": "Use only objective risk capacity factors and ignore the client's stated preferences entirely.",
      "C": "Recognize that both risk tolerance (willingness) and risk capacity (ability) must be considered together, and generally recommend an allocation no more aggressive than what the client's actual capacity to bear risk and loss supports, documenting the discussion and rationale.",
      "D": "Recommend the most aggressive allocation permissible, since higher expected returns benefit the client regardless of capacity."
    },
    "correct": "C",
    "explanation": "Suitability requires balancing both the client's subjective risk tolerance (willingness to accept risk) and objective risk capacity (financial ability to withstand losses, e.g., time horizon, income stability, net worth). When capacity is lower than stated tolerance, advisers should generally recommend an allocation consistent with the lower of the two and document the analysis."
  },
  {
    "id": 135,
    "question": "A 401(k) plan participant is comparing rolling over her account balance into an IRA versus leaving it in her former employer's plan versus rolling it into her new employer's 401(k). She is 45 years old and does not anticipate needing the funds before retirement. Which factor would most likely favor keeping the funds in an employer-sponsored plan rather than rolling into an IRA?",
    "choices": {
      "A": "Employer-sponsored plans generally offer broader investment choices than most IRA custodians.",
      "B": "Creditor protection under federal ERISA law is typically stronger and more uniform for employer-sponsored plan assets than for IRA assets, which are instead subject to varying state law protections (outside of bankruptcy).",
      "C": "RMDs are never required from employer-sponsored plans regardless of age.",
      "D": "Employer plans always have lower expense ratios than IRA investment options."
    },
    "correct": "B",
    "explanation": "Assets held in ERISA-qualified employer plans generally receive strong, uniform federal creditor protection, while IRA assets (outside of federal bankruptcy protection up to a limit) are subject to varying and sometimes weaker state-law creditor protections; this is a common factor favoring retention in an employer plan for a client concerned about creditor risk."
  },
  {
    "id": 136,
    "question": "A portfolio holds two stocks in equal value weights, each with a different beta. Overall portfolio beta is:",
    "choices": {
      "A": "The sum of the two betas",
      "B": "The value-weighted average of the component betas—not the sum, the difference, or simply the higher beta",
      "C": "The difference between the two betas",
      "D": "Always the higher of the two individual betas"
    },
    "correct": "B",
    "explanation": "Portfolio beta is a weighted average. Equal weights of 1.4 and 0.6 would average to 1.0, but the testable idea is the averaging rule, not two-decimal arithmetic."
  },
  {
    "id": 137,
    "question": "A portfolio's expected return given allocations to asset classes is:",
    "choices": {
      "A": "The higher of the two asset-class returns",
      "B": "The value-weighted average of the component expected returns—not the higher return, and not an unweighted mean",
      "C": "The unweighted average of the two returns",
      "D": "Always equal to the risk-free rate"
    },
    "correct": "B",
    "explanation": "E(rp) = Σ w_i E(r_i). Know the weighting rule; skip 0.40×12% + 0.60×5% = 7.8%."
  },
  {
    "id": 138,
    "question": "A retired client holds a laddered municipal bond portfolio with maturities from 1 to 10 years. She asks her adviser why laddering is preferable to putting all funds into a single 10-year bond, given that the 10-year bond offers a higher yield. Which explanation best addresses her concern?",
    "choices": {
      "A": "Laddering guarantees a higher total return than any single-maturity bond strategy.",
      "B": "Laddering provides regular, predictable liquidity as bonds mature at staggered intervals, reduces reinvestment-timing risk compared to concentrating all funds at one maturity, and reduces interest rate risk exposure relative to holding only long-maturity bonds, at the cost of some yield compared to the longest maturity available.",
      "C": "Laddering eliminates all interest rate risk regardless of the rate environment.",
      "D": "A single 10-year bond provides better diversification than a ladder because it locks in one rate for the entire holding period."
    },
    "correct": "B",
    "explanation": "A bond ladder spreads maturities across multiple dates, providing periodic liquidity, moderating interest rate risk (compared to concentrating in long bonds), and reducing the risk of reinvesting a large sum all at once at an unfavorable rate — trading some yield potential (available on the longest single maturity) for these benefits."
  },
  {
    "id": 139,
    "question": "For a municipal bond that is double tax-exempt (federal and the client's state), tax-equivalent yield should:",
    "choices": {
      "A": "Use the combined federal-plus-state marginal rate in the (1 − t) denominator",
      "B": "Use only the state rate, ignoring federal tax",
      "C": "Equal the muni's stated yield with no gross-up",
      "D": "Add the two tax rates to the muni yield"
    },
    "correct": "A",
    "explanation": "If both taxes are avoided, both belong in t. Conceptually gross up; do not compute 3.1% / 0.62 = 5.00% as drill."
  },
  {
    "id": 140,
    "question": "A client compares Bond X (5-year maturity, modified duration 4.5) to Bond Y (5-year maturity, modified duration 4.5, but higher coupon and therefore lower convexity than Bond X). If market yields are expected to be highly volatile with large swings in either direction, which bond would provide a more favorable price response for the investor?",
    "choices": {
      "A": "Bond Y, because lower convexity always outperforms in volatile markets.",
      "B": "Bond X, because with equal duration, higher convexity produces larger price gains when yields fall and smaller price losses when yields rise, making it more favorable given anticipated volatility.",
      "C": "Both bonds will perform identically because their durations are equal.",
      "D": "Convexity is irrelevant when durations are matched."
    },
    "correct": "B",
    "explanation": "When two bonds have equal duration, the bond with higher convexity will experience larger price increases when yields fall and smaller price declines when yields rise, compared to the lower-convexity bond. This asymmetric benefit becomes more valuable when large yield swings are anticipated."
  },
  {
    "id": 141,
    "question": "A portfolio has a slightly higher expected return and slightly higher standard deviation than its benchmark. Using Sharpe ratios to judge risk-adjusted results, the adviser should:",
    "choices": {
      "A": "Compare (return − rf) / SD for each: higher volatility alone does not prove underperformance, and Sharpe can be compared to a benchmark",
      "B": "Conclude the ratios must be identical",
      "C": "Declare the portfolio the loser solely because its SD is higher",
      "D": "Refuse to compare Sharpe ratios between a portfolio and an index"
    },
    "correct": "A",
    "explanation": "Sharpe is excess return per unit of total risk. Skip 0.4375 vs 0.40."
  },
  {
    "id": 142,
    "question": "A couple wants to set up a 529 college savings plan for their newborn child and are told that if the child does not use all the funds for qualified education expenses, some 529 rules provide flexibility. Which of the following correctly describes a modern feature of unused 529 funds?",
    "choices": {
      "A": "Unused 529 funds must always be forfeited to the state if not used for the original beneficiary's education.",
      "B": "Under current rules, a portion of unused 529 funds may, subject to specific limits and conditions (including a 15-year account minimum), be rolled over tax-free and penalty-free into a Roth IRA for the beneficiary.",
      "C": "529 plans require the funds to be used strictly by age 18 or they become fully taxable with no penalty relief options.",
      "D": "Unused 529 funds can only be transferred to a sibling if the sibling is also enrolled in college at the time of transfer."
    },
    "correct": "B",
    "explanation": "Recent legislation (SECURE 2.0) allows limited tax-free and penalty-free rollovers of unused 529 plan funds to a Roth IRA for the beneficiary, subject to conditions including the account being open at least 15 years, annual Roth contribution limits, and a lifetime rollover cap."
  },
  {
    "id": 143,
    "question": "A client's IRA beneficiary designation names her estate rather than an individual or a see-through trust. Following the client's death, what is the most likely consequence for how quickly the inherited IRA must be distributed?",
    "choices": {
      "A": "The estate, as a non-designated beneficiary, will generally be subject to a faster distribution requirement (either the remaining balance of the decedent's life expectancy or the 5-year rule if the decedent died before their required beginning date) rather than the more flexible options available to designated individual beneficiaries.",
      "B": "Naming an estate as beneficiary has no effect on distribution timing compared to naming an individual.",
      "C": "Estates as IRA beneficiaries automatically qualify for the 10-year rule available to designated beneficiaries.",
      "D": "The IRA custodian will automatically re-designate the account to the decedent's closest living relative."
    },
    "correct": "A",
    "explanation": "An estate is not a 'designated beneficiary' under IRS rules. If the IRA owner dies before their required beginning date, the estate must generally distribute the account within 5 years; if after, distributions continue over the decedent's remaining single life expectancy — both options are typically less favorable than what a designated individual beneficiary could use."
  },
  {
    "id": 144,
    "question": "A client's financial plan calls for withdrawing 4% of her initial retirement portfolio value annually, adjusted for inflation each subsequent year, over a 30-year retirement horizon. This describes which retirement income strategy, and what is its primary limitation?",
    "choices": {
      "A": "The bucket strategy; its primary limitation is high transaction costs from frequent rebalancing between buckets.",
      "B": "The '4% rule' (a fixed initial withdrawal rate strategy); its primary limitation is that it does not adjust withdrawals based on actual portfolio performance, which can lead to either premature depletion in poor markets or excessive unused wealth in strong markets.",
      "C": "Immediate annuitization; its primary limitation is the loss of principal control.",
      "D": "The systematic withdrawal of only interest and dividends; its primary limitation is unpredictable income in low-rate environments."
    },
    "correct": "B",
    "explanation": "The 4% rule sets an initial withdrawal rate and then adjusts that dollar amount for inflation each year regardless of portfolio performance. Its main criticism is inflexibility — it does not respond to sequence-of-returns risk, potentially depleting the portfolio early in poor markets or leaving excess unused wealth in strong markets."
  },
  {
    "id": 145,
    "question": "A client's portfolio holds 10 stocks, each with an idiosyncratic (company-specific) standard deviation, and the stocks are largely uncorrelated with one another. As the adviser adds progressively more uncorrelated stocks to the portfolio (moving from 10 to 30 to 100 stocks), what happens to the portfolio's total risk?",
    "choices": {
      "A": "Total risk approaches zero as more stocks are added.",
      "B": "Systematic risk remains largely unchanged while unsystematic risk continues to decline, so total portfolio risk approaches the level of systematic (market) risk but does not reach zero.",
      "C": "Both systematic and unsystematic risk decline proportionally and reach zero at exactly 30 stocks.",
      "D": "Adding more stocks has no effect on portfolio risk once more than 5 securities are held."
    },
    "correct": "B",
    "explanation": "As additional uncorrelated securities are added to a portfolio, unsystematic (diversifiable) risk declines and eventually approaches a minimal level, but systematic (market) risk cannot be diversified away. Therefore total portfolio risk approaches the level of systematic risk as diversification increases, not zero."
  },
  {
    "id": 146,
    "question": "A client's adviser recommends a strategy of tax-loss harvesting: systematically selling investments at a loss to offset realized capital gains elsewhere in the portfolio. If the client has $15,000 of realized long-term capital gains and $22,000 of harvested capital losses in the same tax year, what is the tax treatment of the excess loss?",
    "choices": {
      "A": "The excess $7,000 loss is forfeited and cannot be used in future years.",
      "B": "The $22,000 loss fully offsets the $15,000 gain, and up to $3,000 of the remaining $7,000 net loss can be deducted against ordinary income this year, with any remainder carried forward to future tax years indefinitely.",
      "C": "The excess loss must be carried back to amend the prior year's tax return.",
      "D": "Only $1,000 of the excess loss may be deducted against ordinary income annually."
    },
    "correct": "B",
    "explanation": "Capital losses first offset capital gains dollar-for-dollar ($22,000 loss - $15,000 gain = $7,000 net loss). Of that net loss, up to $3,000 may be deducted against ordinary income in the current tax year, with any unused loss carried forward indefinitely to future years."
  },
  {
    "id": 147,
    "question": "A client's adviser is evaluating two competing annuity riders for a variable annuity: a Guaranteed Minimum Withdrawal Benefit (GMWB) and a Guaranteed Minimum Income Benefit (GMIB). The client wants flexibility to withdraw funds without necessarily annuitizing the contract. Which rider best matches this preference, and why?",
    "choices": {
      "A": "The GMIB, because it guarantees a minimum income stream only if the client annuitizes the contract, offering no benefit if the client simply withdraws funds.",
      "B": "The GMWB, because it guarantees the ability to withdraw a specified percentage of the benefit base annually for life (or a set period) without requiring annuitization, preserving flexibility and potential access to remaining account value.",
      "C": "Both riders provide identical benefits regardless of whether the client annuitizes.",
      "D": "Neither rider provides any guarantee unless the underlying subaccounts lose money."
    },
    "correct": "B",
    "explanation": "A GMWB allows the contract owner to withdraw a guaranteed percentage of a benefit base each year without converting the contract into an annuitized income stream, preserving access to any remaining account value; a GMIB typically requires annuitization to activate the guaranteed income benefit."
  },
  {
    "id": 148,
    "question": "A client's portfolio has generated a positive alpha of 2% relative to its benchmark over the trailing three years. A colleague claims this proves the manager possesses genuine skill. Which of the following considerations should the adviser raise to critically evaluate this claim?",
    "choices": {
      "A": "Alpha calculated over a short period may reflect luck, a temporarily favorable factor tilt (e.g., value or momentum exposure), or benchmark misspecification rather than repeatable skill; a longer track record, consistency across market cycles, and proper risk adjustment should be examined before concluding genuine skill exists.",
      "B": "Any positive alpha over any time period conclusively proves manager skill with no further analysis needed.",
      "C": "Alpha is meaningless unless it is negative, since negative alpha always indicates poor security selection.",
      "D": "Alpha cannot be measured for actively managed portfolios, only for index funds."
    },
    "correct": "A",
    "explanation": "A single positive alpha reading, especially over a relatively short three-year period, does not conclusively demonstrate manager skill. Statistical significance, consistency over multiple market cycles, potential factor exposures, and the appropriateness of the benchmark used should all be evaluated before attributing outperformance to genuine skill rather than chance."
  },
  {
    "id": 149,
    "question": "A married couple, both age 68, hold a $1.5 million investment portfolio. They tell their adviser they need $50,000 per year (inflation-adjusted) from the portfolio to supplement Social Security and want the portfolio to last at least 30 years with a high degree of confidence. Which planning tool would best help the adviser assess the probability of portfolio success over this horizon?",
    "choices": {
      "A": "A simple average-return calculation using a single assumed historical average return for the entire 30-year period.",
      "B": "A Monte Carlo simulation modeling thousands of potential sequences of market returns and inflation to estimate the probability the portfolio sustains the desired withdrawals over 30 years.",
      "C": "A one-time snapshot of the portfolio's current asset allocation with no forward projection.",
      "D": "A comparison of the portfolio's current yield to the desired withdrawal rate only."
    },
    "correct": "B",
    "explanation": "Monte Carlo simulation models a wide range of possible sequences of returns, volatility, and inflation outcomes to estimate the probability that a portfolio will sustain a specified withdrawal strategy over a given time horizon, providing far more insight into sequence-of-returns risk than a simple average-return projection."
  },
  {
    "id": 150,
    "question": "A client's adviser explains the difference between a portfolio's standard deviation and its beta when discussing risk. Which statement correctly distinguishes these two risk measures for a client evaluating a single actively managed fund held as one part of a broader diversified portfolio?",
    "choices": {
      "A": "Standard deviation measures total risk (both systematic and unsystematic) of the fund in isolation, while beta measures only the fund's systematic (market-related) risk relative to a benchmark; for a diversified investor, beta is often more relevant since unsystematic risk can be diversified away.",
      "B": "Beta and standard deviation always produce identical numerical values for any given security.",
      "C": "Standard deviation measures only systematic risk, while beta measures only unsystematic risk.",
      "D": "Neither measure is relevant once a fund is added to a diversified portfolio."
    },
    "correct": "A",
    "explanation": "Standard deviation captures a security's or fund's total volatility (both diversifiable and non-diversifiable risk), while beta isolates systematic risk relative to the market. For an investor holding a diversified portfolio, beta is generally the more relevant risk measure because unsystematic risk specific to any one holding can be reduced through diversification."
  },
  {
    "id": 151,
    "question": "A client's employer offers both a traditional 401(k) and a Roth 401(k) option. The client is currently in a low tax bracket early in her career but expects to be in a significantly higher tax bracket in retirement due to anticipated income growth and pension benefits. From a tax-planning perspective, which contribution type is generally more advantageous for this client?",
    "choices": {
      "A": "Traditional 401(k) contributions, because the current-year tax deduction is always more valuable regardless of future tax rates.",
      "B": "Roth 401(k) contributions, because paying tax on contributions now at the client's current lower tax rate, and receiving tax-free qualified withdrawals in retirement at what is expected to be a higher tax rate, is generally more tax-efficient.",
      "C": "Neither option matters because 401(k) contribution limits are identical regardless of tax treatment.",
      "D": "The client should contribute to neither and instead use only a taxable brokerage account."
    },
    "correct": "B",
    "explanation": "When an individual expects to be in a higher tax bracket in retirement than during their contribution years, Roth contributions (taxed now at the lower current rate, withdrawn tax-free later) are generally more advantageous than traditional pre-tax contributions, which defer tax to what is expected to be a higher future rate."
  },
  {
    "id": 152,
    "question": "A client's portfolio is being evaluated using the Capital Asset Pricing Model. The security market line (SML) plots expected return against beta for all securities in equilibrium. If a particular stock plots above the SML given its beta, what does this indicate?",
    "choices": {
      "A": "The stock is overvalued and should be expected to underperform going forward.",
      "B": "The stock is undervalued, offering a higher expected return than justified by its systematic risk (positive alpha), and would be an attractive purchase candidate under CAPM equilibrium assumptions.",
      "C": "The stock has no systematic risk and only unsystematic risk applies.",
      "D": "The stock's beta must be recalculated because plotting above the SML is mathematically impossible."
    },
    "correct": "B",
    "explanation": "A security plotting above the security market line offers a higher expected return than the CAPM predicts for its level of systematic risk (positive alpha), suggesting it is undervalued and market equilibrium forces would be expected to eventually bid its price up (and expected return down) toward the line."
  },
  {
    "id": 153,
    "question": "A client's adviser is helping structure a diversified fixed-income allocation and explains that combining Treasury bonds, investment-grade corporates, and high-yield corporates in a single portfolio can improve the risk-return tradeoff versus holding any single bond category exclusively. Which underlying principle best explains this benefit?",
    "choices": {
      "A": "All bond categories have identical risk and return characteristics, so combining them provides no measurable benefit.",
      "B": "Because different bond sectors have less than perfect correlation with one another (reacting differently to interest rate changes, credit spread movements, and economic cycles), combining them can reduce overall portfolio volatility for a given level of expected return compared to concentrating in a single sector.",
      "C": "Diversification benefits apply only to equities, never to fixed income securities.",
      "D": "Combining bond sectors always increases portfolio risk because more securities are added."
    },
    "correct": "B",
    "explanation": "Different fixed-income sectors (Treasuries, investment-grade corporates, high-yield) respond differently to interest rate changes, credit spread widening/narrowing, and economic conditions. Because they are not perfectly correlated, combining them can reduce overall portfolio volatility relative to concentrating entirely in one sector, consistent with modern portfolio theory principles applied to fixed income."
  },
  {
    "id": 154,
    "question": "A 62-year-old widow's late husband's 401(k) plan allowed her, as his surviving spouse, to roll his account into her own IRA (a spousal rollover) rather than treating it as an inherited IRA. Which of the following best describes the primary advantage of this spousal rollover election compared to treating it as an inherited IRA?",
    "choices": {
      "A": "A spousal rollover has no RMD implications and no age-based rules apply for the rest of her life.",
      "B": "Treating the account as her own IRA (via spousal rollover) means RMDs are based on her own age and life expectancy (and can be delayed until her own required beginning date), and she avoids the early-withdrawal penalty concerns that could otherwise apply differently to inherited account rules, giving her greater flexibility than treating it as an inherited IRA.",
      "C": "A spousal rollover is only available if she is younger than 59.5 at the time of the rollover.",
      "D": "Inherited IRAs always provide better tax treatment than spousal rollovers for a surviving spouse."
    },
    "correct": "B",
    "explanation": "A surviving spouse has the unique option to roll a deceased spouse's retirement account into her own IRA, treating it as her own for RMD purposes (based on her own age and required beginning date) rather than being bound by the beneficiary-specific rules that apply to a non-spouse inherited IRA, offering greater flexibility in timing distributions."
  },
  {
    "id": 155,
    "question": "An agent's registration under the Uniform Securities Act becomes effective on September 3. Assuming no earlier renewal cycle intervenes, on what date will that registration expire absent renewal?",
    "choices": {
      "A": "September 3 of the following year, exactly one year after effectiveness",
      "B": "December 31 of the year in which it became effective",
      "C": "Automatically it never expires once granted effective status",
      "D": "June 30 of the following year, matching the federal fiscal year"
    },
    "correct": "B",
    "explanation": "Under the USA, registrations of agents, broker-dealers, and investment advisers expire on December 31 each year regardless of the effective date, and must be renewed annually before that date to remain active."
  },
  {
    "id": 156,
    "question": "An investment adviser representative works for a federal covered adviser and maintains no place of business in State X, but has serviced 4 retail clients who are residents of State X over the past 12 months. Must this IAR register in State X?",
    "choices": {
      "A": "Yes, any client contact with a state resident requires registration regardless of client count",
      "B": "No, because with no place of business in the state and fewer than the typical 5-client de minimis threshold, the IAR is exempt from registration in that state",
      "C": "Yes, because federal covered adviser representatives must register in every state where a client resides",
      "D": "No, because IARs of federal covered advisers never need to register in any state"
    },
    "correct": "B",
    "explanation": "States generally cannot require registration of an IAR who has no place of business in the state and has had five or fewer retail clients there in the preceding 12 months (the de minimis exemption). With only 4 clients and no office, this IAR is exempt in State X."
  },
  {
    "id": 157,
    "question": "A newly formed advisory firm expects to reach $110 million in assets under management within 90 days and wants to know when it must register with the SEC as opposed to the states. Which statement is correct regarding federal covered adviser status?",
    "choices": {
      "A": "Advisers with between $100 million and $110 million in AUM must register with the SEC and are prohibited from state registration",
      "B": "Only advisers with more than $200 million must ever register federally",
      "C": "An adviser with at least $100 million but less than $110 million in AUM has a choice, but at $110 million or more it generally must register with the SEC and is preempted from state registration as a federal covered adviser",
      "D": "AUM thresholds are irrelevant; registration is based solely on number of clients"
    },
    "correct": "C",
    "explanation": "Advisers with AUM between $100 million and $110 million may choose SEC or state registration (a buffer to avoid flip-flopping), but once AUM reaches $110 million, SEC registration is generally mandatory, making the firm a federal covered adviser exempt from state registration (though notice filings may still be required)."
  },
  {
    "id": 158,
    "question": "A federal covered adviser has clients in State A, State B, and State C, and maintains its only office in State A. Under the Uniform Securities Act's notice filing provisions, what is State A entitled to require?",
    "choices": {
      "A": "Full substantive registration review of the adviser's business practices before permitting operation",
      "B": "Nothing at all, since federal covered advisers are entirely exempt from any state involvement",
      "C": "A notice filing consisting of copies of documents filed with the SEC (i.e., Form ADV) along with any required filing fee",
      "D": "A separate state-specific Form ADV completed from scratch, distinct from the SEC filing"
    },
    "correct": "C",
    "explanation": "States cannot require substantive registration of federal covered advisers, but they may require notice filings — essentially copies of the SEC-filed Form ADV — plus payment of a filing fee, in states where the adviser has a sufficient business presence."
  },
  {
    "id": 159,
    "question": "A corporation issues commercial paper with a 200-day maturity, a minimum denomination of $50,000, and a rating in one of the three highest rating categories from a nationally recognized rating organization. How is this instrument treated under the Uniform Securities Act?",
    "choices": {
      "A": "It is a nonexempt security requiring full state registration before sale",
      "B": "It qualifies as an exempt security because it meets the maturity, denomination, and top-tier rating requirements for commercial paper",
      "C": "It is exempt only if sold exclusively to institutional buyers, regardless of its rating or maturity",
      "D": "It is treated as an exempt transaction rather than an exempt security"
    },
    "correct": "B",
    "explanation": "Commercial paper is an exempt security under the USA when it has a maturity of 270 days or less, is issued in denominations of at least $50,000 (or historically $50,000 minimum), and carries one of the three highest ratings from a nationally recognized statistical rating organization."
  },
  {
    "id": 160,
    "question": "An agent facilitates a single, isolated, non-issuer transaction in an unregistered security at the unsolicited request of a long-standing client who called specifically wanting to sell a small legacy holding. Which characterization best fits this transaction under the USA?",
    "choices": {
      "A": "It is a nonexempt transaction requiring the security itself to be registered before the sale can proceed",
      "B": "It is likely an exempt transaction, since isolated nonissuer transactions are excluded from the registration requirements applicable to the security",
      "C": "It is illegal because unregistered securities may never be sold under any circumstances",
      "D": "It requires the issuer to file a registration statement retroactively within 15 days"
    },
    "correct": "B",
    "explanation": "The USA exempts isolated nonissuer transactions from registration requirements for the security involved. This exemption applies to occasional, non-repetitive sales by persons other than the issuer, distinguishing it from ongoing distribution activity."
  },
  {
    "id": 161,
    "question": "An investment adviser's only authority over client accounts is the ability to deduct advisory fees directly from custodial accounts held at an independent qualified custodian, pursuant to written client authorization. Statements are sent directly from the custodian to clients. Does this arrangement trigger the full custody rule requirements, including the annual surprise examination?",
    "choices": {
      "A": "Yes, any fee-deduction authority automatically triggers a mandatory annual surprise examination with no exceptions",
      "B": "No, fee-deduction authority alone falls under a specific exception to the surprise examination requirement, provided the adviser meets the rule's conditions (independent custodian, client notice, and account statements)",
      "C": "No, because deducting fees never constitutes custody under any circumstances",
      "D": "Yes, but only if the adviser also has check-writing authority over the account"
    },
    "correct": "B",
    "explanation": "Under Advisers Act Rule 206(4)-2, an adviser with authority limited to deducting fees from a client's account at a qualified custodian is deemed to have custody, but is exempted from the annual surprise exam requirement if certain conditions are met (independent custodian, direct client statements, and proper written authorization)."
  },
  {
    "id": 162,
    "question": "A state-registered investment adviser has discretionary trading authority over several client accounts and periodically withdraws funds from those accounts to pay unrelated personal expenses of the adviser's principal, without client authorization. What custody-related consequence follows from this conduct?",
    "choices": {
      "A": "None, because discretionary authority over trading automatically includes authority over cash withdrawals",
      "B": "The adviser has custody and, because the withdrawals are unauthorized, has likely also committed a fraudulent or dishonest act under NASAA's Statement of Policy, well beyond mere custody rule compliance issues",
      "C": "This is permissible as long as the adviser discloses it in Form ADV Part 2 within 30 days",
      "D": "It is acceptable if the client accounts are later reimbursed with interest"
    },
    "correct": "B",
    "explanation": "Unauthorized withdrawal of client funds for personal use is both a custody trigger and a clear violation of fiduciary duty and NASAA's Statement of Policy on dishonest or unethical practices; disclosure or later reimbursement does not cure the underlying misappropriation."
  },
  {
    "id": 163,
    "question": "A prospective advisory client signs an investment management agreement on June 1. When must the adviser deliver the Form ADV Part 2A brochure (and any required brochure supplement) to satisfy the delivery requirement under the Advisers Act's brochure rule?",
    "choices": {
      "A": "The brochure may be delivered any time within 90 days after the contract is signed",
      "B": "The brochure must be delivered at least 48 hours before entering into the contract, or the client must be given a penalty-free right to terminate within 5 business days if delivered at signing",
      "C": "Delivery is only required if the client specifically requests a copy in writing",
      "D": "The brochure only needs to be posted on the adviser's website; no direct delivery is required"
    },
    "correct": "B",
    "explanation": "Rule 204-3 requires that the brochure (and brochure supplement) be delivered to a client before or at the time of entering into an advisory contract; if delivered at the time of contracting rather than 48 hours in advance, the client must be afforded a right to terminate without penalty within five business days."
  },
  {
    "id": 164,
    "question": "An adviser enters into a written agreement with an independent solicitor to refer prospective clients in exchange for a cash referral fee. Which additional requirement must be satisfied for this arrangement to comply with applicable solicitation rules?",
    "choices": {
      "A": "The solicitor must be a registered investment adviser representative regardless of the referral's nature",
      "B": "The solicitor must provide prospective clients with a separate written disclosure describing the solicitor's relationship to the adviser and the compensation arrangement, and the firm must retain records of the agreement and disclosures",
      "C": "No disclosure to the client is required as long as the solicitor is a licensed attorney or CPA",
      "D": "The referral fee must be paid entirely in securities rather than cash to avoid disclosure obligations"
    },
    "correct": "B",
    "explanation": "Cash solicitation arrangements require a written agreement between the adviser and solicitor, and the solicitor must give prospective clients a separate disclosure document describing the relationship and compensation; the adviser must retain records evidencing compliance."
  },
  {
    "id": 165,
    "question": "An issuer wants to raise $9 million using Rule 504 of Regulation D and also wants to use general advertising to reach retail investors nationwide. Which statement best describes the limitations the issuer faces?",
    "choices": {
      "A": "Rule 504 permits unrestricted general solicitation in all cases with no state-level constraints",
      "B": "General solicitation and advertising under Rule 504 are permitted only in limited circumstances (such as registering in a state requiring public filing and delivery of a disclosure document, or selling exclusively to accredited investors under state law); absent meeting such conditions, general solicitation is restricted and state blue-sky requirements still apply since Rule 504 lacks the broad federal preemption given to Rule 506",
      "C": "Rule 504 offerings are always exempt from all state securities registration requirements",
      "D": "Rule 504 caps the offering amount at $1 million, making a $9 million raise impossible under this rule"
    },
    "correct": "B",
    "explanation": "Rule 504 allows offerings up to a set dollar threshold (currently $10 million) but, unlike Rule 506, does not preempt state law; general solicitation is permitted only if the offering is registered in at least one state requiring a substantive disclosure document, or sold under a state exemption that permits general solicitation and restricts sales to accredited investors."
  },
  {
    "id": 166,
    "question": "An issuer conducting a Rule 506(c) offering plans to accept a purchaser's assertion of accredited investor status based solely on a check-the-box certification on a subscription document, with no supporting documentation requested. Does this satisfy the verification requirement?",
    "choices": {
      "A": "Yes, self-certification via a subscription document is always sufficient under Rule 506(c)",
      "B": "No, Rule 506(c) requires the issuer to take reasonable steps to verify accredited status using methods such as reviewing tax returns, W-2s, bank or brokerage statements, or obtaining written confirmation from a broker-dealer, registered investment adviser, attorney, or CPA",
      "C": "Yes, provided the purchaser is investing at least $100,000",
      "D": "No, because Rule 506(c) offerings can never rely on general solicitation regardless of verification"
    },
    "correct": "B",
    "explanation": "Rule 506(c) permits general solicitation but requires issuers to take reasonable steps to verify accredited investor status through objective, documentary methods; a mere self-certification checkbox does not meet this heightened verification standard."
  },
  {
    "id": 167,
    "question": "A Rule 506(b) offering under Regulation D completes its first sale of securities on March 10. By what date must the issuer file Form D with the SEC?",
    "choices": {
      "A": "March 25 (within 15 days after the first sale)",
      "B": "February 23 (15 days before the first sale)",
      "C": "April 10 (30 days after the first sale)",
      "D": "Form D filing is optional under Rule 506(b)"
    },
    "correct": "A",
    "explanation": "Regulation D requires issuers to file Form D with the SEC within 15 calendar days after the first sale of securities in the offering; this deadline applies to Rule 504 and Rule 506 offerings alike."
  },
  {
    "id": 168,
    "question": "An investment adviser representative tells a prospective client, 'This fund has never had a losing year and I can guarantee you'll never lose money investing with us.' Under the NASAA Statement of Policy on Unethical Business Practices of Investment Advisers, how should this statement be characterized?",
    "choices": {
      "A": "Acceptable, as long as the fund's historical performance supports the claim",
      "B": "A prohibited act, because guaranteeing a client against loss is considered a dishonest and unethical business practice regardless of past performance",
      "C": "Acceptable only if disclosed in writing within the advisory contract",
      "D": "Permissible if the guarantee is limited to a stated time period, such as one year"
    },
    "correct": "B",
    "explanation": "NASAA's Statement of Policy explicitly identifies guaranteeing a client against loss (or promising specific performance) as a dishonest and unethical business practice for investment advisers, irrespective of the fund's track record or any disclosure."
  },
  {
    "id": 169,
    "question": "An agent at a broker-dealer engages in frequent, excessive trading of a discretionary client's account, generating substantial commissions with no discernible investment rationale tied to the client's objectives. Which unethical practice does this conduct most directly describe?",
    "choices": {
      "A": "Front-running",
      "B": "Churning",
      "C": "Backdating",
      "D": "Free-riding"
    },
    "correct": "B",
    "explanation": "Churning is excessive trading in a client's account, disproportionate to the client's investment objectives, primarily to generate commissions for the agent; it is a violation under NASAA's Statement of Policy on Dishonest and Unethical Business Practices."
  },
  {
    "id": 170,
    "question": "An investment adviser representative learns from a corporate insider client that the client's company will announce disappointing earnings next week, and the IAR immediately sells short shares of the company's stock in a personal account before the news becomes public. Which violation has most clearly occurred?",
    "choices": {
      "A": "A simple suitability violation, since the trade was made in the IAR's own account rather than a client's",
      "B": "Insider trading, because the IAR traded on material, nonpublic information obtained through a client relationship in breach of a duty of trust or confidence",
      "C": "No violation, since the IAR did not disclose the information to any third party",
      "D": "A recordkeeping violation only, correctable by disclosing the trade on the next Form ADV amendment"
    },
    "correct": "B",
    "explanation": "Trading on material nonpublic information obtained through a position of trust (such as an advisory relationship with a corporate insider) constitutes illegal insider trading, regardless of whether the information was further disclosed to others."
  },
  {
    "id": 171,
    "question": "A broker-dealer's compliance department identifies a customer who makes multiple cash deposits of $9,500 each across several days, each just under the $10,000 currency transaction reporting threshold. What is this pattern most likely evidence of, and what is the firm's obligation?",
    "choices": {
      "A": "Normal customer behavior requiring no action since each deposit is below $10,000",
      "B": "Structuring to evade currency reporting requirements, obligating the firm to file a Suspicious Activity Report (SAR) with FinCEN and to keep the SAR's existence confidential from the customer",
      "C": "A minor recordkeeping issue that should be corrected by simply raising the customer's daily deposit limit",
      "D": "Grounds to immediately freeze the account and publicly report the customer to the customer's other financial institutions"
    },
    "correct": "B",
    "explanation": "Depositing amounts just under the $10,000 reporting threshold in a repeated pattern suggests structuring, an AML red flag requiring a SAR filing with FinCEN; SARs and their existence must be kept confidential and not disclosed to the customer."
  },
  {
    "id": 172,
    "question": "A broker-dealer's written AML compliance program has not been independently tested in over three years, though it does have designated compliance personnel and written procedures. Under the USA PATRIOT Act's AML program requirements, what is missing?",
    "choices": {
      "A": "Nothing; only three of the four required elements (compliance officer, procedures, and training) are mandated",
      "B": "The program is deficient because it lacks periodic independent testing, one of the four pillars required of an effective AML program (designated officer, written policies, training, and independent testing)",
      "C": "AML programs are not required for broker-dealers under the USA PATRIOT Act",
      "D": "Independent testing is only required for firms with more than $500 million in assets"
    },
    "correct": "B",
    "explanation": "The USA PATRIOT Act requires an AML program to include a designated compliance officer, written policies and procedures, ongoing employee training, and periodic independent testing; the absence of testing for three years is a significant deficiency."
  },
  {
    "id": 173,
    "question": "An investment adviser wants to accept a soft-dollar arrangement in which its execution costs on client trades are somewhat higher than the lowest available rate, in exchange for receiving proprietary research reports from the executing broker-dealer. Under Section 28(e) safe harbor principles, what must be true for this arrangement to be permissible?",
    "choices": {
      "A": "Nothing further; any research received via soft dollars is automatically covered regardless of cost or client benefit",
      "B": "The adviser must determine in good faith that the commissions paid are reasonable in relation to the value of brokerage and research services received, and the research must qualify as bona fide research or brokerage that benefits clients",
      "C": "The arrangement is permissible only if the adviser reimburses clients for the incremental commission cost at year end",
      "D": "Section 28(e) prohibits any commission rate above the lowest available rate under all circumstances"
    },
    "correct": "B",
    "explanation": "The Section 28(e) safe harbor permits advisers to pay more than the lowest commission rate in exchange for brokerage and research services, provided the adviser makes a good-faith determination that the commission is reasonable in light of the value of services received and the services qualify as bona fide research or execution benefiting clients."
  },
  {
    "id": 174,
    "question": "An adviser representative wants to make a $500 contribution to the campaign of a candidate for state treasurer who has influence over the selection of investment advisers for state pension assets, in a state where the adviser is registered. Under the SEC's pay-to-play rule, what is the likely consequence of this contribution?",
    "choices": {
      "A": "No restriction applies because the contribution is below $1,000",
      "B": "The adviser could be prohibited from providing compensated advisory services to that government entity for two years following the contribution, unless the contribution falls within a de minimis exception (e.g., under $350 for a candidate the contributor can vote for)",
      "C": "Political contributions by advisory personnel are entirely unregulated at the federal level",
      "D": "The two-year restriction applies only to contributions exceeding $10,000"
    },
    "correct": "B",
    "explanation": "Rule 206(4)-5 (the pay-to-play rule) generally triggers a two-year time out from receiving compensated advisory business from a government entity following a contribution by certain advisory personnel to an official who can influence adviser selection, subject to a de minimis exception (currently $350 if the contributor is entitled to vote for the candidate, $150 if not)."
  },
  {
    "id": 175,
    "question": "An investment adviser representative wants to accept a $150 gift of theater tickets from a mutual fund wholesaler as a token of appreciation for the business relationship. Under typical industry gift limits referenced in NASAA guidance and similar gift rules, how should this be evaluated?",
    "choices": {
      "A": "It is automatically prohibited because any gift from a product sponsor is banned outright",
      "B": "Modest gifts below a firm's established de minimis threshold are typically permissible if properly disclosed and logged, but the firm's specific policy and any applicable dollar limits govern whether this particular gift is acceptable",
      "C": "Gifts are unlimited in dollar value as long as they are non-cash items like tickets or merchandise",
      "D": "The gift is acceptable only if the wholesaler is a registered representative of a broker-dealer"
    },
    "correct": "B",
    "explanation": "Firms typically adopt gift and entertainment policies with de minimis thresholds and require logging of gifts received; the gift's acceptability must be evaluated against the specific firm policy, properly disclosed, and recorded to avoid conflicts of interest concerns."
  },
  {
    "id": 176,
    "question": "An agent registered in State A resigns from Broker-Dealer X and is immediately hired by Broker-Dealer Y, also in State A, on the same day. What is the status of the agent's registration during this transition?",
    "choices": {
      "A": "The agent's registration remains continuously effective automatically since there was no gap in employment",
      "B": "The agent's registration with Broker-Dealer X terminates upon leaving that firm, and a new registration application must be filed to associate the agent with Broker-Dealer Y before conducting securities business on Y's behalf",
      "C": "The agent may continue transacting business under the old registration for up to 30 days while paperwork is processed",
      "D": "No new filing is needed since the agent remains registered in the same state"
    },
    "correct": "B",
    "explanation": "Under the USA, an agent's registration is specific to the broker-dealer (or issuer) with which the agent is associated; termination of association with one firm ends that registration, and a new application must be filed and become effective before the agent can transact business on behalf of the new firm."
  },
  {
    "id": 177,
    "question": "An individual is employed solely to perform back-office clerical and administrative functions for a broker-dealer, with no contact with customers and no involvement in effecting securities transactions. Is this individual an agent under the Uniform Securities Act requiring registration?",
    "choices": {
      "A": "Yes, all employees of a broker-dealer must register as agents regardless of function",
      "B": "No, the USA's definition of agent excludes individuals whose functions are solely clerical or ministerial in nature",
      "C": "Yes, but only if the individual earns commission-based compensation",
      "D": "No, but only if the individual has a college degree in finance"
    },
    "correct": "B",
    "explanation": "The USA specifically excludes from the definition of agent individuals whose duties for a broker-dealer or issuer are solely clerical or ministerial, since such individuals do not effect or attempt to effect securities transactions with the public."
  },
  {
    "id": 178,
    "question": "A bank trust officer, acting in his capacity as an employee of a state-chartered bank, provides investment advice to trust beneficiaries as an incidental part of his banking duties without receiving separate compensation for the advice. Is the bank required to register as an investment adviser under the USA?",
    "choices": {
      "A": "Yes, any entity giving investment advice for a fee must register regardless of its banking charter",
      "B": "No, banks and bank holding companies are generally excluded from the definition of investment adviser under both the Advisers Act and the USA",
      "C": "Yes, but only the trust officer individually must register as an IAR",
      "D": "No, but only if the bank has less than $25 million in trust assets under management"
    },
    "correct": "B",
    "explanation": "Banks, savings institutions, and bank holding companies are excluded from the definition of investment adviser under both the federal Advisers Act and the Uniform Securities Act, reflecting their separate regulatory scheme under banking law."
  },
  {
    "id": 179,
    "question": "A publisher produces a subscription newsletter offering generic market commentary and broad economic analysis, with no advice tailored to any individual subscriber's specific portfolio or circumstances, and the publication is not timed to specific market events for trading advantage. Is the publisher an investment adviser under the Advisers Act?",
    "choices": {
      "A": "Yes, any publication providing securities-related opinions is automatically an investment adviser",
      "B": "No, the publisher's exclusion for bona fide publications of general and regular circulation applies because the newsletter is not tailored to individual client situations and not timed to specific market events",
      "C": "Yes, but only if the newsletter charges a subscription fee above $100 per year",
      "D": "No, but only if the newsletter is distributed exclusively in print rather than electronically"
    },
    "correct": "B",
    "explanation": "The Advisers Act excludes publishers of bona fide, general and regular circulation publications that do not provide advice tailored to individual client situations and are not issued to time specific market events; this newsletter fits that exclusion."
  },
  {
    "id": 180,
    "question": "A registered investment adviser terminates its business and deregisters with the SEC. Under Advisers Act recordkeeping requirements, for how long must the firm continue to preserve most required books and records after the termination of the advisory business?",
    "choices": {
      "A": "Records may be destroyed immediately upon deregistration since the firm no longer has clients",
      "B": "The general five-year retention requirement (two years in an easily accessible location) continues to apply, so records must still be preserved for the remainder of that period even after deregistration",
      "C": "Records must be retained permanently once a firm deregisters",
      "D": "Only records related to client complaints must be retained after deregistration"
    },
    "correct": "B",
    "explanation": "The Advisers Act's five-year recordkeeping requirement (with the first two years in an easily accessible place) does not terminate simply because a firm deregisters; records created while registered must still be preserved for the applicable retention period."
  },
  {
    "id": 181,
    "question": "An investment adviser's custody rule surprise examination reveals a material discrepancy between client account records and custodian statements. What is the independent public accountant's obligation upon discovering this material discrepancy?",
    "choices": {
      "A": "No obligation exists beyond noting it in the annual report filed with the adviser",
      "B": "The accountant must file a report with the SEC within one business day of finding the material discrepancy",
      "C": "The accountant may wait until the next annual examination cycle to report the discrepancy",
      "D": "The accountant should simply advise the adviser's compliance officer verbally with no further action required"
    },
    "correct": "B",
    "explanation": "Under the custody rule, an independent public accountant that finds a material discrepancy during a surprise examination must notify the SEC within one business day, and thereafter file a report describing the discrepancy."
  },
  {
    "id": 182,
    "question": "An adviser recommends a client establish an account with a specific broker-dealer with which the adviser has an undisclosed revenue-sharing agreement, resulting in the client paying higher commissions than at other available brokers offering comparable execution quality. What duty has the adviser most clearly breached?",
    "choices": {
      "A": "No duty was breached because clients are free to choose their own broker-dealer",
      "B": "The duty of best execution and the fiduciary duty to disclose material conflicts of interest, since the adviser steered the client to a costlier broker for its own undisclosed benefit",
      "C": "Only a technical Form ADV filing deadline was missed",
      "D": "A breach of the custody rule, since the adviser directed brokerage"
    },
    "correct": "B",
    "explanation": "Advisers with the ability to direct brokerage owe clients a duty of best execution and must disclose material conflicts, such as revenue-sharing that incentivizes recommending a costlier broker; failing to disclose this is a fiduciary breach."
  },
  {
    "id": 183,
    "question": "A federal covered adviser's Form ADV Part 1 discloses that one of its investment adviser representatives was subject to a state securities regulator's cease-and-desist order two years ago for unregistered sales activity. A prospective client asks whether this disqualifies the IAR from practicing. What is the most accurate response?",
    "choices": {
      "A": "The disciplinary history automatically and permanently bars the IAR from the securities industry",
      "B": "Disciplinary history does not automatically bar future registration or activity, but it must be disclosed on Form ADV and considered by regulators and clients in evaluating the IAR's fitness; regulators retain discretion to deny, suspend, or revoke registration based on such history",
      "C": "Disciplinary history older than one year need not be disclosed on Form ADV",
      "D": "Only felony convictions need be disclosed; regulatory cease-and-desist orders are exempt from disclosure"
    },
    "correct": "B",
    "explanation": "Disciplinary events, including administrative orders like cease-and-desist orders, must be disclosed on Form ADV; while such history is a factor administrators may weigh in denying, suspending, or revoking registration, it does not automatically create a permanent bar absent a statutory disqualification."
  },
  {
    "id": 184,
    "question": "A registered agent tells a client, without any reasonable basis, that a small unlisted company's stock is certain to double within six months, based solely on rumors the agent heard at a social gathering. Which NASAA-prohibited practice does this best represent?",
    "choices": {
      "A": "Unauthorized trading",
      "B": "Making unwarranted, unsubstantiated price predictions or guarantees regarding a security's performance",
      "C": "Commingling of funds",
      "D": "Failure to maintain net capital"
    },
    "correct": "B",
    "explanation": "Making predictions of specific and unwarranted price increases or guarantees about a security's future performance without a reasonable basis is identified as a dishonest and unethical practice under NASAA's Statement of Policy."
  },
  {
    "id": 185,
    "question": "An agent recommends that a client, in need of quick cash, take out a personal loan directly from the agent rather than from a bank, offering favorable terms. The client is not a bank, broker-dealer, or affiliate of the agent's firm. Under the USA's borrowing restrictions, is this arrangement permissible?",
    "choices": {
      "A": "Yes, agents may freely lend to or borrow from any client as long as terms are documented in writing",
      "B": "No, agents generally may not lend money to clients (or borrow from them) unless the client is in the business of lending money or is an affiliate of the broker-dealer, subject to firm policies allowing such arrangements under specific conditions",
      "C": "Yes, but only if the loan amount is under $5,000",
      "D": "No, but only if the client is deemed a vulnerable adult under state law"
    },
    "correct": "B",
    "explanation": "NASAA's Statement of Policy identifies borrowing money from or lending money to a client as a dishonest and unethical practice unless the client is a financial institution in the business of lending or is an affiliate of the broker-dealer/adviser, absent adequate firm-approved procedures."
  },
  {
    "id": 186,
    "question": "Two agents at the same broker-dealer arrange to split commissions on a joint account they both service. Which condition must be satisfied for this commission-sharing arrangement to be considered acceptable under the USA?",
    "choices": {
      "A": "Commission sharing between agents at the same firm is never permitted under any circumstances",
      "B": "The arrangement is permissible as long as both agents are properly registered and the firm approves the arrangement, since sharing commissions between registered agents at the same broker-dealer is generally allowed",
      "C": "Commission sharing is permitted only between agents registered in different states",
      "D": "The client must independently negotiate and pay each agent's share directly to be lawful"
    },
    "correct": "B",
    "explanation": "The USA generally permits agents to share commissions with other agents registered with the same (or an affiliated) broker-dealer or investment adviser, provided the arrangement is disclosed and consistent with firm policy; sharing with unregistered persons is prohibited."
  },
  {
    "id": 187,
    "question": "An IAR receives a check from a client made payable to a third-party mutual fund custodian rather than to the adviser or the IAR personally, and the IAR simply forwards the check unaltered to the fund within one business day. Does this create custody under the USA?",
    "choices": {
      "A": "Yes, receiving any check from a client always constitutes custody regardless of how it is handled",
      "B": "No, an adviser that inadvertently receives a check drawn payable to a third party and forwards it to that third party within a reasonable time (typically within a few business days) is generally not deemed to have custody",
      "C": "Yes, because only checks payable to the adviser itself avoid custody treatment",
      "D": "No, but only if the IAR first deposits the check into the firm's operating account before forwarding it"
    },
    "correct": "B",
    "explanation": "Under guidance addressing inadvertent receipt of client funds, an adviser that promptly forwards a check made payable to an unrelated third party (not the adviser) generally avoids being deemed to have custody of client assets, provided it is forwarded within a short, defined period."
  },
  {
    "id": 188,
    "question": "A federal covered investment adviser's principal office is located in State A, and the adviser also has a small satellite office in State B staffed by one IAR who meets with local clients. Under the USA, which state(s) may require notice filing from this federal covered adviser?",
    "choices": {
      "A": "Only the SEC has any filing authority; no state may require anything",
      "B": "Both State A and State B may require a notice filing (copies of the Form ADV plus fee) since the adviser has an office and conducts business in each",
      "C": "Only State A, the principal office location, may require any state filing",
      "D": "Only State B, since that is where client-facing activity occurs"
    },
    "correct": "B",
    "explanation": "States in which a federal covered adviser has a place of business or a specified level of client activity may require notice filings (copies of SEC-filed documents and a fee); since the adviser maintains offices in both State A and State B, both states may impose this requirement."
  },
  {
    "id": 189,
    "question": "An issuer conducting an intrastate offering wants to rely on a state's exemption from registration for that specific transaction. Which condition is essential for this exemption to remain valid?",
    "choices": {
      "A": "All offerees and purchasers must be residents of the single state in which the issuer is organized and does business, with no offer or sale to any out-of-state resident",
      "B": "The offering may include up to 10% out-of-state investors without losing the exemption",
      "C": "The exemption applies regardless of purchaser residency as long as the issuer's headquarters is in that state",
      "D": "Intrastate exemptions apply automatically to any offering under $5 million"
    },
    "correct": "A",
    "explanation": "Intrastate exemptions (both federal Rule 147/147A and analogous state exemptions) require that all offerees and purchasers be residents of the state in which the issuer is organized, doing business, and offering securities; sales to even a single out-of-state resident can jeopardize the exemption."
  },
  {
    "id": 190,
    "question": "An investment adviser's Form ADV Part 2A brochure fails to disclose that the firm's chief compliance officer also serves as a paid director of a company frequently recommended as an investment to advisory clients. Which of the following best describes the compliance failure?",
    "choices": {
      "A": "No failure occurred because directorships are personal matters unrelated to advisory disclosure obligations",
      "B": "A material conflict of interest disclosure failure, since clients need to know about compensation arrangements or affiliations that could bias investment recommendations",
      "C": "A minor administrative oversight correctable only at the next five-year Form ADV renewal",
      "D": "A custody rule violation because the CCO holds an outside directorship"
    },
    "correct": "B",
    "explanation": "Form ADV Part 2A must disclose material conflicts of interest, including outside business activities and affiliations of key personnel (like the CCO) that could influence investment recommendations; omitting this is a material disclosure failure, not a custody issue."
  },
  {
    "id": 191,
    "question": "A state securities Administrator seeks to deny an application for registration as an investment adviser based on the applicant's felony conviction for embezzlement eight years ago. Under the USA, is this a permissible basis for denial?",
    "choices": {
      "A": "No, convictions older than five years can never be considered",
      "B": "Yes, a felony conviction involving fraud, embezzlement, or a similar offense within the preceding ten years is a statutory basis on which an Administrator may deny, suspend, or revoke a registration",
      "C": "No, only convictions related directly to securities fraud can be considered regardless of timing",
      "D": "Yes, but only if the conviction occurred in the same state where the application was filed"
    },
    "correct": "B",
    "explanation": "The USA allows an Administrator to deny, suspend, or revoke registration based on a felony (or certain misdemeanor) conviction involving securities, money, or similar dishonesty-related offenses within the preceding ten years; an eight-year-old embezzlement felony conviction falls within that window."
  },
  {
    "id": 192,
    "question": "An investment adviser representative changes his home address but continues working for the same federal covered adviser in the same state. Under the USA, what is the IAR's obligation regarding this address change?",
    "choices": {
      "A": "No filing obligation exists since the IAR's registration is with the firm, not tied to a personal address",
      "B": "The IAR (or the firm on the IAR's behalf) must promptly amend the registration information, typically through the Central Registration Depository (CRD) system, to reflect material changes such as a new address",
      "C": "The address change must be filed only if it also changes the state of residence",
      "D": "Address changes never need to be reported unless requested by the Administrator during an examination"
    },
    "correct": "B",
    "explanation": "Registered persons and their firms must promptly update material changes to registration information, including address changes, generally through the CRD/IARD system, to keep records current for regulatory purposes."
  },
  {
    "id": 193,
    "question": "A state Administrator wants to require a newly registering investment adviser to post a surety bond and maintain minimum net worth as conditions of registration. Under the USA, is this permissible?",
    "choices": {
      "A": "No, states are prohibited from imposing any financial responsibility requirements on state-registered advisers",
      "B": "Yes, states may impose minimum financial requirements (net worth and/or surety bond) on state-registered investment advisers, particularly those with custody or discretionary authority, as authorized under the USA",
      "C": "Yes, but only for advisers with more than 100 clients",
      "D": "No, financial responsibility requirements apply only to broker-dealers, not advisers"
    },
    "correct": "B",
    "explanation": "The USA authorizes states to impose minimum financial requirements, including net worth and surety bond requirements, on state-registered investment advisers, often with heightened requirements for advisers that have custody or discretionary authority over client funds."
  },
  {
    "id": 194,
    "question": "A broker-dealer's registered agent recommends a variable annuity to a 70-year-old client with modest assets and a short time horizon, without adequately considering surrender charges, the annuity's long-term nature, or the client's liquidity needs. The recommendation generates a substantial commission for the agent. Which standard has likely been violated?",
    "choices": {
      "A": "No standard was violated since annuities are always suitable for retirees",
      "B": "The suitability standard, because the recommendation failed to reasonably consider the client's investment profile, including age, time horizon, liquidity needs, and the product's illiquid features and costs",
      "C": "Only state insurance law was implicated, with no securities law relevance",
      "D": "The custody rule, since annuities involve holding client funds"
    },
    "correct": "B",
    "explanation": "Recommending a variable annuity without reasonably considering the client's age, liquidity needs, time horizon, and the product's surrender charges and illiquidity is a suitability violation; broker-dealer agents must have a reasonable basis to believe a recommendation is suitable for the specific customer."
  },
  {
    "id": 195,
    "question": "An adviser's marketing materials state the firm's strategy 'has outperformed the S&P 500 in 9 of the last 10 years,' but the calculation excludes two large accounts that underperformed during that period, without disclosing this exclusion. Under advertising rule principles, what is the problem with this claim?",
    "choices": {
      "A": "There is no problem because advisers may select any subset of accounts to showcase favorable results",
      "B": "The claim is potentially misleading because selectively excluding underperforming accounts (cherry-picking) without disclosure distorts the true performance picture presented to prospective clients",
      "C": "The claim is acceptable as long as the S&P 500 benchmark is clearly named",
      "D": "The claim is fine because advertising rules only apply to specific numeric return figures, not comparative statements"
    },
    "correct": "B",
    "explanation": "Selectively excluding unfavorable accounts or results (cherry-picking) to present a curated performance picture, without disclosing the methodology and exclusions, is misleading and violates fair and accurate advertising principles under the marketing/advertising rule."
  },
  {
    "id": 196,
    "question": "An adviser is asked by a client to sign a discretionary trading authorization that also grants the adviser the power to withdraw funds from the account for the adviser's own benefit under vague future circumstances. What should the adviser's compliance function require before allowing this authorization to take effect?",
    "choices": {
      "A": "Nothing further, since the client voluntarily offered the broader authorization",
      "B": "The compliance function should reject or narrow the authorization to standard investment discretion only, since granting the adviser power to withdraw funds for its own benefit is inappropriate, creates custody issues, and raises serious conflict-of-interest and fraud concerns",
      "C": "The authorization should be accepted as long as it is notarized",
      "D": "The authorization is fine provided the adviser discloses it only in the annual Form ADV update"
    },
    "correct": "B",
    "explanation": "Granting an adviser authority to withdraw client funds for the adviser's own benefit is inappropriate, would constitute custody, and raises serious fraud and conflict-of-interest concerns; compliance should reject or limit such authorization to standard, client-benefiting discretionary trading power."
  },
  {
    "id": 197,
    "question": "A firm's investment adviser representative recommends that an elderly client with diminished cognitive capacity liquidate a stable annuity to invest in a speculative private placement offered by the IAR's brother-in-law, without involving any family member or trusted contact despite the client's evident confusion during the meeting. Which NASAA model act protection is most directly implicated?",
    "choices": {
      "A": "The state's Blue Sky exemption provisions for isolated transactions",
      "B": "Provisions addressing financial exploitation of vulnerable/elderly clients, which may authorize or require reporting to state agencies or law enforcement and permit delaying disbursements when exploitation is suspected",
      "C": "The federal covered adviser notice filing requirement",
      "D": "The de minimis registration exemption for IARs"
    },
    "correct": "B",
    "explanation": "NASAA's model act to protect vulnerable adults from financial exploitation authorizes (or in some states requires) reporting suspected exploitation to state securities regulators and adult protective services, and may permit delaying disbursements while the situation is investigated."
  },
  {
    "id": 198,
    "question": "A registered investment adviser wants to charge a performance-based fee (a share of capital gains/appreciation) to a retail client with a $500,000 account and no other qualifying characteristics. Under the Advisers Act's performance fee rule, is this permissible?",
    "choices": {
      "A": "Yes, performance fees are permitted for any client regardless of net worth or assets under management",
      "B": "Generally no; performance fees are restricted to 'qualified clients' meeting specified net worth or AUM-with-the-adviser thresholds, and this client does not clearly meet those thresholds based on the facts given",
      "C": "Yes, but only if the fee is capped at 1% of assets annually",
      "D": "No, performance fees are banned entirely under the Advisers Act"
    },
    "correct": "B",
    "explanation": "Rule 205-3 under the Advisers Act restricts performance-based compensation arrangements to 'qualified clients' who meet specified net worth (excluding primary residence) or assets-under-management-with-the-adviser thresholds; absent evidence the client qualifies, charging a performance fee would violate the rule."
  },
  {
    "id": 199,
    "question": "A registered agent for a broker-dealer wants to also work part-time as an independent life insurance agent selling fixed annuities, unrelated to the broker-dealer's business. Under the USA, what is the agent's obligation regarding this outside business activity?",
    "choices": {
      "A": "No disclosure or approval is needed since fixed annuities are insurance products, not securities",
      "B": "The agent generally must disclose the outside business activity to, and often obtain approval from, the employing broker-dealer, since firms must supervise outside activities that could create conflicts or investor confusion",
      "C": "The agent must resign from the broker-dealer before engaging in any outside business activity",
      "D": "Outside business activities never require any notification under state or firm rules"
    },
    "correct": "B",
    "explanation": "Broker-dealers must supervise their registered persons' outside business activities, including insurance sales, and typically require prior written notice and approval to identify and manage potential conflicts of interest or customer confusion, even for non-security products like fixed annuities."
  },
  {
    "id": 200,
    "question": "An investment adviser wants to disclose in its Form ADV that it 'typically' takes custody of client assets due to fee-deduction authority, but has decided not to undergo an annual surprise examination, believing the exception for fee-deduction-only custody applies. Which additional fact would disqualify the adviser from relying on that exception?",
    "choices": {
      "A": "The adviser also has the ability, via standing letter of authority, to move client funds to third-party accounts not owned by the client",
      "B": "The adviser uses a qualified custodian to hold the assets",
      "C": "The adviser sends account statements to clients quarterly instead of monthly",
      "D": "The adviser charges an asset-based fee rather than a flat fee"
    },
    "correct": "A",
    "explanation": "The narrow exception from the surprise exam requirement applies only when the adviser's sole custody-triggering authority is fee deduction from accounts at a qualified custodian; if the adviser also has authority to move funds to third-party accounts (not the client's own accounts), this broader custody triggers the full surprise examination requirement."
  },
  {
    "id": 201,
    "question": "A client's advisory agreement contains a clause stating that the client waives any right to sue the adviser for violations of state or federal securities laws, in exchange for a reduced advisory fee. Under the USA and Advisers Act principles, how is this clause treated?",
    "choices": {
      "A": "The clause is fully enforceable since the client agreed to it in exchange for consideration",
      "B": "Such a waiver of the client's right to legal recourse for securities law violations is void as a matter of public policy and unenforceable, regardless of any fee concession offered",
      "C": "The clause is enforceable only if reviewed by an independent attorney representing the client",
      "D": "The clause is valid but only limits claims to arbitration rather than eliminating them"
    },
    "correct": "B",
    "explanation": "Provisions purporting to waive a client's rights under securities laws (sometimes called 'hedge clauses') are generally void and unenforceable as contrary to public policy; advisers cannot contract away statutory investor protections, even with a fee incentive."
  },
  {
    "id": 202,
    "question": "An agent for a broker-dealer registered only in State A receives an unsolicited phone call from an existing client who is temporarily vacationing in State B (where neither the agent nor broker-dealer is registered) and asks the agent to execute a trade. Is the agent permitted to execute this trade?",
    "choices": {
      "A": "No, the agent may never transact business with a client physically located in an unregistered state under any circumstances",
      "B": "Yes, many states provide an exemption allowing an out-of-state agent to effect an unsolicited transaction for an existing client who is temporarily present in the state, without triggering registration in that state",
      "C": "Yes, but only if the client permanently relocates to State B within 30 days",
      "D": "No, the broker-dealer must register in State B before any communication with the client while they are there"
    },
    "correct": "B",
    "explanation": "Many states follow an exemption (modeled on NASAA guidance) permitting an agent to service an existing client who is temporarily in a state where the agent is not registered, provided the transaction is unsolicited by the agent; this snowbird/traveling client exemption avoids requiring registration for brief, incidental presence."
  },
  {
    "id": 203,
    "question": "A broker-dealer's compliance department discovers that an agent has been using a personal, unmonitored text messaging app to communicate with clients about specific trade recommendations, bypassing the firm's required electronic communication archiving system. What primary compliance obligation has been violated?",
    "choices": {
      "A": "No violation occurred since text messages are informal and not considered official communications",
      "B": "The firm's (and agent's) recordkeeping obligations, since business-related communications with clients, including those about securities recommendations, must be captured, retained, and supervised regardless of the medium used",
      "C": "Only a minor IT policy violation with no securities law implications",
      "D": "A violation of the custody rule, since electronic messages may reference account balances"
    },
    "correct": "B",
    "explanation": "Broker-dealers and advisers must retain and supervise business communications related to securities recommendations and transactions; using unmonitored, unarchived personal messaging apps to conduct such communications circumvents required recordkeeping and supervisory obligations."
  },
  {
    "id": 204,
    "question": "An adviser is preparing to launch a new advisory service using an automated algorithm (a robo-advisory model) with minimal human interaction. Under fiduciary principles, what disclosure obligation applies to this automated advice model?",
    "choices": {
      "A": "None, because automated algorithms are not subject to fiduciary duty since no human adviser directly interacts with the client",
      "B": "The firm must still disclose material facts about the service, including the algorithm's limitations, conflicts of interest (e.g., if it favors proprietary products), and the extent of human review, since the fiduciary duty to disclose applies regardless of the advice delivery mechanism",
      "C": "Disclosure is required only if the algorithm charges a fee higher than 1% of assets",
      "D": "Robo-advisers are exempt from Form ADV filing requirements entirely"
    },
    "correct": "B",
    "explanation": "Even automated investment advice platforms are subject to the Advisers Act's fiduciary duty; firms must disclose material information about the algorithm's assumptions, limitations, conflicts (such as bias toward proprietary funds), and any human involvement, consistent with full and fair disclosure obligations."
  },
  {
    "id": 205,
    "question": "A private fund adviser relies on the accredited investor exemption for a Rule 506(b) offering but later discovers that one investor who was included and represented as accredited does not actually meet any of the accredited investor definitions, though the adviser reasonably believed otherwise after a good-faith review of submitted documentation. What is the most likely consequence?",
    "choices": {
      "A": "The exemption is automatically and irreparably lost for the entire offering with no possible defense",
      "B": "The issuer may still be able to preserve the exemption if it reasonably believed, after reasonable inquiry, that the investor was accredited, since Rule 506(b) permits a reasonable belief standard rather than requiring absolute certainty",
      "C": "The offering must be immediately registered retroactively with the SEC",
      "D": "No consequence follows since Rule 506(b) does not require any verification of accredited status"
    },
    "correct": "B",
    "explanation": "Under Rule 506(b) (unlike 506(c)'s stricter verification standard), an issuer may rely on a reasonable belief, based on reasonable steps and information obtained, that a purchaser is accredited; a good-faith, reasonable determination that later proves mistaken does not necessarily destroy the exemption."
  },
  {
    "id": 206,
    "question": "A state-registered investment adviser wants to advertise testimonials from satisfied clients on its website to attract new business. Under the current marketing rule framework, what conditions must be met for this to be permissible?",
    "choices": {
      "A": "Testimonials are absolutely prohibited under all circumstances and can never be used in advisory marketing",
      "B": "Testimonials may be used if the adviser provides required disclosures (e.g., whether compensation was provided, any material conflicts of interest, and clear and prominent disclosure of these facts) and complies with applicable oversight and recordkeeping requirements",
      "C": "Testimonials can be used freely with no disclosure as long as they are genuine statements from real clients",
      "D": "Testimonials are permitted only from clients who have used the adviser's services for at least ten years"
    },
    "correct": "B",
    "explanation": "The Advisers Act marketing rule (Rule 206(4)-1) permits testimonials and endorsements in advertisements, subject to specific disclosure requirements (compensation, conflicts of interest, whether the person is a client) and related oversight, recordkeeping, and, in some cases, written agreement requirements."
  },
  {
    "id": 207,
    "question": "An investment adviser representative's client wants to name the IAR as a co-trustee alongside the client on the client's revocable living trust in order to facilitate investment decisions. What concern should the IAR's supervising principal raise about this arrangement?",
    "choices": {
      "A": "None, since serving as co-trustee is purely a estate-planning matter outside securities regulation",
      "B": "Serving as a trustee (with control over trust assets) likely creates custody of client funds/securities under the custody rule and raises significant conflict-of-interest concerns that should be reviewed and, if permitted, properly disclosed and structured with appropriate safeguards",
      "C": "The arrangement is only a concern if the IAR is also the trust's sole beneficiary",
      "D": "Trustee arrangements are always prohibited outright for any registered person"
    },
    "correct": "B",
    "explanation": "An IAR acting as trustee (or co-trustee) with authority over client assets generally creates custody under the Advisers Act/USA custody rules and presents a significant conflict of interest; firms should carefully review, disclose, and potentially restrict such arrangements, including considering surprise examination requirements."
  },
  {
    "id": 208,
    "question": "A registered agent solicits an order to purchase securities in a company that has not filed a registration statement in the state and does not qualify for any exemption. The agent claims she did not know the security was unregistered because the sales manager assured her it was fine to sell. What is the most likely regulatory consequence for the agent?",
    "choices": {
      "A": "None, because good-faith reliance on a supervisor's assurance is a complete defense to any securities law violation",
      "B": "The agent may still be held liable for selling unregistered, non-exempt securities, since lack of personal knowledge or reliance on a supervisor's assurance is generally not a complete defense to a strict registration violation, though it may be a mitigating factor in enforcement",
      "C": "Only the sales manager can be held liable; agents are never responsible for registration status",
      "D": "The transaction is automatically voidable by the agent with no other consequence"
    },
    "correct": "B",
    "explanation": "Selling unregistered, non-exempt securities is a violation of the USA's registration requirements; while good-faith reliance on a supervisor may be considered in assessing culpability or sanctions, it typically does not provide a complete defense against liability for the underlying registration violation."
  },
  {
    "id": 209,
    "question": "A federal covered adviser wants to charge advisory fees one full year in advance for a new client relationship, collecting $1,200 upfront for the coming year's services. Under Advisers Act principles regarding prepaid fees, what is required?",
    "choices": {
      "A": "Prepayment of any amount for any period is entirely prohibited under the Advisers Act",
      "B": "Advisers that require prepayment of fees six months or more in advance, exceeding a specified dollar threshold, must include a balance sheet in their Form ADV Part 2 disclosure, and clients are generally entitled to a pro rata refund upon early termination",
      "C": "No special disclosure or refund obligation applies to prepaid fees under any circumstances",
      "D": "Prepaid fees are permitted only for clients with more than $1 million in assets under management"
    },
    "correct": "B",
    "explanation": "Advisers charging substantial fees more than six months in advance (over a specified dollar threshold, historically $1,200) must include a balance sheet in their brochure; regardless of prepayment period, clients terminating early are generally entitled to a pro rata refund of unearned fees under fiduciary principles."
  },
  {
    "id": 210,
    "question": "An investment adviser's compliance manual requires an annual review of its written policies and procedures under Rule 206(4)-7 (the compliance program rule). The firm skipped this review for two consecutive years due to staffing shortages. What is the primary regulatory concern with this lapse?",
    "choices": {
      "A": "No concern exists as long as no client complaints were received during that period",
      "B": "The firm violated its obligation to conduct at least an annual review of the adequacy of its compliance policies and procedures and their effectiveness, which is a core requirement under Rule 206(4)-7 regardless of complaint history",
      "C": "The lapse is only a concern if the adviser has more than $500 million in AUM",
      "D": "Annual reviews are recommended but not legally required under the compliance rule"
    },
    "correct": "B",
    "explanation": "Rule 206(4)-7 requires SEC-registered advisers to review, no less frequently than annually, the adequacy of their compliance policies and procedures and the effectiveness of their implementation; skipping this review for two years is a violation regardless of whether client complaints arose."
  },
  {
    "id": 211,
    "question": "A limited partnership interest in a real estate venture is offered only to the general partner's immediate family members and a handful of close personal friends, with no general advertising, and involves fewer than 10 total purchasers over a 12-month period, all of whom have a preexisting personal relationship with the issuer. How would this most likely be characterized under the Uniform Securities Act?",
    "choices": {
      "A": "A nonexempt transaction requiring full securities registration because limited partnership interests are always considered public offerings",
      "B": "Likely an exempt transaction under the USA's limited offering exemption for offers to a small number of persons within a 12-month period without general advertising",
      "C": "Automatically exempt only if the general partner personally guarantees the investment",
      "D": "Ineligible for any transaction exemption because real estate limited partnerships are excluded from all USA exemptions"
    },
    "correct": "B",
    "explanation": "The USA provides a limited offering exemption for transactions involving offers to a specified small number of persons (commonly up to 10) within a 12-month period, without general advertising or commission payments to persons other than registered agents/broker-dealers, which fits this closely-held family and friends offering."
  },
  {
    "id": 212,
    "question": "An investment adviser representative's firm requires all discretionary account agreements to be reviewed and approved by the firm's principal before trading begins. An IAR begins exercising discretion over a new client's account for two weeks before obtaining the required principal approval, though the trades placed were suitable and profitable. What is the compliance concern here?",
    "choices": {
      "A": "None, because the trades were profitable and suitable, curing any procedural lapse",
      "B": "The IAR violated the firm's supervisory procedures by exercising discretionary authority without the required prior principal approval, which is a supervisory and books-and-records concern independent of whether the trades ultimately performed well",
      "C": "This is acceptable as long as the client verbally authorized each individual trade",
      "D": "No concern exists since discretionary authority does not require any internal approval process"
    },
    "correct": "B",
    "explanation": "Firms typically require documented approval before discretionary trading begins as part of required supervisory procedures; exercising discretion without that approval is a violation of internal controls and recordkeeping obligations, regardless of whether the underlying trades happened to be profitable."
  },
  {
    "id": 213,
    "question": "A client complains to a state Administrator that her investment adviser churned her account and misrepresented risk. During the ensuing investigation, the Administrator requests the adviser's complete client file, including notes and correspondence. The adviser refuses, citing attorney-client privilege for all documents. Is this refusal appropriate?",
    "choices": {
      "A": "Yes, all client-related documents are automatically privileged and protected from any regulatory request",
      "B": "No, ordinary business records, client correspondence, and account documentation are generally not protected by attorney-client privilege and must be produced in response to a lawful regulatory investigation; only genuine legal advice communications with counsel may be privileged",
      "C": "Yes, but only if the adviser is also a licensed attorney",
      "D": "No, but only records older than one year must be produced"
    },
    "correct": "B",
    "explanation": "Attorney-client privilege protects communications made for the purpose of seeking or providing legal advice, not ordinary business records or client files; advisers must generally produce required books and records in response to a lawful Administrator investigation, as broad privilege claims over routine files are not valid."
  },
  {
    "id": 214,
    "question": "A 401(k) plan sponsor selects a plan recordkeeper that is affiliated with the plan's investment adviser and receives revenue-sharing payments from certain mutual funds included in the plan lineup, without disclosing this arrangement to plan participants. Under ERISA fiduciary principles, what is the concern?",
    "choices": {
      "A": "No concern exists since revenue sharing is a normal, universally permitted industry practice requiring no disclosure",
      "B": "The undisclosed affiliate relationship and revenue-sharing arrangement creates a conflict of interest that must be disclosed and evaluated for reasonableness under ERISA's fiduciary duties of loyalty and prudence; failure to disclose and monitor such conflicts can constitute a breach of fiduciary duty",
      "C": "ERISA does not apply to fee arrangements, only to investment selection",
      "D": "The concern only matters if the plan has fewer than 100 participants"
    },
    "correct": "B",
    "explanation": "ERISA fiduciaries must act prudently and loyally, which includes disclosing and carefully evaluating conflicts of interest such as affiliate relationships and revenue-sharing arrangements that could compromise objectivity in selecting recordkeepers and investment options for the plan."
  },
  {
    "id": 215,
    "question": "A broker-dealer wants to open a new branch office in a state where it is already registered as a broker-dealer, but none of its currently registered agents will be assigned there; instead, existing back-office staff will handle only administrative tasks with no client contact. Is separate agent registration required for that branch's administrative staff?",
    "choices": {
      "A": "Yes, anyone working at a broker-dealer branch office must register as an agent regardless of function",
      "B": "No, because agent registration is required only for individuals who effect or attempt to effect securities transactions with the public; purely clerical/administrative staff without client contact fall outside the definition of agent",
      "C": "Yes, but only if the branch office is physically separate from the main office",
      "D": "No, but the branch office itself must independently register as a broker-dealer"
    },
    "correct": "B",
    "explanation": "The USA's definition of agent excludes individuals whose functions are solely clerical or ministerial; administrative staff who do not effect or solicit securities transactions with customers do not need to register as agents, even if working at a registered branch office."
  },
  {
    "id": 216,
    "question": "An adviser's Form ADV Part 1 must be updated promptly if certain 'material changes' occur, versus waiting for the annual updating amendment. Which of the following would most clearly require a prompt (rather than merely annual) amendment?",
    "choices": {
      "A": "A change in the adviser's total assets under management from $150 million to $152 million due to normal market fluctuation",
      "B": "The initiation of a disciplinary or enforcement proceeding against the firm by a regulator, which is a materially different type of disclosure event requiring prompt amendment",
      "C": "A slight increase in the number of clients from 340 to 345",
      "D": "An immaterial change in the firm's mailing address suite number within the same building"
    },
    "correct": "B",
    "explanation": "Form ADV must be promptly amended whenever information becomes materially inaccurate, such as the initiation of a disciplinary action or enforcement proceeding; routine, immaterial fluctuations (small AUM changes, minor address details, small client count shifts) are typically addressed at the annual updating amendment instead."
  },
  {
    "id": 217,
    "question": "An investment adviser is structuring a wrap fee program in which clients pay a single bundled fee covering advisory services and transaction costs. Under Form ADV requirements specific to wrap fee programs, what disclosure must the sponsor provide?",
    "choices": {
      "A": "No special disclosure beyond the standard brochure is required for wrap fee programs",
      "B": "The sponsor must provide a wrap fee brochure (Form ADV Appendix 1) describing the program's fees, services, portfolio manager selection process, and potential conflicts, since bundled fees can obscure the actual cost of transactions versus advice",
      "C": "Wrap fee programs are exempt from all Form ADV brochure delivery obligations",
      "D": "Only a one-page fee schedule is required, without any narrative disclosure"
    },
    "correct": "B",
    "explanation": "Wrap fee program sponsors must prepare and deliver a specialized wrap fee brochure (using Form ADV Appendix 1) that describes the bundled fee structure, services provided, how portfolio managers are selected and reviewed, and conflicts of interest, since bundling can obscure underlying costs from clients."
  },
  {
    "id": 218,
    "question": "A broker-dealer routes client orders to a market maker that pays the firm for order flow (payment for order flow), while also representing to clients that the firm seeks 'best execution' on all trades. What must the firm do to reconcile accepting payment for order flow with its best execution obligations?",
    "choices": {
      "A": "Nothing, since payment for order flow is entirely unrelated to execution quality analysis",
      "B": "The firm must disclose the payment for order flow arrangement and regularly assess whether order routing decisions genuinely achieve best execution for clients, rather than being driven primarily by the payments received",
      "C": "Payment for order flow arrangements are illegal and must be terminated immediately",
      "D": "The firm satisfies its obligation automatically as long as some price improvement occurs on any trade"
    },
    "correct": "B",
    "explanation": "Firms accepting payment for order flow must disclose the practice and cannot let those payments compromise their duty of best execution; they must periodically and rigorously evaluate execution quality across venues to ensure routing decisions serve clients' interests, not just the firm's revenue."
  },
  {
    "id": 219,
    "question": "A financial planner who charges only hourly fees for comprehensive financial plans, and does not manage assets or receive commissions, provides recommendations that include general asset allocation guidance but does not recommend specific securities. Is this planner required to register as an investment adviser?",
    "choices": {
      "A": "No, because charging only fees for financial planning without specific securities recommendations always falls outside investment adviser regulation",
      "B": "Possibly yes; if the planner's business involves regularly providing advice about the value of or advisability of investing in securities as part of the compensated planning service, the planner likely meets the three-prong test for investment adviser status (advice, business, compensation) even without recommending individual securities",
      "C": "No, because hourly-fee-only compensation structures are categorically excluded from adviser registration",
      "D": "Yes, but only if the planner has more than 15 clients"
    },
    "correct": "B",
    "explanation": "The three-part test for investment adviser status looks at whether a person (1) provides advice about securities (including general asset allocation guidance touching on securities), (2) is in the business of doing so, and (3) receives compensation; meeting all three generally requires registration regardless of fee structure or whether specific securities are named."
  },
  {
    "id": 220,
    "question": "An issuer wants to conduct a Regulation Crowdfunding (Reg CF) offering to raise capital from a large number of small, non-accredited investors via an online funding portal. Which statement correctly describes an investor protection feature unique to this exemption?",
    "choices": {
      "A": "There are no investment limits; any individual may invest an unlimited amount regardless of income or net worth",
      "B": "Individual investors are subject to statutory limits on how much they may invest across all Reg CF offerings in a 12-month period, calculated based on their income and net worth, to limit their exposure to speculative risk",
      "C": "Reg CF offerings may only be sold directly by the issuer without using any registered funding portal or broker-dealer intermediary",
      "D": "Reg CF completely preempts all state securities regulation with no notice filing obligations whatsoever"
    },
    "correct": "B",
    "explanation": "Regulation Crowdfunding imposes investment limits on non-accredited investors based on their annual income and net worth, capping how much they can invest in Reg CF offerings in a rolling 12-month period, specifically to protect retail investors from over-concentrating in speculative early-stage companies."
  }
];
