const PRACTICE_TEST_QUESTIONS = [
  {
    id: 1,
    question: "When an offering is registered with the SEC under the Securities Act of 1933 and the state registrations occur simultaneously using the same information, what type of registration is this known as under the Uniform Securities Act?",
    choices: {"A": "Registration by coordination", "B": "Registration by filing or notification", "C": "Registration by qualification", "D": "Registration by administration"},
    correct: "A",
    explanation: "Registration by coordination is used when a security is being registered with the SEC and the state registration is coordinated to become effective at (or about) the same time, using the same information filed with the SEC."
  },
  {
    id: 2,
    question: "In a scenario where an agent of a broker-dealer in North Carolina attempts to sell securities to a South Carolina resident through email, in which state has the offer to sell been made under the Uniform Securities Act?",
    choices: {"A": "Neither state", "B": "North Carolina", "C": "Both states ", "D": "South Carolina"},
    correct: "A",
    explanation: "Under the Uniform Securities Act, an offer is considered to occur in any state where the offer originates (the state of the person making the offer) and any state where it is directed and received (the state of the offeree). Because the email solicitation originates in North Carolina and is directed to a South Carolina resident, the offer is made in both states."
  },
  {
    id: 3,
    question: "A client looking to balance growth and income in her portfolio asks for a suggestion on where to invest her $32,000 savings. The advisor mentions that the NGK balanced fund has achieved an average return of 9.3% annually, while the aggressive growth fund has averaged 18.7%, and suggests that she consider the aggressive growth fund because of its higher returns. Which statement is most accurate from a regulatory and suitability standpoint?",
    choices: {"A": "The advisor has acted improperly by implying that the aggressive growth fund may be appropriate even though it does not align with the investor's stated goals.", "B": "The advisor ought to suggest additional fund options and their performance.", "C": "The advisor is assisting the client in making an informed decision by providing alternative choices.", "D": "The client would benefit more from investing in the aggressive growth fund for potential higher returns."},
    correct: "A",
    explanation: " Under suitability and fiduciary standards, recommendations must be consistent with the clientʼs statReeds oubltjesc: t 7 iv 3 e o of u g t r o ow f 1 th 0 a 0 nd income. Steering the client toward an aggressive growth fund solely because of its higher returns, without regard to its different risk profile and investment objective, is misleading and unsuitable."
  },
  {
    id: 4,
    question: "Which statements about a variable annuity are accurate? I. The unit values are determined on a daily basis II. Investors possess voting rights III. Unit value is influenced by performance of the separate account IV. The maximum sales charge cannot exceed 9% of total payments",
    choices: {"A": "II and IV", "B": "I and III", "C": "I, II, and III", "D": "I, II, III, and IV"},
    correct: "C",
    explanation: "Statements I, II, and III are correct. In a variable annuity, accumulation units are priced each business day, and those values rise or fall with the performance of the separate account. Contract owners (investors) have voting rights on key issues related to the separate account, such as changes in investment objectives, though the insurer usually votes the underlying portfolio securities by proxy. Statement IV is false because the 9% maximum sales charge over 20 years applies to contractual plans in mutual funds under FINRA rules, not to variable annuities; variable annuity charges must be fully disclosed and reasonable, but there is no  single statutory 9% cap on total payments."
  },
  {
    id: 5,
    question: "Which component is NOT part of stockholders' equity on a corporate balance sheet?",
    choices: {"A": "Preferred stock", "B": "Common stock", "C": "Liabilities", "D": "Retained earnings"},
    correct: "C",
    explanation: "Liabilities are the company's debts and obligations and appear in a separate section of the balance sheet from stockholders' equity. Stockholders' equity includes ownership accounts such as common stock, preferred stock, and retained earnings."
  },
  {
    id: 6,
    question: "How long does an agent typically have to submit an appeal (petition for judicial review) against an administrator's final order under the Uniform Securities Act?",
    choices: {"A": "Within 45 days", "B": "Within 30 days", "C": "Within 60 days", "D": "Within 90 days"},
    correct: "C",
    explanation: "Under the Uniform Securities Act, a petition for judicial review of an administrator's final order generally must be filed within 60 days after  entry of the order."
  },
  {
    id: 7,
    question: "What term describes the transition an investor makes from contributing funds into an annuity to receiving distributions from it?",
    choices: {"A": "Annuitization (annuitizing) the contract", "B": "Annualizing the contract", "C": "Accumulating the contract", "D": "None of the choices listed"},
    correct: "A",
    explanation: "Annuitization (annuitizing) is the process of converting an annuity's accumulated value into a stream of periodic income payments."
  },
  {
    id: 8,
    question: "What distinguishes a traditional IRA from a Roth IRA?",
    choices: {"A": "Roth IRAs have significantly higher contribution limits", "B": "The early withdrawal penalty is 12% for traditional IRAs and 10% for Roth IRAs", "C": "Traditional IRA contributions may be tax- deductible and withdrawals are taxed as ordinary income; Roth IRA contributions are made with after-tax dollars and qualified withdrawals are tax-free", "D": "A traditional IRA is classified as a qualified account, whereas a Roth IRA is categorized as a non-qualified account"},
    correct: "A",
    explanation: "The key difference is tax treatment: traditional  IRA contributions may be deductible, with distributions typically taxed as ordinary income, while Roth IRA contributions are made with after-tax dollars and qualified distributions are tax-free."
  },
  {
    id: 9,
    question: "What is the typical maximum maturity for a corporate warrant as commonly described in Series 65 exam materials?",
    choices: {"A": "10 years", "B": "270 days", "C": "45 days", "D": "5 years"},
    correct: "A",
    explanation: "Warrants are long-term instruments. On Series 65-style exams, they are commonly described as having long maturities, often as long as 10 years or even longer—much longer than short- term options."
  },
  {
    id: 10,
    question: "Which of the following does not typically involve a consistent (level) premium payment structure?",
    choices: {"A": "Universal life insurance", "B": "Variable life insurance", "C": "Whole life insurance", "D": "Term life insurance"},
    correct: "A",
    explanation: "Universal life insurance is designed with  flexible premiums and an adjustable death benefit, so payments are not necessarily consistent over time. Traditional whole life, traditional variable life, and level term policies generally have fixed, level premiums for the stated period."
  },
  {
    id: 11,
    question: "When an issuer first offers securities to the public and registers them with the states via coordination, when does the state registration become effective, assuming all state requirements have been met and no stop order is in effect?",
    choices: {"A": "When the federal registration is activated", "B": "When the state's administrator approves the registration", "C": "After 20 days", "D": "After 10 days"},
    correct: "A",
    explanation: "Under registration by coordination, the state registration becomes effective at the same time as the federal registration statement under the Securities Act of 1933, provided all state requirements have been satisfied and no stop order or proceeding is in effect."
  },
  {
    id: 12,
    question: "Which of the following is allowed under NASAA regulations concerning broker-dealer practices?",
    choices: {"A": "A broker-dealer makes speculative trades in a  non-discretionary account without informing the client.", "B": "A registReeresdu lrtesp: r 7 e 3 se o nt u a t t iv o e f r 1 e 0 c 0 ommends a diversified portfolio to a non-discretionary client based on their risk tolerance.", "C": "A broker-dealer engages in excessive trading to generate commissions for themselves.", "D": "A registered agent executes trades in a client's account without the client's prior authorization."},
    correct: "A",
    explanation: "Recommending a diversified portfolio tailored to a client's risk tolerance is suitable and permitted; the other choices describe prohibited or unethical practices (unauthorized trading, trading in non-discretionary accounts without client orders, and churning)."
  },
  {
    id: 13,
    question: "For an investment adviser overseeing $150,000,000 in assets under management, which of the following actions is necessary? I. Register with the state securities Administrator II. Register with the Securities and Exchange Commission (SEC) III. Register with both the SEC and the state Administrator IV. Pay notice filing fees to the states in which the adviser has a place of business or enough clients to require registration if it were state-registered",
    choices: {"A": "I, II, and IV", "B": "II and IV", "C": "I and III", "D": "I and II"},
    correct: "A",
    explanation: " An adviser with $110 million or more in assets under management is a federal covered adviser and must reRgeisstuelrt sw:i t 7 h 3 t h o e u S t E o C f , 1 n 0 o 0 t the states. Federal covered advisers are exempt from state registration but must make notice filings and pay applicable notice-filing fees in any state where they have a place of business or enough clients that they would otherwise be required to register if they were not federally covered."
  },
  {
    id: 14,
    question: "Which of the following could be classified as an investment adviser under the Uniform Securities Act if providing securities-related advice for compensation?",
    choices: {"A": "Savings institution", "B": "Federal covered adviser", "C": "Trust company", "D": "Sports agent"},
    correct: "D",
    explanation: "Under the Uniform Securities Act, a person who, for compensation, is in the business of giving advice about securities is an investment adviser unless an exclusion applies. A sports agent who, for an extra fee, advises clients about investing in securities (for example, how to invest their signing bonus) meets this definition. Savings institutions and trust companies are specifically excluded from the definition of investment adviser, and federal covered advisers register with the SEC rather than as state-registered investment advisers  under the USA."
  },
  {
    id: 15,
    question: "When dealing with an unsolicited order in a client's account, which of the following actions is typically required of an adviser or broker-dealer agent to maintain ethical standards?",
    choices: {"A": "Only inform the buyer about the execution price after the trade is completed", "B": "Document that the order was unsolicited and ensure the transaction is not clearly unsuitable or otherwise improper for the client", "C": "Automatically reject all unsolicited orders without further action", "D": "Charge a higher commission for handling unsolicited orders due to added risk"},
    correct: "A",
    explanation: "For unsolicited orders, the firm must mark and document the order as unsolicited and still has a duty to avoid clearly unsuitable or improper transactions. They do not reject all such orders, overcharge, or limit disclosure to price only."
  },
  {
    id: 16,
    question: "In the event of a corporation's bankruptcy, how are the remaining assets distributed according to priority? I. Common stockholders II. Debenture bondholders (unsecured creditors) III. IRS and employees for unpaid wages and taxes IV. Secured bondholders",
    choices: {"A": "III, II, I, and IV ", "B": "IV, III, II, and I", "C": "III, II, IV, R a e n s d u I lts: 73 out of 100", "D": "I, II, III, and IV"},
    correct: "B",
    explanation: "Secured creditors (IV) are paid first from collateral. Next come priority claims such as unpaid wages and certain taxes (III). After priority claims, general unsecured creditors like debenture holders (II) are paid. Common stockholders (I) are last and receive any residual value."
  },
  {
    id: 17,
    question: "An agent intentionally sells an unregistered exempt security in a manner that does NOT comply with the conditions of its exemption. According to the Uniform Securities Act, which statements are accurate? I. The agent has violated the Uniform Securities Act by selling the security in a non-exempt manner II. The agent may be required to offer rescission to the investors III. The agent has not violated the Act because the security is exempt IV. The agent is required to register the security retroactively after the sale",
    choices: {"A": "Statements II and IV", "B": "Only statement IV", "C": "Only statement III", "D": "Statements I and II"},
    correct: "A",
    explanation: "Exempt securities are exempt from registration only if the conditions of the exemption are met. If the way the security is sold causes the  exemption to be lost, the sale is in violation of the Act and the administrator may require the seller (or the firm) to offer rescission. There is no such thing as retroactive registration, and the fact that a security is nominally exempt does not excuse a non-exempt sale."
  },
  {
    id: 18,
    question: "Under the Uniform Securities Act, which of the following qualifies as an institutional investor for purposes of certain exempt transactions?",
    choices: {"A": "Retail individuals", "B": "Government agencies", "C": "Pension funds", "D": "Both b and c"},
    correct: "A",
    explanation: "Under the Uniform Securities Act, institutional investors include entities such as government agencies and employee benefit or pension plans (pension funds). Retail individuals do not qualify as institutional investors for purposes of exempt transactions."
  },
  {
    id: 19,
    question: "Which of the following statements about qualified dividends is true?",
    choices: {"A": "They are taxed at a lower preferential rate.", "B": "They are considered ordinary income and taxed accordingly.", "C": "They are subject to a 30% withholding tax.", "D": "They must be held for one year to qualify for lower rates."},
    correct: "A",
    explanation: " Qualified dividends are taxed at the preferential long-term cRaepsituallt gsa: i 7 n 3 s r o at u e t s o (g f e 1 n 0 e 0 rally 0%, 15%, or 20% depending on taxable income and filing status). To be treated as qualified, the investor must meet a holding-period requirement—generally more than 60 days during the 121-day period beginning 60 days before the ex-dividend date (special rules apply for certain preferred stock)."
  },
  {
    id: 20,
    question: "Cumulative preferred stock that skipped dividends for several years owes the holder:",
    choices: {"A": "The missed preferred dividends (rate × par, per share, times years missed) before common can be paid—arrears accumulate", "B": "Nothing, because skipped preferred dividends are always cancelled", "C": "Only the current year's preferred dividend, never prior years", "D": "A penalty equal to the common dividend"},
    correct: "A",
    explanation: "Cumulative means arrears pile up. Annual preferred = percent of par; unpaid total = that amount × shares × years. Know the rule; skip the $3,000 grind."
  },
  {
    id: 21,
    question: "You have an open buy limit order to purchase 1,000 shares of ABC at $42. After a $0.18 cash dividend goes ex-dividend, what will your customer's order amount to (assuming a DNR instruction has NOT been given)?",
    choices: {"A": "An open order to buy 1,000 ABC at $42.18 ", "B": "An open order to buy 1,000 ABC at $42", "C": "An open R e o s rd u e lt r s t : o 7 b3u yo 1u,0t 0o0f 1A0B0C at $41.82", "D": "Canceled"},
    correct: "A",
    explanation: "Absent a DNR (do not reduce) instruction, open buy limit and buy stop orders are reduced on the ex-dividend date by the amount of the cash dividend: $42.00 − $0.18 = $41.82."
  },
  {
    id: 22,
    question: "If a client intends to buy an annuity through consistent scheduled payments, which type should they consider?",
    choices: {"A": "Single-premium deferred annuity", "B": "Single-premium immediate annuity", "C": "Flexible-premium (periodic payment) deferred annuity", "D": "Immediate annuity funded by periodic payments"},
    correct: "A",
    explanation: "A flexible-premium (periodic payment) deferred annuity is designed for investors to make regular contributions during an accumulation period and receive income at a later, deferred date."
  },
  {
    id: 23,
    question: "If a corporation you invested in is undergoing bankruptcy proceedings, which of the following rights pertains to common stockholders?",
    choices: {"A": "Entitlement to a share of the residual assets, if any remain, after all creditors and senior security holders have been paid ", "B": "Guaranteed return of principal investment", "C": "Continu R e e d s d u i l v t i s d : e 7n3d poauytm oefn 1ts0 u0ntil the process is complete", "D": "Full repayment of original stock value"},
    correct: "A",
    explanation: "In bankruptcy, common stockholders are last in line and have only a residual claim on assets— meaning they may receive a proportionate share of what, if anything, is left after all creditors, bondholders, and preferred stockholders are fully paid."
  },
  {
    id: 24,
    question: "What is the maximum duration for which a security remains registered under the Uniform Securities Act once its registration statement becomes effective, assuming it is not renewed?",
    choices: {"A": "One year", "B": "Three years", "C": "Six months", "D": "Indefinitely as long as it is not revoked"},
    correct: "A",
    explanation: "Under the Uniform Securities Act, a security registration becomes effective for one year from the effective date of the registration statement, unless it is renewed or withdrawn."
  },
  {
    id: 25,
    question: "What ratio is used to evaluate the performance of an investment by considering its volatility (total risk)?",
    choices: {"A": "Alpha ", "B": "Treynor ratio", "C": "R-squar R e e d sults: 73 out of 100", "D": "Sharpe ratio"},
    correct: "A",
    explanation: "The Sharpe ratio measures an investment's excess return per unit of total risk (volatility, typically measured by standard deviation). The Treynor ratio uses beta (systematic risk) rather than total volatility."
  },
  {
    id: 26,
    question: "If an investment advisory firm charges a fee that is a fixed percentage of assets under management, what impact does this have on the fee amount when the client's account value increases or decreases?",
    choices: {"A": "The dollar amount of the fee will increase or decrease in line with the account value.", "B": "The percentage of the fee will increase regardless of account performance.", "C": "The fee will remain unchanged regardless of account fluctuations.", "D": "The firm will charge additional fees based on transaction volume."},
    correct: "A",
    explanation: "Because the fee is calculated as a percentage of assets under management, changes in account value cause the dollar amount of the fee to rise or fall proportionally, even though the percentage rate itself stays the same."
  },
  {
    id: 27,
    question: "How is earnings per share on a basic (formerly  called 'primary') basis determined?",
    choices: {"A": "By dividing net income available to common shareholders by the weighted average number of common shares outstanding (excluding potential conversion of convertible securities).", "B": "By adding the outstanding common shares to the shares that would be outstanding if convertible bonds and convertible preferred stock were converted into common stock, then dividing net income by this total.", "C": "By summing the outstanding common shares with the working capital, then dividing by net income.", "D": "By accounting for the number of outstanding common shares and retained earnings, then dividing by total equity."},
    correct: "A",
    explanation: "Basic EPS (formerly called primary EPS) = net income available to common shareholders ÷ weighted average common shares outstanding; it excludes potential shares from convertibles, which are only included when calculating diluted EPS."
  },
  {
    id: 28,
    question: "Which of the following best describes an investment adviser under the Uniform Securities Act?",
    choices: {"A": "A publisher of a market newsletter charging a $400 yearly fee that provides specific securities recommendations to subscribers", "B": "J. Smith, the proprietor of J. Smith Advisors, who manages portfolios and charges an annual fee for that service", "C": "A brokerage firm that offers advice to its  clients solely as part of its normal brokerage business and receives only commissions", "D": "A certifRieeds puultbsl:ic 7 a 3 c c o o u u t n o ta f n 1 t 0 w 0 ho only provides incidental investment advice while preparing client tax returns and charges no separate fee for the advice"},
    correct: "A",
    explanation: "Under the Uniform Securities Act, an investment adviser is a person who, for compensation, is in the business of providing advice about securities. A publisher that provides specific securities recommendations for a fee is an investment adviser because the advice is about specific securities, it is given as a business, and there is compensation. J. Smith may or may not be an investment adviser depending on whether the portfolios contain securities; as written, that is not specified. Broker-dealers and professionals such as CPAs are excluded when their investment advice is solely incidental to their primary business and no special compensation is received."
  },
  {
    id: 29,
    question: "What is the primary purpose of a stop order issued by the Administrator in the context of a security's registration under the Uniform Securities Act (USA)?",
    choices: {"A": "To initiate trading of a security at a premium price", "B": "To specify the minimum price at which a security can be sold", "C": "To protect investors from market volatility", "D": "To deny, suspend, or revoke the effectiveness  of a security's registration, preventing its public offering until regulatory concerns are addressed"},
    correct: "A",
    explanation: "Under the USA, a stop order is an order by the Administrator to deny, suspend, or revoke the effectiveness of a security's registration. This prevents the security from being legally offered or sold to the public in that state until registration deficiencies are corrected or regulatory concerns are resolved."
  },
  {
    id: 30,
    question: "Which of the following is not responsible for overseeing the provision of credit for purchasing securities?",
    choices: {"A": "Regulation G", "B": "Regulation T", "C": "Regulation U", "D": "Regulation X"},
    correct: "A",
    explanation: "Regulation T (broker–dealer credit), Regulation U (bank loans secured by margin stock), and Regulation X (application of margin regulations to certain borrowers, including foreign borrowers) all relate to credit for purchasing securities. Regulation G, by contrast, is an SEC rule concerning non-GAAP financial measures and does not govern the extension of credit for securities transactions."
  },
  {
    id: 31,
    question: "What is expected to happen to outstanding fixed-income securities during a period of rising inflation? ",
    choices: {"A": "Bond prices decrease and yields increase", "B": "Bond prRiceessu dltesc: r7e3as oe uatn do fy i1e0ld0s decrease", "C": "Only bond prices decrease", "D": "Bond prices increase and yields decrease"},
    correct: "A",
    explanation: "During periods of rising inflation, market interest rates generally rise as investors demand higher nominal returns to compensate for reduced purchasing power. Because bond prices move inversely to yields, higher yields lead to lower bond prices."
  },
  {
    id: 32,
    question: "What tax implications does an investor face when taking distributions from a traditional IRA?",
    choices: {"A": "Only taxes on capital gains", "B": "No taxes if under a certain limit", "C": "Ordinary income taxes on the taxable portion of the distribution (earnings and deductible contributions); nondeductible contributions are returned tax-free", "D": "Only on the amount contributed (not on earnings)"},
    correct: "A",
    explanation: "Traditional IRA distributions are generally taxed as ordinary income to the extent they represent pre-tax amounts (earnings and deductible contributions). Any after-tax (nondeductible) contributions are not taxed again and are recovered tax-free; the taxable and nontaxable portions are determined on a prorated basis  when distributions are made."
  },
  {
    id: 33,
    question: "What event typically necessitates stockholder consent?",
    choices: {"A": "A proposed merger with another company.", "B": "The issuance of additional shares to current investors within the limits of authorized stock.", "C": "The appointment of a corporate officer (e.g., CEO).", "D": "The payment of a stock dividend."},
    correct: "A",
    explanation: "Stockholder approval is commonly required for significant corporate actions—such as mergers or consolidations—that materially change ownership or corporate structure. Routine actions (issuing shares within authorized limits, appointing officers, declaring dividends) are typically handled by the board."
  },
  {
    id: 34,
    question: "What is the main purpose of a cease-and-desist order in the context of securities regulation under the Uniform Securities Act (USA)?",
    choices: {"A": "To temporarily pause trading activities on a specific security or market", "B": "To order a person or firm to stop violating securities laws and to comply with applicable regulations", "C": "To revoke a broker-dealerʼs or agentʼs registration", "D": "To impose monetary penalties for past  violations"},
    correct: "A",
    explanation: "Under the USA, a cease-and-desist order is used by the Administrator to require a person or firm to stop an activity that violates securities laws and to bring their conduct into compliance; it does not itself revoke registration, halt market trading, or impose fines."
  },
  {
    id: 35,
    question: "Alterations in the Dow Jones Industrial Average reflect changes in which of the following?",
    choices: {"A": "Utility stocks.", "B": "Bank stocks.", "C": "Industrial stocks.", "D": "Railroad stocks."},
    correct: "A",
    explanation: "The Dow Jones Industrial Average is a price- weighted index of 30 major U.S. companies. Historically it represented industrial firms, and its movements primarily reflect changes in the prices of those component industrial stocks, not specifically utilities, banks, or railroads."
  },
  {
    id: 36,
    question: "How long does it typically take for a securities registration by qualification to become effective under the Uniform Securities Act if there are no issues?",
    choices: {"A": "Immediately ", "B": "Within 5 days of filing", "C": "At noon R o e n s u th lt e s : 3 70t3h oduayt aofft e1r0 f0iling", "D": "Within 10 days of filing"},
    correct: "C",
    explanation: "Under the Uniform Securities Act, a registration by qualification generally becomes effective at noon on the 30th day after the filing date, provided the Administrator does not advance the effective date and there are no stop orders or other issues."
  },
  {
    id: 37,
    question: "Which of the following statements about a variable life insurance policy is incorrect?",
    choices: {"A": "It serves as both a securities and insurance product.", "B": "It accumulates cash value that can fluctuate.", "C": "Its investment assets are managed within the insurer's general account.", "D": "It features a constant premium."},
    correct: "A",
    explanation: "Variable life policy investments are held in a separate account (not the insurer's general account), so any statement saying they are managed in the general account is incorrect."
  },
  {
    id: 38,
    question: "In a rights offering, a companyʼs stock is currently trading at $30 and the subscription price for the new shares is $24. If the company issues four rights to each existing shareholder and specifies that four rights are required to purchase one new share, how many rights are needed to  subscribe to one new share?",
    choices: {"A": "2 rights", "B": "3 rights", "C": "5 rights", "D": "4 rights"},
    correct: "A",
    explanation: "The terms of the rights offering state that four rights are required to purchase one new share, so an investor must use four rights to subscribe to one new share."
  },
  {
    id: 39,
    question: "When an investor buys convertible preferred stock, which of the following is not typically among the benefits they receive?",
    choices: {"A": "Chance to profit from a rise in common stock value", "B": "Fixed dividend payments", "C": "Assured dividend payments", "D": "Equity ownership"},
    correct: "C",
    explanation: "Convertible preferred stock normally offers a stated (fixed) dividend and the right to convert into common stock, allowing the investor to benefit if the common stock price rises. It is also an equity security. However, dividends on preferred stock are never guaranteed; they must be declared by the board and depend on the issuerʼs financial condition. Therefore, 'assured dividend payments' is not a legitimate  benefit."
  },
  {
    id: 40,
    question: "Which equation represents the balance sheet for a company?",
    choices: {"A": "Liabilities - assets = net worth", "B": "Assets - liabilities = net worth", "C": "Assets / liabilities = net worth", "D": "Assets + liabilities = net worth"},
    correct: "A",
    explanation: "The balance sheet equation is Assets - Liabilities = Net Worth (Equity). It is commonly rearranged and shown as Assets = Liabilities + Equity."
  },
  {
    id: 41,
    question: "What defines a federally covered security under the Uniform Securities Act and NSMIA?",
    choices: {"A": "It is more secure than other forms of investment", "B": "It is restricted to open-end investment companies that distribute shares via a prospectus", "C": "It requires approval from the state securities administrator", "D": "It is exempt from state registration requirements"},
    correct: "D",
    explanation: "Under NSMIA, federally covered securities are exempt from state registration, though states may still require notice filings and fees in some  cases."
  },
  {
    id: 42,
    question: "What is a primary characteristic of common stock?",
    choices: {"A": "Offers fixed dividends", "B": "Entitles shareholders to vote on company matters", "C": "Has a guaranteed return on investment", "D": "Can be converted into bonds"},
    correct: "A",
    explanation: "Common stockholders typically have voting rights in the company, such as electing the board of directors."
  },
  {
    id: 43,
    question: "Which of the following is true about a consent to service of process under the Uniform Securities Act?",
    choices: {"A": "It ensures the applicant has a valid license", "B": "It designates the state Administrator as the applicant's agent for service of process, allowing legal papers to be served in the state", "C": "It serves as a form of insurance against legal issues", "D": "It requires the applicant to attend additional training sessions"},
    correct: "A",
    explanation: "A consent to service of process appoints the state Administrator as the applicant's attorney or agent to receive legal documents on the applicantʼs behalf, simplifying service of process in administrative, civil, or legal  proceedings."
  },
  {
    id: 44,
    question: "What is a primary characteristic of American Depositary Receipts (ADRs)?",
    choices: {"A": "ADRs allow US investors to buy shares in foreign companies", "B": "ADRs can only be purchased by institutional investors", "C": "ADRs are always held in the investor's name", "D": "ADRs cannot represent more than one share of the underlying stock"},
    correct: "A",
    explanation: "ADRs are certificates issued by a U.S. depositary bank that represent shares of a foreign company, allowing U.S. investors to buy and trade foreign equities in U.S. dollars on U.S. exchanges."
  },
  {
    id: 45,
    question: "Under the Uniform Securities Act, which pieces of information must be provided when registering securities for sale in the state?",
    choices: {"A": "The amount of securities to be offered and a specimen of the security", "B": "A specimen of the security and a consent to service of process", "C": "The amount of securities to be offered and all other states where filing has been or will be made", "D": "The amount of securities to be offered, a specimen of the security, a consent to service of process, and all other states where filing  has been or will be made"},
    correct: "A",
    explanation: "Under the Uniform Securities Act, a registration statement for securities must include, among other items, the amount of securities to be offered in the state, a specimen (copy) of the security, a consent to service of process, and a list of the other states in which a registration statement has been or will be filed. Therefore, only choice D includes all required items listed in the question."
  },
  {
    id: 46,
    question: "How can the expected return on an investment be accurately characterized?",
    choices: {"A": "As the probability-weighted average of potential returns", "B": "As the weighted average of its internal rate of return", "C": "As the weighted average standard deviation", "D": "As the weighted average of its future value"},
    correct: "A",
    explanation: "Expected return is calculated as the probability-weighted average of all possible returns, found by summing each potential outcome multiplied by its probability. The other choices incorrectly associate expected return with IRR (b), a risk measure such as standard deviation (c), or a time-value-of-money measure such as future value (d)."
  },
  {
    id: 47,
    question: "What must an investment adviser do before assigning its advisory contracts to another adviser, such as when selling its practice?",
    choices: {"A": "Notify regulatory bodies ", "B": "Ensure all clients have signed a waiver", "C": "Obtain c R o e n s s u e lt n s t : f 7ro3m o tuhet oclfi e1n0ts0 (usually written)", "D": "Sell at fair market value"},
    correct: "A",
    explanation: "Under the Investment Advisers Act of 1940 and NASAA model rules, advisory contracts may not be assigned without client consent. A sale of the practice is generally considered an assignment, so the adviser must obtain client consent (typically written) before transferring or assigning those contracts."
  },
  {
    id: 48,
    question: "Which of the following scenarios permits a state Administrator to deny an issuer's registration of securities under the Uniform Securities Act?",
    choices: {"A": "The issuer provided materially false or misleading information on its registration application", "B": "The issuer has a history of bankruptcies", "C": "The issuer's securities are under investigation by the SEC", "D": "The issuer has not conducted any offerings in the past"},
    correct: "A",
    explanation: "Under the Uniform Securities Act, a state Administrator may deny, suspend, or revoke a securities registration if the application contains any material misstatement or omission. A history of bankruptcy, an SEC investigation, or a lack of prior offerings are not, by themselves, automatic grounds for  denial."
  },
  {
    id: 49,
    question: "What characterizes a Keogh plan (HR-10)?",
    choices: {"A": "A type of savings account for children", "B": "A plan exclusively for corporations", "C": "A retirement plan funded only by employee contributions", "D": "A qualified retirement plan for self-employed individuals and their employees"},
    correct: "A",
    explanation: "A Keogh (HR-10) is a qualified retirement plan designed for self-employed individuals (sole proprietors and partners) and their employees, with contributions made by the employer (the self-employed individual). It is not for corporations, is not a childrenʼs account, and is not funded solely by employee contributions."
  },
  {
    id: 50,
    question: "If a broker-dealer is aware that a new issue will likely be oversubscribed and allocates some of the shares to an associated personʼs family member without following required allocation procedures or making proper disclosure, what is this action considered?",
    choices: {"A": "An ethical violation", "B": "A standard practice in the industry", "C": "A permissible action under certain conditions", "D": "Acceptable if disclosed to the public"},
    correct: "A",
    explanation: "Preferentially allocating oversubscribed new-  issue shares to a family member without following required allocation procedures or required disclosure is an unethical and prohibited practice, creating a conflict of interest and violating industry regulations and firm policies."
  },
  {
    id: 51,
    question: "Which of the following actions by a broker- dealer would most likely result in criminal penalties rather than civil or administrative penalties under the Uniform Securities Act?",
    choices: {"A": "Unintentionally failing to inform a client of a significant fact regarding a security", "B": "Deliberately misleading a customer to acquire a new issue using false information", "C": "Neglecting to timely submit advertising materials to the state regulator as required", "D": "Failing to maintain required books and records in accordance with regulations"},
    correct: "A",
    explanation: "Criminal penalties under the Uniform Securities Act generally require a willful violation, such as intentional fraud or deliberate deception in connection with the offer, sale, or purchase of a security. Choice (b) describes intentional misrepresentation in the sale of a security. The other options describe unintentional, administrative, or recordkeeping violations that are typically handled through civil or administrative actions, not criminal prosecution."
  },
  {
    id: 52,
    question: "When converting a bond into shares of common stock, what is the correct formula to determine the number of shares received? ",
    choices: {"A": "Par value times conversion price", "B": "Par valuRee dsiuvlidtse:d 7 b3y ocuont voefr s1io0n0 price", "C": "Conversion price divided by par value", "D": "Par value plus conversion price"},
    correct: "B",
    explanation: "The conversion ratio (number of shares received) is calculated as: bond par value (typically $1,000) ÷ conversion price (price per share)."
  },
  {
    id: 53,
    question: "What is a key component of material information that must be disclosed to clients?",
    choices: {"A": "Clients should receive comprehensive facts about the investment, including risks, fees, and conflicts of interest", "B": "Investors should only hear positive aspects of the investment", "C": "Opinions should be encouraged to help guide the client's decision", "D": "Only recent market trends should be disclosed"},
    correct: "A",
    explanation: "Material information includes all relevant facts (such as risks, fees, and conflicts of interest) so clients can make informed decisions—not just positive details or selective data."
  },
  {
    id: 54,
    question: "Which of the following statements about depreciation is incorrect? I. Depreciation is a cash expense that reduces a company's operating income. II. Depreciation spreads the cost of a  tangible asset over its useful life. III. Depreciation lowers taxable income, thereby reducing a company's tax liability.",
    choices: {"A": "I only", "B": "I, II and III", "C": "II only", "D": "I and II"},
    correct: "A",
    explanation: "Depreciation is a non-cash expense that allocates the cost of a tangible asset over its useful life and reduces accounting and taxable income; it does not involve an actual cash outflow, so statement I is incorrect."
  },
  {
    id: 55,
    question: "Which of the following statements is true regarding an advisory firm that charges both advisory fees and transaction-based compensation?",
    choices: {"A": "It is fully prohibited under current regulations", "B": "It is allowed only for certain types of assets", "C": "Clients must be informed about such fees and the associated conflicts of interest", "D": "It can be done without client notification"},
    correct: "A",
    explanation: "Investment advisers must fully disclose all fees and material conflicts of interest (including charging both advisory fees and transaction- based compensation) in Form ADV and other required disclosures. Clients must receive this information before or at the start of the advisory relationship so they can give informed  consent."
  },
  {
    id: 56,
    question: "You have recently enrolled in your company's pension plan (a defined benefit plan that is not participant-directed) and want to know the minimum frequency of benefit statements provided to participants. What is the minimum requirement for these statements?",
    choices: {"A": "Quarterly", "B": "Annually", "C": "Monthly", "D": "Once every 3 years"},
    correct: "D",
    explanation: "Under ERISA, defined contribution plans generally must provide benefit statements at least annually (and quarterly if participant- directed). Defined benefit plans that are not participant-directed must provide benefit statements at least once every 3 years, or annually if participants are notified that they can request a statement. For Series 65 purposes, remember: more frequent statements for defined contribution plans, and a minimum of once every 3 years for defined benefit plans."
  },
  {
    id: 57,
    question: "Which of the following statements about an educational IRA (Coverdell ESA) is incorrect?",
    choices: {"A": "Contributors can add up to $5,000 in after-tax  dollars for every student each year.", "B": "Earnings in the account can accumulate tax- deferredR.esults: 73 out of 100", "C": "Withdrawals are tax-exempt if used for qualified educational expenses.", "D": "Funds remaining in the account by the time the student turns 30 must be rolled over to a family member or taxed if withdrawn by the original beneficiary."},
    correct: "A",
    explanation: "The annual contribution limit for a Coverdell (educational) IRA is $2,000 per beneficiary, not $5,000. Contributions are after-tax; earnings grow tax-deferred and qualified withdrawals for education are tax-free. If funds remain when the beneficiary reaches age 30, they must be rolled over to a qualifying family member or distributed (with tax and possible penalty)."
  },
  {
    id: 58,
    question: "When a registered investment adviser plans to merge with another registered adviser, what requirement must they meet?",
    choices: {"A": "Submit a report to the SEC within 30 days.", "B": "Notify clients of the merger 60 days prior.", "C": "Discontinue all operations for 6 months.", "D": "File an amended Form ADV with the regulatory authorities."},
    correct: "D",
    explanation: "Mergers are considered a material change, so advisers must promptly update their Form ADV with the appropriate regulator (SEC or state) to  reflect changes in ownership, control, AUM, and business operations."
  },
  {
    id: 59,
    question: "If a client is the victim of unethical or illegal practices by a financial adviser, which of the following parties may the client generally pursue in a civil action or arbitration claim?",
    choices: {"A": "The adviser only", "B": "The adviser's firm only", "C": "The firm's management or supervisors only", "D": "The adviser, the adviser's firm, and the firm's management or supervisors"},
    correct: "A",
    explanation: "Under securities law and common agency principles, clients may bring civil or arbitration claims against the individual adviser, the adviser's firm (broker-dealer or investment adviser), and responsible management or supervisors. Firms can be vicariously liable for their representativesʼ wrongful acts, and supervisors can be liable for failure to supervise."
  },
  {
    id: 60,
    question: "A firm's net worth (owners' equity) equals:",
    choices: {"A": "Assets minus liabilities", "B": "Assets plus liabilities", "C": "Liabilities minus assets", "D": "Revenue minus the share price"},
    correct: "A",
    explanation: "Accounting identity: equity = assets − liabilities. You do not need $200,000 − $150,000 = $50,000 to know it."
  },
  {
    id: 61,
    question: "Which statement correctly reflects the role of an investment adviser in recommending securities?",
    choices: {"A": "They must disclose material risks to clients before recommending short selling.", "B": "They are permitted to engage in trades for a clientʼs account that the client is never informed about.", "C": "They can recommend that clients purchase only high-risk securities without evaluating suitability.", "D": "They are allowed to use their insider knowledge to push specific securities onto clients."},
    correct: "A",
    explanation: "Investment advisers owe a fiduciary duty and must provide full and fair disclosure of all material facts, including material risks associated with recommendations such as short selling. They must also ensure recommendations are suitable given the clientʼs financial situation and objectives. The other options describe prohibited conduct: undisclosed trading in a clientʼs account, recommending without a suitability analysis, and using inside information."
  },
  {
    id: 62,
    question: "A variable life policy is surrendered (no loans, ignore extra charges). The owner receives:",
    choices: {"A": "A refund of all premiums paid plus interest by statute", "B": "The greater of premiums paid or the death benefit", "C": "Nothing, because variable life has no cash value", "D": "The cash surrender value, which may be less than premiums paid—not a refund of total premiums"},
    correct: "D",
    explanation: "Surrender pays CSV, which can be below premiums in early years. Concept, not a $810 vs $1,500 arithmetic trap."
  },
  {
    id: 63,
    question: "For how long may stock subscription rights typically remain outstanding before they expire?",
    choices: {"A": "30 days", "B": "60 days", "C": "14 days", "D": "45 days"},
    correct: "D",
    explanation: "On the Series 65, stock rights are characterized as very short-term instruments that are typically exercisable for about 45 days before they expire, whereas warrants are long- term."
  },
  {
    id: 64,
    question: "Which of the following actions could prohibit an investment adviser from obtaining registration under the Uniform Securities Act?",
    choices: {"A": "Having had a registration as an investment  adviser denied or revoked by another state within the past 10 years", "B": "Having Rperesvuioltuss: l 7 y 3 be o e u n t r e o g f i s 1 t 0 e 0 red as a broker- dealer", "C": "Being a subsidiary of a company that issues securities to the public", "D": "Serving concurrently in multiple financial services roles at the same institution"},
    correct: "A",
    explanation: "Under the Uniform Securities Act, a state Administrator may deny, suspend, or revoke registration if the applicant has had registration denied or revoked by another state or regulator within the past 10 years. The other items, by themselves, are not grounds for denying registration."
  },
  {
    id: 65,
    question: "Which order qualifier should a client use to ensure their open limit order is not reduced on the ex-dividend date for an ordinary cash dividend?",
    choices: {"A": "AON", "B": "DNR", "C": "GTC", "D": "IOC"},
    correct: "A",
    explanation: "DNR (Do Not Reduce) instructs the broker not to reduce the price of an open limit order on the ex-dividend date for an ordinary cash dividend, preventing the usual automatic adjustment in the order's price."
  },
  {
    id: 66,
    question: "Which of the following must an agent determine  before being associated with more than one broker- dealer in the same state?",
    choices: {"A": "Whether he can avoid disclosing transaction- based compensation", "B": "Whether the broker-dealers must establish a joint account for shared clients", "C": "Whether state law (and the Administrator) permits dual registration with multiple broker- dealers", "D": "Whether clients are required to choose a single broker-dealer for all transactions"},
    correct: "A",
    explanation: "Under the Uniform Securities Act, an agent may be registered with more than one broker- dealer in a state only if the state law and Administrator allow it, so confirming permissibility of dual registration is essential."
  },
  {
    id: 67,
    question: "If an investment adviser manages assets for more than five clients who are residents of a state where the adviser does not have an office, what must the adviser do?",
    choices: {"A": "They can choose not to register since they  don't have an office there.", "B": "They must register with that state to provide investmReenst ualdtvsi:c 7 e 3 to o t u h t o s o e f r 1 e 0 si 0 dents, unless a specific exemption applies.", "C": "They should register with the SEC only if they exceed a certain assets-under-management threshold.", "D": "They have the option to provide advice to those clients without registering in the state."},
    correct: "A",
    explanation: "Under the Uniform Securities Act/NASAA model rule, an adviser with no place of business in a state generally must register in that state once they have more than five resident clients there (i.e., six or more), unless another exemption (such as federal covered adviser status) applies."
  },
  {
    id: 68,
    question: "Under what conditions can a broker-dealer agent participate in the gains and losses of a client's account? I. The broker-dealer approves the arrangement in writing. II. The client provides written consent before the arrangement begins. III. The agent contributes equally to the account regardless of ownership interest. IV. The sharing is proportional to each party's financial contribution to the account.",
    choices: {"A": "Only II and IV", "B": "Only I and III", "C": "I, II, and IV", "D": "Only I and II"},
    correct: "C",
    explanation: " An agent may share in a client's account gains and losses Ronelsyu wltisth: 7 th 3 e o b u ro t k o e f r- 1 d 0 ea 0 ler's prior written approval and the client's prior written consent, and any sharing must be proportional to each party's financial contribution."
  },
  {
    id: 69,
    question: "Under the Uniform Securities Act, which of the following could be a statutory basis for the Administrator to deny an investment adviser's registration?",
    choices: {"A": "The investment adviser also operates as a broker-dealer", "B": "The managing partner of the adviser has a felony conviction from 11 years ago", "C": "The investment adviser was previously denied a registration by a different state within the past 10 years", "D": "The investment adviser's parent organization is an issuer as well"},
    correct: "A",
    explanation: "A prior denial, revocation, or suspension of registration by another state within the past 10 years is a statutory disqualification under the Uniform Securities Act and can be a basis for an Administrator to deny registration."
  },
  {
    id: 70,
    question: "Which of the following best describes the net capital requirement for broker-dealers?",
    choices: {"A": "It must align with the requirements set by FINRA.", "B": "It is established by the SEC's Uniform Net  Capital Rule (Rule 15c3-1) and enforced by the SEC and SROs such as FINRA.", "C": "It is dictRaetesdu lbtsy: t 7 h 3 e n o u u m t b o e f r 1 o 0 f 0 clients an agent has.", "D": "It cannot exceed the minimum registration fee in states of operation."},
    correct: "A",
    explanation: "Net capital requirements for broker-dealers are set at the federal level under the SEC's Uniform Net Capital Rule (Rule 15c3-1). Compliance is monitored and enforced by the SEC and self- regulatory organizations such as FINRA. These requirements apply to broker-dealers, not individual agents, and are unrelated to client counts or state registration fees."
  },
  {
    id: 71,
    question: "What is the maximum time frame an investor has to file a claim through FINRA arbitration against a broker-dealer firm or its representative?",
    choices: {"A": "2 years", "B": "6 years", "C": "3 years", "D": "1 year"},
    correct: "B",
    explanation: "Under FINRA rules (see FINRA Rule 12206), arbitration claims generally must be filed within 6 years of the occurrence or event giving rise to the dispute."
  },
  {
    id: 72,
    question: "Which investment type is prohibited for  inclusion in an IRA?",
    choices: {"A": "Stocks and bonds", "B": "Rare coins and art", "C": "U.S. minted coins", "D": "Mutual funds and annuities"},
    correct: "A",
    explanation: "The IRS prohibits 'collectibles' (such as art, rugs, antiques, and most rare/collectible coins) from being held in IRAs. There are limited exceptions for certain U.S.-minted coins and approved bullion that meet IRS fineness specifications."
  },
  {
    id: 73,
    question: "Which type of dividend is most frequently distributed to shareholders?",
    choices: {"A": "Property dividends", "B": "Cash dividends", "C": "Scrip dividends (promissory notes)", "D": "Stock dividends"},
    correct: "A",
    explanation: "Cash dividends are the most common form of dividend and are typically paid directly to shareholders as checks or electronic payments."
  },
  {
    id: 74,
    question: "What is the minimum duration of a GDP decline commonly used to define a recession in most Series 65 exam materials?",
    choices: {"A": "One quarter ", "B": "Two quarters", "C": "Three q R u e a s rt u e l r t s s: 73 out of 100", "D": "Four quarters"},
    correct: "A",
    explanation: "For Series 65 purposes, a recession is commonly described as two consecutive quarters (six months) of declining real GDP. In practice, the NBER uses a broader set of indicators, but the exam typically uses the two- quarter rule."
  },
  {
    id: 75,
    question: "Which of the following practices would be considered inappropriate for a broker-dealer?",
    choices: {"A": "Pledging fully paid customer securities without written consent", "B": "Providing investment advice to clients", "C": "Charging standard commissions", "D": "Issuing performance reports to clients"},
    correct: "A",
    explanation: "Broker-dealers are prohibited from commingling or hypothecating fully paid customer securities without the customer's prior written consent (typically via a margin/hypothecation agreement). The other choices describe generally permissible broker- dealer activities when done in compliance with applicable rules and disclosures."
  },
  {
    id: 76,
    question: "In advertising for an investment plan, which information must be clearly stated to potential investors to avoid the communication being  misleading?",
    choices: {"A": "Profits will definitely be earned if the plan is followed", "B": "Investors can lose money, including principal", "C": "Only a small minimum investment is needed to participate", "D": "Continuous contributions are required to remain in the plan"},
    correct: "A",
    explanation: "Under NASAA and SEC advertising rules, advisers must not guarantee profits and must disclose that investments involve risk, including the possible loss of principal. Clearly stating that investors can lose money helps ensure the advertisement is not misleading."
  },
  {
    id: 77,
    question: "A stock pays a quarterly dividend and also reports EPS. Current (dividend) yield is:",
    choices: {"A": "The most recent quarterly dividend divided by par", "B": "EPS divided by the current share price", "C": "Annualized dividends (quarterly × 4) divided by the current share price—not EPS and not a single quarter's dividend", "D": "The P/E ratio inverted"},
    correct: "C",
    explanation: "Current yield = annual income / current price. EPS is an earnings figure. You do not need $0.70 × 4 ÷ $20 = 14% to know which inputs belong."
  },
  {
    id: 78,
    question: "Which of the following statements is accurate?  I. Common stock must be issued before any other stock types can be issued. II. The maximum number of shares a corporation is permitted to issue, as specified in its charter, is called authorized stock. III. Outstanding stock refers to shares that have been sold to investors and remain in their hands. IV. Treasury stock consists of shares that were previously sold to investors and later repurchased by the company.",
    choices: {"A": "I, II, & III", "B": "II, III, and IV", "C": "I, II, & IV", "D": "I, III, & IV"},
    correct: "B",
    explanation: "Statements II, III, and IV correctly define key equity terms. Authorized stock is the maximum number of shares the corporation may issue as set forth in its charter. Outstanding stock is issued stock currently held by investors (issued shares minus treasury shares). Treasury stock is stock that was issued, sold to investors, and later repurchased by the company. Statement I is false; there is no requirement that common stock be issued before other classes of stock."
  },
  {
    id: 79,
    question: "What is a prerequisite for a firm to begin conducting business as an investment adviser?",
    choices: {"A": "The firm must have completed the required registration/notice filing and have its registration effective", "B": "A market analysis must be completed", "C": "The firm must hire at least one certified  accountant", "D": "Additional training must be undertaken by the firm's sRtaefsfults: 73 out of 100"},
    correct: "A",
    explanation: "An adviser must be properly registered (or have made any required notice filings) with the SEC or the appropriate state regulator, and that registration must be effective before it may legally conduct business as an investment adviser."
  },
  {
    id: 80,
    question: "What is a blue chip exemption mainly associated with under the Uniform Securities Act?",
    choices: {"A": "Foreign government bonds", "B": "Penny stocks", "C": "Common stocks of large, well-established companies listed on major exchanges", "D": "Real estate investment trusts"},
    correct: "A",
    explanation: "The blue chip exemption applies to certain offerings of securities issued by large, financially sound companies whose common stock is listed on major national exchanges, allowing those offerings to be exempt from state registration under the Uniform Securities Act."
  },
  {
    id: 81,
    question: "Which scenario best exemplifies a breach of client suitability obligations in securities recommendations?",
    choices: {"A": "Recommending a higher-risk security after  fully documenting the client's risk tolerance, financial situation, and investment objectives, and obtaining informed consent", "B": "Offering general insight into market trends without making specific investment recommendations", "C": "Discussing potential risks and returns of various investment options in educational materials that are not tailored to any specific client", "D": "Failing to assess a clientʼs financial background, investment objectives, and risk tolerance before making specific investment recommendations"},
    correct: "D",
    explanation: "Under NASAA and SEC suitability standards, advisers must reasonably inquire into and evaluate a clientʼs financial situation, investment objectives, and risk tolerance before making specific recommendations. Making personalized recommendations without this assessment constitutes a suitability breach."
  },
  {
    id: 82,
    question: "Which statement regarding a variable single- premium deferred annuity (SPDA) is incorrect?",
    choices: {"A": "The contract is funded entirely by a single payment.", "B": "Funds invested are allocated to accumulation units.", "C": "The portfolio value of the separate account grows due to extra investments by the investor after the single premium is paid. ", "D": "The investor postpones receiving payments from the annuity until a specified time, typicallyR easftuelrt sre: t 7 ir 3 em o e u n t t . of 100"},
    correct: "C",
    explanation: "In a variable SPDA, a single premium funds the contract; that premium purchases accumulation units in the separate account, whose value rises or falls with investment performance. The separate account may grow due to investment performance, not ongoing extra contributions by the investor after the single premium is paid."
  },
  {
    id: 83,
    question: "What type of financial entity is typically exempt from securities registration as an issuer under the Uniform Securities Act?",
    choices: {"A": "National banks", "B": "Investment advisers", "C": "Broker-dealers", "D": "Insurance agents"},
    correct: "A",
    explanation: "Under the USA, securities issued or guaranteed by banks (including national banks), savings institutions, and trust companies are exempt securities and do not require registration. Investment advisers and broker-dealers may need to register as firms, but that is separate from securities registration, and insurance agents are not the issuers covered by this exemption."
  },
  {
    id: 84,
    question: "Which of the following activities is prohibited  for someone who has passed the Series 65 exam but is awaiting state registration approval as an investment adviser representative?",
    choices: {"A": "Attend industry seminars", "B": "Prepare marketing materials for future use, provided they are not used with the public", "C": "Execute trades or give investment advice to clients", "D": "Meet with the firm's compliance officer to review procedures"},
    correct: "A",
    explanation: "Passing the Series 65 alone does not authorize a person to conduct advisory business. Until state registration (and firm association, where applicable) is effective, the individual may not give investment advice, solicit clients, or execute trades on their behalf. Internal activities such as training, compliance meetings, and preparing materials for future use are generally permitted so long as they are not used with clients or the public."
  },
  {
    id: 85,
    question: "Which of the following factors is not generally considered positive for the stock market?",
    choices: {"A": "Growing money supply", "B": "Rising interest rates", "C": "Increasing government spending", "D": "Decreasing taxes"},
    correct: "A",
    explanation: "Rising interest rates typically have a negative  impact on stock prices by increasing borrowing costs and making fixed-income investments more attractive relative to stocks."
  },
  {
    id: 86,
    question: "What is the primary responsibility of a principal in a broker-dealer or investment advisory firm regarding the activities of its agents or investment adviser representatives (IARs)?",
    choices: {"A": "To ensure all clients are satisfied with their transactions", "B": "To approve all trades conducted by agents and IARs", "C": "To monitor agents and IARs for any signs of misconduct", "D": "To provide supervision and oversight to ensure compliance with applicable securities laws and firm procedures"},
    correct: "A",
    explanation: "Under securities regulations, principals are responsible for supervising associated persons and enforcing policies and procedures designed to ensure compliance with securities laws and ethical standards. This overall supervisory responsibility goes beyond simply approving trades or watching for misconduct."
  },
  {
    id: 87,
    question: "What is a characteristic of stock rights?",
    choices: {"A": "They provide the ability to purchase additional shares at a set price", "B": "They act as a receipt for the shares held", "C": "They can be converted to preferred stock", "D": "They are only valid for preferred stock  shareholders"},
    correct: "A",
    explanation: "Stock rights (subscription rights) give existing common shareholders the ability to buy additional shares at a specified price for a limited time to maintain their ownership percentage; they are not receipts, not convertible securities, and are not limited to preferred shareholders."
  },
  {
    id: 88,
    question: "An agent of a broker-dealer effects a one-time, isolated non-issuer securities transaction in a state where neither the broker-dealer nor the agent is registered. Which statement is incorrect under the Uniform Securities Act?",
    choices: {"A": "The agent has violated state registration rules because agents must be registered in any state where they effect or attempt to effect securities transactions, even if the transaction itself is exempt", "B": "This transaction falls under an exempt (isolated non-issuer) category for registration of the security", "C": "The agent is not required to register in that state solely because the security involved in the transaction is exempt from registration as an isolated non-issuer transaction", "D": "The firm remains obligated to supervise and monitor the agent's activities related to the transaction"},
    correct: "C",
    explanation: "Under the USA, the isolated non-issuer  exemption applies to registration of the security, not to the licensing of broker-dealers or agents. Agents must be registered in any state where they effect or attempt to effect securities transactions, and the broker-dealer must supervise them. Therefore, the statement that the agent is not required to register in that state for this transaction is incorrect."
  },
  {
    id: 89,
    question: "Which of the following is NOT considered a broker-dealer under the Uniform Securities Act (USA)?",
    choices: {"A": "An individual effecting securities transactions for others as part of a business", "B": "A firm facilitating securities transactions for multiple investors", "C": "An investment manager who recommends securities and executes trades for clients", "D": "A small business selling its own stock directly to investors"},
    correct: "A",
    explanation: "Under the Uniform Securities Act, a broker- dealer is a person in the business of effecting securities transactions for the accounts of others or for its own account. Issuers selling their own securities (such as a small business selling its own stock directly to investors) are excluded from the definition of broker-dealer, so choice (d) is not a broker-dealer."
  },
  {
    id: 90,
    question: "What is the typical duration of a state securities registration before expiration if it is not renewed?",
    choices: {"A": "Until December 1 of the following year", "B": "For a fixed term of five years ", "C": "Until December 31 of the year of registration", "D": "Indefini R te e ly s u u l n ts ti : l e7x3p loicuittly o cfa 1n0ce0led"},
    correct: "A",
    explanation: "Under the Uniform Securities Act, a state securities registration is generally effective for the remainder of the calendar year in which it becomes effective and expires on December 31 of that year unless renewed."
  },
  {
    id: 91,
    question: "Which statement is accurate regarding the criminal penalties as per the Uniform Securities Act?",
    choices: {"A": "The time limit for prosecuting securities fraud lasts 7 years", "B": "The highest punishment can be a 3-year prison sentence, a $5,000 fine, or both", "C": "Unawareness of the law is a valid defense in criminal cases", "D": "There is no time limit for prosecuting securities fraud"},
    correct: "A",
    explanation: "Under the Uniform Securities Act, a person who willfully violates the Act may be punished by up to 3 years' imprisonment, a fine up to $5,000, or both; ignorance of the law is not a defense. The statute of limitations for criminal violations under the USA is 5 years, not 7, so choices (a) and (d) are incorrect."
  },
  {
    id: 92,
    question: "Which of the following is not a power of a state securities regulator (Administrator) under the Uniform Securities Act? ",
    choices: {"A": "Enforcing investment advisory laws within the state", "B": "Imposing criminal penalties (such as imprisonment) directly on violators of securities regulations", "C": "Issuing subpoenas for financial and other relevant records in an investigation", "D": "Revoking an individualʼs investment adviser registration in the state"},
    correct: "A",
    explanation: "Under the Uniform Securities Act, the Administrator can investigate, issue subpoenas, enforce state securities and advisory laws, and deny, suspend, or revoke registrations, as well as impose administrative sanctions or seek civil remedies through the courts. However, the Administrator does not personally impose criminal penalties such as imprisonment; those are ordered by a court after a criminal prosecution brought by the appropriate authority (e.g., the state attorney general)."
  },
  {
    id: 93,
    question: "What amount of semi-annual dividends can an investor expect from a 7% cumulative preferred stock (assume $100 par value)?",
    choices: {"A": "$ 7 per share", "B": "7% of the corporate profits", "C": "$ 3.50 per share", "D": "3.5% of the corporate profits"},
    correct: "A",
    explanation: " A 7% preferred pays 7% of the $100 par value = $7 per year. Paid semiannually, that is $3.50 every six mRonetshusl.ts: 73 out of 100"
  },
  {
    id: 94,
    question: "Under the Uniform Securities Act, how long does a client have to file a civil lawsuit after discovering fraud by an agent or broker-dealer?",
    choices: {"A": "One year", "B": "Two years", "C": "Three years", "D": "Four years"},
    correct: "A",
    explanation: "Under the Uniform Securities Act, a client has two years from the date of discovery of the violation to file a civil action, but in no event may an action be brought more than five years after the violation occurred (statute of repose)."
  },
  {
    id: 95,
    question: "Which of the following is NOT a requirement for an established issuer to register securities in a state by notification (filing) under the Uniform Securities Act?",
    choices: {"A": "Have at least 400,000 shares held by the public (excluding insiders)", "B": "Have a bid price of at least $5 per share", "C": "Have at least 500 shareholders", "D": "Have 5 market makers in the security"},
    correct: "D",
    explanation: "Under the USA, registration by notification  (filing) generally requires, among other things: at least 400,000 shares held by the public, a minimum bid price of $5, at least 500 shareholders, and at least 4 market makers. An explicit requirement for 5 market makers is not part of the rule, so choice (d) is NOT a requirement."
  },
  {
    id: 96,
    question: "What occurs to cash dividends once they are approved by the board of directors?",
    choices: {"A": "They are recorded as revenue for the corporation.", "B": "They become available for immediate payment.", "C": "They become a current liability for the company.", "D": "They are considered part of the asset base."},
    correct: "A",
    explanation: "Once declared by the board, cash dividends become a current liability on the company's balance sheet because the company has an obligation to pay shareholders."
  },
  {
    id: 97,
    question: "Which of the following methods is commonly used to evaluate the risk-adjusted performance of an investment?",
    choices: {"A": "Asset allocation modeling", "B": "Sharpe ratio", "C": "Monte Carlo simulation", "D": "The efficient frontier"},
    correct: "A",
    explanation: " The Sharpe ratio measures the excess return of an investment over the risk-free rate per unit of total risk (stRaensdualrtds :d 7 e 3 vi a o ti u o t n ) o , f p 1 ro 0 v 0 iding a measure of risk-adjusted performance."
  },
  {
    id: 98,
    question: "The total cost of a share purchase (ignoring commissions) is:",
    choices: {"A": "Number of shares times price per share—watch penny-stock decimals so 200 × $0.15 is thirty dollars, not three hundred", "B": "Always the share price alone", "C": "Par value times the number of shares", "D": "The bid-ask spread only"},
    correct: "A",
    explanation: "Cost = shares × price. The exam trap is a slipped decimal on cheap stocks, not a calculator skill."
  },
  {
    id: 99,
    question: "A company declares cash dividends. Which of the following is a direct consequence at the time of declaration?",
    choices: {"A": "Retained earnings will increase", "B": "Total equity will increase", "C": "Current assets will decrease", "D": "Current liabilities will rise"},
    correct: "A",
    explanation: "When a cash dividend is declared, retained earnings (part of shareholdersʼ equity) are reduced and a dividends payable liability (a current liability) is created. Cash, a current asset, is not reduced until the dividend is  actually paid."
  },
  {
    id: 100,
    question: "Under the Uniform Securities Act, for how long is a securities registration statement effective, and what happens to unsold securities at that time?",
    choices: {"A": "It is effective for one year from its effective date; after that, unsold securities must be re- registered to be sold", "B": "It is automatically renewed every year unless canceled by the Administrator", "C": "It may be renewed any number of times at the issuer's request without additional registration", "D": "It remains effective indefinitely until all securities are sold"},
    correct: "A",
    explanation: "Under the USA, a state securities registration is generally effective for one year from its effective date. Once that period ends, any unsold securities can no longer be sold unless a new registration is filed and becomes effective; there is no automatic renewal. 60/60"
  },
  {
    id: 101,
    question: "Which FINRA regulation outlines the requirements for a stock certificate to be considered in good delivery form?",
    choices: {"A": "The Rules of Fair Practice", "B": "The Code of Arbitration", "C": "The Uniform Practice Code", "D": "The Code of Procedure"},
    correct: "C",
    explanation: "The Uniform Practice Code sets standards for member firms' trading and settlement practices, including good delivery requirements and what constitutes a properly negotiable stock certificate."
  },
  {
    id: 102,
    question: "What is a key requirement for individuals wishing to sell securities to the public?",
    choices: {"A": "They must be properly registered (for example, as an agent of a broker-dealer or investment adviser) with the appropriate regulator", "B": "They need a financial advisor certification", "C": "They must have at least two years of experience", "D": "They must complete a marketing course"},
    correct: "A",
    explanation: "Under securities laws (e.g., the Uniform Securities Act), an individual generally must be registered in the proper capacity with the appropriate state or federal regulator (often through a broker-dealer or investment adviser) before effecting securities transactions for others."
  },
  {
    id: 103,
    question: "Which interest rate is typically paid when one U.S. depository institution borrows reserves overnight from another depository institution?",
    choices: {"A": "Federal funds rate", "B": "Discount rate", "C": "LIBOR", "D": "Treasury yield"},
    correct: "A",
    explanation: "The federal funds rate is the rate at which U.S. depository institutions lend reserve balances to other depository institutions overnight. The discount rate is what banks pay when borrowing directly from the Federal Reserve, LIBOR is a benchmark for certain international interbank loans (largely phased out in favor of other reference rates), and Treasury yields are returns on U.S. government securities, not interbank loans."
  },
  {
    id: 104,
    question: "Which type of preferred stock typically provides additional dividends under certain conditions beyond the stated rate?",
    choices: {"A": "Cumulative preferred", "B": "Convertible preferred", "C": "Callable preferred", "D": "Participating preferred"},
    correct: "D",
    explanation: "Participating preferred stock may receive additional dividends above the stated rate when specified conditions are met, such as when common shareholders receive dividends above a certain level."
  },
  {
    id: 105,
    question: "For an investment adviser overseeing $150,000,000 in assets under management, which of the following actions is necessary? I. Register with the state securities Administrator II. Register with the Securities and Exchange Commission (SEC) III. Register with both the SEC and the state Administrator IV. Pay notice filing fees to the states in which the adviser has a place of business or enough clients to require registration if it were state-registered",
    choices: {"A": "I, II, and IV", "B": "II and IV", "C": "I and III", "D": "I and II"},
    correct: "B",
    explanation: "An adviser with $110 million or more in assets under management is a federal covered adviser and must register with the SEC, not the states. Federal covered advisers are exempt from state registration but must make notice filings and pay applicable notice-filing fees in any state where they have a place of business or enough clients that they would otherwise be required to register if they were not federally covered."
  },
  {
    id: 106,
    question: "If an investment adviser representative is found guilty of securities-related misconduct that constitutes a cause for discipline under the Uniform Securities Act, what action is the state Administrator empowered to take regarding registration?",
    choices: {"A": "Only suspend the individual's registration", "B": "Reprimand the individual and the firm but cannot affect registration status", "C": "Deny, suspend, or revoke the registrations of both the individual and the advisory firm", "D": "Nothing, as advisers and their firms have immunity from state action if federally covered"},
    correct: "C",
    explanation: "Under the Uniform Securities Act, state Administrators have broad authority to deny, suspend, or revoke the registrations of both individual investment adviser representatives and advisory firms when there is misconduct falling within statutory grounds for action, subject to due process."
  },
  {
    id: 107,
    question: "If the protection of investors and the public interest is at stake, the Administrator can refuse, suspend, or revoke the license of an investment adviser representative for all of the following reasons except:",
    choices: {"A": "The representative did not reveal her suspension from FINRA four years prior", "B": "The representative does not hold a college degree or an equivalent background in finance or economics", "C": "The representative is bankrupt", "D": "The representative has submitted a false or misleading application"},
    correct: "B",
    explanation: "State Administrators may deny, suspend, or revoke registration for causes such as failure to disclose prior disciplinary actions, bankruptcy/insolvency concerns, or submitting false or misleading information. Lack of a college degree or specific academic background alone is not a disqualifying reason if the individual otherwise meets the Administrator's qualification standards."
  },
  {
    id: 108,
    question: "What is the primary purpose of cumulative voting in corporate governance?",
    choices: {"A": "To ensure minority shareholders can elect board members.", "B": "To simplify the voting process for shareholders.", "C": "To increase the size of the board.", "D": "To allow board members to have more voting power."},
    correct: "A",
    explanation: "Cumulative voting allows shareholders to concentrate their votes on fewer candidates, increasing the likelihood that minority shareholders can elect at least one board member."
  },
  {
    id: 109,
    question: "Which of the following does NOT qualify as a federally covered security?",
    choices: {"A": "Debentures of XYZ Corporation (XYZ's common stock is listed on the Boston Stock Exchange, a national securities exchange)", "B": "Securities issued in connection with certain employee benefit plans that are exempt under federal law", "C": "Preferred stock of ABC Corporation quoted on the OTC Bulletin Board", "D": "Option contracts traded on a national securities exchange"},
    correct: "C",
    explanation: "Preferred stock quoted only on the OTC Bulletin Board is not federally covered because the OTCBB is not a national securities exchange. Federally covered securities include those listed on national exchanges (and their senior securities, such as debentures), certain SEC-registered offerings, exempt securities under federal law (including qualifying employee benefit plans), registered investment company securities, and option contracts traded on national securities exchanges."
  },
  {
    id: 110,
    question: "Which types of organizations permit their employees to contribute to a Tax Sheltered Annuity (TSA), also known as a 403(b) plan?",
    choices: {"A": "Public schools and certain nonprofit organizations (e.g., private nonprofit schools, charities, and some daycare centers)", "B": "Only public schools", "C": "Only private hospitals", "D": "Corporate offices"},
    correct: "A",
    explanation: "TSAs (403(b) plans) are available to employees of public school systems and certain tax-exempt organizations (typically 501(c)(3) nonprofits), such as private nonprofit schools, charitable organizations, and some nonprofit daycare centers. They are not generally available to employees of for-profit corporations."
  },
  {
    id: 111,
    question: "What is the impact of a security with a low beta on its performance relative to the market?",
    choices: {"A": "Its returns will be largely uncorrelated with the market, moving independently of market swings.", "B": "It will outperform the market during price increases and underperform during price declines.", "C": "It will underperform the market when prices rise and outperform when prices fall.", "D": "It will outperform the market regardless of price changes."},
    correct: "C",
    explanation: "A low-beta security is less sensitive to market movements (less volatile), so it tends to have smaller gains than the market in rising markets (relative underperformance) and smaller losses than the market in falling markets (relative outperformance)."
  },
  {
    id: 112,
    question: "An investor forfeits their rights if they fail to accept a legitimate rescission offer from a firm within what time frame under the Uniform Securities Act?",
    choices: {"A": "30 days", "B": "45 days", "C": "15 days", "D": "60 days"},
    correct: "A",
    explanation: "Under the Uniform Securities Act, an investor must accept a rescission offer within 30 days from the date of the offer to retain the right to pursue further legal remedies; failure to accept within 30 days forfeits that right."
  },
  {
    id: 113,
    question: "What is the primary purpose of a stop order issued by the Administrator in the context of a security's registration under the Uniform Securities Act (USA)?",
    choices: {"A": "To initiate trading of a security at a premium price", "B": "To specify the minimum price at which a security can be sold", "C": "To protect investors from market volatility", "D": "To deny, suspend, or revoke the effectiveness of a security's registration, preventing its public offering until regulatory concerns are addressed"},
    correct: "D",
    explanation: "Under the USA, a stop order is an order by the Administrator to deny, suspend, or revoke the effectiveness of a security's registration. This prevents the security from being legally offered or sold to the public in that state until registration deficiencies are corrected or regulatory concerns are resolved."
  },
  {
    id: 114,
    question: "What is a potential consequence for investors if a company decides to liquidate?",
    choices: {"A": "Common stockholders may not receive any repayment until all debts are settled.", "B": "Common stockholders receive priority repayment over creditors.", "C": "Common stockholders automatically receive a refund of their investment.", "D": "Common stockholders are guaranteed a set dividend during liquidation."},
    correct: "A",
    explanation: "In a liquidation, secured and unsecured creditors, and then preferred stockholders, are paid before common stockholders. Common stockholders are last in line and may receive nothing if no assets remain after satisfying prior claims."
  },
  {
    id: 115,
    question: "Which of the following identifies the primary aim of the Series 65 examination?",
    choices: {"A": "To evaluate knowledge of personal finance", "B": "To assess understanding of state securities regulations and related investment advisory topics", "C": "To test investment management skills", "D": "To measure economic theory knowledge"},
    correct: "B",
    explanation: "The Series 65 exam is intended to determine whether an individual has the knowledge of state and federal securities laws, regulations, ethical requirements, and related investment advisory subjects necessary to act as an investment adviser representative."
  },
  {
    id: 116,
    question: "Your client's stock certificate was badly damaged in a flood. Who has the authority to authenticate this certificate so that a replacement can be issued?",
    choices: {"A": "The transfer agent and the registrar", "B": "The principal of the firm, the transfer agent, the bank officer, and the registrar", "C": "The transfer agent and the bank officer", "D": "The principal of the firm and the transfer agent"},
    correct: "A",
    explanation: "Only the issuer's transfer agent and the corporate registrar are authorized to validate or authenticate mutilated or damaged stock certificates and arrange for replacement certificates. Broker-dealer principals and bank officers may assist in the process (for example, by guaranteeing signatures) but do not have the authority to authenticate the certificates themselves."
  },
  {
    id: 117,
    question: "Which of the following best describes an investment adviser under the Uniform Securities Act?",
    choices: {"A": "A publisher of a market newsletter charging a $400 yearly fee that provides specific securities recommendations to subscribers", "B": "J. Smith, the proprietor of J. Smith Advisors, who manages portfolios and charges an annual fee for that service", "C": "A brokerage firm that offers advice to its clients solely as part of its normal brokerage business and receives only commissions", "D": "A certified public accountant who only provides incidental investment advice while preparing client tax returns and charges no separate fee for the advice"},
    correct: "A",
    explanation: "Under the Uniform Securities Act, an investment adviser is a person who, for compensation, is in the business of providing advice about securities. A publisher that provides specific securities recommendations for a fee is an investment adviser because the advice is about specific securities, it is given as a business, and there is compensation. Broker-dealers and professionals such as CPAs are excluded when their investment advice is solely incidental to their primary business and no special compensation is received."
  },
  {
    id: 118,
    question: "An investor has recently entered the payout (annuity) stage of their non-qualified variable annuity and is curious about the tax implications of their distributions. What should you inform them?",
    choices: {"A": "You will only be taxed on the earnings (growth) portion of each distribution; that portion is taxed as ordinary income", "B": "Your distributions will be tax-exempt", "C": "You will need to pay capital gains taxes on the funds", "D": "You must pay ordinary income taxes on the full amount"},
    correct: "A",
    explanation: "For non-qualified variable annuities, the portion of each payment representing a return of principal (cost basis) is tax-free; only the earnings portion is taxable, and those earnings are taxed as ordinary income, not capital gains."
  },
  {
    id: 119,
    question: "In a period of rising inflation, which of the following asset types is likely to experience the most significant price decrease?",
    choices: {"A": "Long-term Treasury bonds", "B": "Common stock", "C": "Treasury bills", "D": "Preferred stock"},
    correct: "A",
    explanation: "Rising inflation generally leads to higher interest rates, which reduce the present value of fixed interest payments. Long-term Treasury bonds have the longest duration and are most sensitive to interest rate increases, so their prices typically fall the most. Treasury bills are very short-term and much less affected; preferred stock and common stock can be influenced by rates and inflation but are not as immediately or directly impacted as long-term fixed-rate government bonds."
  },
  {
    id: 120,
    question: "Which of the following statements or items is not permitted to be displayed on an investment firm's website?",
    choices: {"A": "A factual statement that the State Administrator regulates the securities industry in that state", "B": "The goals or mission of the firm", "C": "The firm's assets under management, provided the figure is accurate and not misleading", "D": "The FINRA logo, suggesting approval or endorsement by FINRA"},
    correct: "D",
    explanation: "Using a regulator's or SRO's seal or logo (such as FINRA's) in a way that implies approval, registration, or endorsement is prohibited unless specifically authorized. Factual statements about regulation, the firm's goals, or accurate AUM figures are generally permitted so long as they are not false or misleading."
  },
  {
    id: 121,
    question: "For what two reasons may the state Administrator scrutinize an agent's application for registration under the Uniform Securities Act?",
    choices: {"A": "A misdemeanor involving securities and citizenship", "B": "A misdemeanor involving securities and a pattern of late credit payments", "C": "A misdemeanor DUI and citizenship", "D": "A misdemeanor DUI and a pattern of late credit payments"},
    correct: "B",
    explanation: "Under the USA, the Administrator is concerned with securities-related misdemeanors and evidence of financial irresponsibility (such as a pattern of late credit payments, bankruptcies, or unsatisfied judgments) because these bear directly on an applicant's honesty and integrity. Citizenship status and non-securities-related misdemeanors like a routine DUI are not, by themselves, statutory grounds for denial."
  },
  {
    id: 122,
    question: "Which of the following requirements are exempted for exempt securities under federal and state securities laws? I. Registration with the SEC II. Filing of sales literature and advertising III. State registration requirements IV. Anti-fraud provisions",
    choices: {"A": "I, II, III, IV", "B": "II and III", "C": "I only", "D": "I, II, and III"},
    correct: "D",
    explanation: "Exempt securities are not subject to federal or state registration or filing requirements (items I, II, and III), but they remain fully subject to federal and state anti-fraud provisions (item IV), which are never waived."
  },
  {
    id: 123,
    question: "What actions can a registered broker-dealer who is part of a syndicate take during the cooling-off (waiting) period? I. Accept orders to purchase the new issue II. Distribute a preliminary prospectus (red herring) III. Run tombstone advertisements IV. Confirm sales with investors",
    choices: {"A": "I and II", "B": "II only", "C": "II and III", "D": "I and IV"},
    correct: "C",
    explanation: "During the cooling-off (waiting) period, syndicate members may distribute the preliminary prospectus (red herring) and run limited tombstone-type advertisements, and may solicit only nonbinding indications of interest. They may not accept binding orders to purchase or confirm actual sales until the registration is declared effective."
  },
  {
    id: 124,
    question: "An investment adviser is approached by the son of an 82-year-old client who claims he will serve as the executor of her estate. The son believes his mother's investment strategy does not align with her objectives and seeks details about her account. What should the investment adviser do?",
    choices: {"A": "Provide the information since the son is the executor", "B": "Refuse to share any details without the client's written consent or appropriate legal authorization", "C": "Disclose information if he agrees with the son's perspective", "D": "Recommend that the son transfer the funds to a more conservative investment"},
    correct: "B",
    explanation: "Client confidentiality must be maintained. The adviser may not release account information without the client's written consent or appropriate legal authorization (e.g., a valid durable power of attorney or a court-appointed conservator/guardian). An executor's authority arises only after appointment following the client's death and does not permit access while the client is alive."
  },
  {
    id: 125,
    question: "Which of the following charges is not typically deducted from the separate account of a variable life insurance policy?",
    choices: {"A": "Administrative fee", "B": "Management fee", "C": "Mortality risk fee", "D": "Expense risk fee"},
    correct: "A",
    explanation: "Administrative fees are generally taken from the gross premium (or billed separately) before the remainder is invested in the separate account. By contrast, management (investment) fees, mortality (cost of insurance) charges, and expense risk charges are commonly deducted from the separate account's assets."
  },
  {
    id: 126,
    question: "In accordance with NASAA's Policy Statement on Dishonest or Unethical Business Practices of Broker-Dealers and Agents, which of the following actions is not considered prohibited?",
    choices: {"A": "A broker-dealer purchases REITs for a non-discretionary client without notifying the client, believing the investment is appropriate.", "B": "A broker-dealer executes an unsolicited trade in a non-discretionary account upon the client's verbal instruction.", "C": "A registered representative suggests a growth stock with a very high P/E ratio to all of her 100 clients uniformly, without performing an individualized suitability analysis.", "D": "A registered representative processes an order from a non-discretionary client's spouse without having third-party trading authorization."},
    correct: "B",
    explanation: "Executing an unsolicited trade in a non-discretionary account at the client's verbal direction is permitted and not considered dishonest or unethical. NASAA's policy does, however, prohibit unauthorized trading in non-discretionary accounts, third-party trading without written authorization, and blanket recommendations made without considering each client's individual suitability."
  },
  {
    id: 127,
    question: "If an investment adviser representative moves from firm XYZ to firm ABC in the same state on November 1, what must they do regarding state registration?",
    choices: {"A": "Register with the state (through the new firm) effective November 1 and then renew at the next annual state renewal date (typically December 31)", "B": "Need not do anything new as long as they remain in the same state", "C": "Wait and reregister on May 1 of the following year", "D": "Only pay a prorated registration fee on November 1; no new registration filing is required"},
    correct: "A",
    explanation: "Under the Uniform Securities Act, an IAR's registration is specific to the employing firm. When changing firms, the new firm must file for registration in the state effective when employment begins; registration then renews at the normal annual renewal date, typically December 31. There is no rule that allows waiting until a later date or paying only a prorated fee without a new filing."
  },
  {
    id: 128,
    question: "Which of the following statements is true regarding exempt securities under the Uniform Securities Act?",
    choices: {"A": "They are limited to government-issued securities only.", "B": "They can only be sold to accredited investors.", "C": "They are always considered safe investments.", "D": "They are not required to be registered with the state for sale."},
    correct: "D",
    explanation: "Under the Uniform Securities Act, exempt securities are not required to be registered with the state to be sold, although they remain subject to anti-fraud provisions and, in some cases, may be subject to notice filings and fees."
  },
  {
    id: 129,
    question: "What defines a federally covered security under the Uniform Securities Act and NSMIA?",
    choices: {"A": "It is more secure than other forms of investment", "B": "It is restricted to open-end investment companies that distribute shares via a prospectus", "C": "It requires approval from the state securities administrator", "D": "It is exempt from state registration requirements"},
    correct: "D",
    explanation: "Under NSMIA, federally covered securities are exempt from state registration, though states may still require notice filings and fees in some cases."
  },
  {
    id: 130,
    question: "What type of risk is inherently associated with American Depositary Receipts (ADRs) aside from market risk?",
    choices: {"A": "Liquidity risk", "B": "Credit risk", "C": "Foreign currency risk", "D": "Inflation risk"},
    correct: "C",
    explanation: "ADRs represent shares of foreign companies, and their U.S. dollar value can be affected by changes in the underlying foreign currency exchange rate, exposing investors to foreign currency risk."
  },
  {
    id: 131,
    question: "Which of the following risks are linked to the ownership of American Depository Receipts (ADRs)? I. Market risk II. Currency exchange risk III. Business risk IV. Political risk",
    choices: {"A": "II, III & IV", "B": "I, II & IV", "C": "I & II", "D": "I, II, III & IV"},
    correct: "D",
    explanation: "ADRs represent ownership in foreign companies and trade in U.S. markets, so they carry general market risk (I), currency exchange risk because underlying shares and dividends are affected by exchange rates (II), company-specific business risk (III), and political/country risk affecting foreign issuers (IV)."
  },
  {
    id: 132,
    question: "Which of the following correctly states the relationship depicted by the balance sheet equation?",
    choices: {"A": "Total liabilities equal total equity minus total assets", "B": "Total assets minus total liabilities equals total revenues", "C": "Total assets represent owners' equity", "D": "Total assets equal total liabilities plus owners' equity"},
    correct: "D",
    explanation: "The balance sheet equation is Assets = Liabilities + Owners' Equity. Therefore, total assets must equal total liabilities plus owners' equity."
  },
  {
    id: 133,
    question: "Which of the following fees are most commonly associated with managed (fee-based) investment accounts offered by investment advisers?",
    choices: {"A": "Transaction fees only", "B": "A flat annual fee only", "C": "Performance fees only", "D": "Management (advisory) fees and, in some cases, performance-based fees"},
    correct: "D",
    explanation: "Managed (fee-based) accounts are typically charged an ongoing management or advisory fee based on assets under management. In some cases—subject to regulatory limits, client eligibility, and full disclosure—performance-based fees may also be charged. They are not limited to transaction-only or flat annual-only charges."
  },
  {
    id: 134,
    question: "An agent is aware that a new issue will be oversubscribed. Acting on verbal instructions, he opens an account for his spouse and places allocations of the new issue into it. How is this situation categorized?",
    choices: {"A": "Acceptable as it involves his spouse", "B": "Allowed if under $10,000 in securities", "C": "A breach of regulations and a violation", "D": "An infringement since one cannot act on behalf of another"},
    correct: "C",
    explanation: "Allocations from a hot new issue (one that is oversubscribed) cannot be reserved, diverted, or otherwise directed for the personal benefit of the agent or the agent's immediate family. Opening an account for the spouse to receive shares of an oversubscribed new issue is prohibited and constitutes a regulatory and ethical violation."
  },
  {
    id: 135,
    question: "Which of the following actions could prohibit an investment adviser from obtaining registration under the Uniform Securities Act?",
    choices: {"A": "Having had a registration as an investment adviser denied or revoked by another state within the past 10 years", "B": "Having previously been registered as a broker-dealer", "C": "Being a subsidiary of a company that issues securities to the public", "D": "Serving concurrently in multiple financial services roles at the same institution"},
    correct: "A",
    explanation: "Under the Uniform Securities Act, a state Administrator may deny, suspend, or revoke registration if the applicant has had registration denied or revoked by another state or regulator within the past 10 years. The other items, by themselves, are not grounds for denying registration."
  },
  {
    id: 136,
    question: "Which investment vehicles allow contributions made with after-tax money?",
    choices: {"A": "401(k) and Traditional IRA", "B": "Pension Plan and TSA", "C": "Roth IRA and Nonqualified Annuity", "D": "Roth IRA and Qualified Annuity"},
    correct: "C",
    explanation: "Roth IRAs are funded with after-tax dollars. Nonqualified annuities are purchased with after-tax money and grow tax-deferred. By contrast, qualified plans (401(k), pensions, TSAs, qualified annuities) are generally funded with pre-tax dollars or on a tax-deductible basis, so their contributions are not considered after-tax in this context."
  },
  {
    id: 137,
    question: "Which of the following would NOT be subject to the anti-fraud provisions of the Uniform Securities Act?",
    choices: {"A": "Federal covered security", "B": "Whole life insurance", "C": "U.S. Treasury note", "D": "None of the choices provided"},
    correct: "B",
    explanation: "Whole life insurance is a fixed insurance contract and is not a security, so it is not governed by the Uniform Securities Act's anti-fraud provisions. By contrast, federal covered securities and U.S. Treasury notes are securities and are fully subject to the Act's anti-fraud rules."
  },
  {
    id: 138,
    question: "How often must an investment adviser with custody of client funds provide account statements to their clients?",
    choices: {"A": "Monthly", "B": "Promptly", "C": "Quarterly", "D": "Annually"},
    correct: "C",
    explanation: "Investment advisers that have custody must arrange for a qualified custodian to hold client assets, and clients must receive account statements at least quarterly from the adviser or the qualified custodian."
  },
  {
    id: 139,
    question: "Which of the following accurately describes the primary purpose of annuities?",
    choices: {"A": "Annuities exclusively benefit beneficiaries after the policyholder passes away.", "B": "Annuities provide a stream of income to the investor while they are still alive.", "C": "Annuities are meant solely for education funding.", "D": "Annuities require the investor to be disabled for payouts to occur."},
    correct: "B",
    explanation: "Annuities are designed primarily to provide periodic income payments to the contract owner or annuitant during their lifetime (commonly for retirement), whereas life insurance primarily provides death benefits to beneficiaries."
  },
  {
    id: 140,
    question: "Which of the following benefits is associated with fixed annuities?",
    choices: {"A": "Flexible withdrawal options", "B": "High potential returns from stock market investments", "C": "Premiums invested in separate accounts", "D": "Predictable periodic income stream"},
    correct: "D",
    explanation: "Fixed annuities provide a guaranteed fixed interest rate and a predictable periodic income stream; the insurer bears the investment risk. They are not tied to separate accounts or stock market performance, and withdrawals are often limited or subject to surrender charges and penalties."
  },
  {
    id: 141,
    question: "XYZ Corporation announces (declares) a cash dividend. What effect will this have on the financial statements at the time of declaration?",
    choices: {"A": "Current liabilities will go up", "B": "Paid-in surplus will decline", "C": "Treasury stock will reduce", "D": "Par value will lessen"},
    correct: "A",
    explanation: "When the board declares a cash dividend, the company records dividends payable, a current liability, and reduces retained earnings. This increases current liabilities but does not affect paid-in surplus (additional paid-in capital), treasury stock, or par value."
  },
  {
    id: 142,
    question: "Individuals can acquire warrants in all of the following manners except:",
    choices: {"A": "Investors might purchase warrants linked to preferred stock from the issuing company.", "B": "Companies can attach warrants to their bonds to enhance their appeal to investors.", "C": "Investors aiming to benefit from potential increases in common stock prices may choose to buy warrants instead of common shares.", "D": "Companies will grant warrants to those who have purchased their common stock during the initial public offering."},
    correct: "A",
    explanation: "Warrants are typically issued exercisable into common stock and are most commonly attached to bonds or offered with equity issues; they can also trade separately. They are not normally issued as warrants exercisable into preferred stock, so acquiring 'warrants linked to preferred stock' is not a standard manner of obtaining them."
  },
  {
    id: 143,
    question: "An investment adviser handling retail investor accounts imposes a fixed annual fee of $1,800 for accounts below $100,000 in assets. Under the Uniform Securities Act (USA) and NASAA guidance, this practice is:",
    choices: {"A": "An infraction, as it favors larger investors", "B": "Acceptable, provided the fee is reasonable, fully disclosed in the advisory contract and Form ADV, and not unfairly discriminatory", "C": "An infraction, as advisers cannot charge a fixed fee", "D": "An infraction, as advisers cannot impose a fee defined as a set dollar amount"},
    correct: "B",
    explanation: "Under the USA and NASAA guidance, investment advisers may charge asset-based, hourly, or flat (fixed) fees, including minimum or set dollar amounts, as long as fees are reasonable in light of services provided, fully disclosed in the advisory contract and Form ADV, and not unfairly discriminatory among similarly situated clients."
  },
  {
    id: 144,
    question: "Regarding the consent to service of process, which statements are correct? I. It is a contract appointing the Administrator as agent to receive legal process on behalf of the registrant; service on the Administrator is equivalent to service on the registrant. II. This requirement applies solely to broker-dealers and investment advisers. III. Any action related to the business conducted in the state, when served to the Administrator's office, will also bind all agents and principals of the firm. IV. The registrant is obliged to submit an ethical business affidavit along with the consent to service of process.",
    choices: {"A": "II and IV", "B": "I, II, III, and IV", "C": "I, II, and IV", "D": "I only"},
    correct: "D",
    explanation: "Statement I is correct: the consent to service of process appoints the Administrator as agent to receive legal process on behalf of the registrant, and service on the Administrator is equivalent to service on that registrant. Statement II is incorrect because the requirement applies to all registrants (broker-dealers, agents, investment advisers, and investment adviser representatives). Statement III is incorrect because service on the Administrator binds the registrant that filed the consent, not automatically every agent or principal of the firm. Statement IV is incorrect because there is no ethical business affidavit requirement under the consent to service of process."
  },
  {
    id: 145,
    question: "When a tax-deferred annuity is annuitized (converted to periodic payments), how is the investor's tax liability on each payment determined?",
    choices: {"A": "The entire distribution is taxed at the estate tax rate.", "B": "Only the growth portion is subject to capital gains tax.", "C": "The investor pays capital gains tax on the total amount received.", "D": "The tax burden is assessed based on a specific exclusion ratio."},
    correct: "D",
    explanation: "Upon annuitization, each payment is divided into a tax-free return of principal and a taxable earnings portion using an exclusion ratio; the taxable portion is treated as ordinary income, not capital gains."
  },
  {
    id: 146,
    question: "Under the Uniform Securities Act and NASAA guidance, in which of the following situations is an investment adviser deemed to have custody of client assets? I. The adviser physically holds client funds or securities in its office or in an account under its control. II. The adviser has discretionary authority to place trades in a client's account but no authority to remove funds or securities. III. The adviser is authorized to withdraw client funds or securities from a custodian account (for example, through full power of attorney or check-writing authority). IV. The adviser receives client checks made payable to a third party and forwards them promptly to the appropriate custodian within three business days.",
    choices: {"A": "I, II, and IV", "B": "I & III", "C": "I, II, III, and IV", "D": "I and II"},
    correct: "B",
    explanation: "Under the USA and NASAA Model Rule, an adviser has custody when it actually holds client funds or securities (I) or has authority to withdraw them from a client account (III). Discretionary trading authority alone (II) is not custody, and properly forwarding third-party checks without delay (IV) does not create custody."
  },
  {
    id: 147,
    question: "What is a typical characteristic of contributions to a nonqualified annuity?",
    choices: {"A": "They are made with pre-tax money", "B": "They provide tax-free withdrawals", "C": "Growth within the annuity is taxed immediately", "D": "Contributions are made with after-tax money"},
    correct: "D",
    explanation: "Most nonqualified annuities are funded with after-tax dollars; earnings then grow tax-deferred and are taxed as ordinary income when withdrawn."
  },
  {
    id: 148,
    question: "If an investment adviser terminates an investment adviser representative's employment, who is responsible for informing the state Administrator?",
    choices: {"A": "The representative alone", "B": "Both the representative and the investment adviser", "C": "No one; the Administrator updates the record automatically", "D": "The investment adviser firm that employed the representative"},
    correct: "D",
    explanation: "Under the Uniform Securities Act, when an investment adviser representative's employment is terminated, the employing investment adviser must promptly notify the state Administrator on Form U5 (or the appropriate termination form). The individual investment adviser representative does not have the filing responsibility in this situation."
  },
  {
    id: 149,
    question: "A client instructs their agent to sell 1,000 shares of XYZ. Prior to executing the order, the agent informs the client about an upcoming earnings report expected to positively impact the stock. The client chooses to proceed with the sale regardless. The agent then delays executing the client's sell order until the next day, when the stock trades at a significantly higher price. This scenario represents:",
    choices: {"A": "A breach known as front running", "B": "An example of a full-service broker", "C": "A breach; an agent is required to follow client instructions and to execute orders promptly", "D": "A breach known as trading ahead of research"},
    correct: "C",
    explanation: "Agents must promptly execute customer orders and follow client instructions. Intentionally delaying execution without the client's authorization is a breach of that duty, even if the client ultimately benefits from the delay."
  },
  {
    id: 150,
    question: "When dealing with an unsolicited order in a client's account, which of the following actions is typically required of an adviser or broker-dealer agent to maintain ethical standards?",
    choices: {"A": "Only inform the buyer about the execution price after the trade is completed", "B": "Document that the order was unsolicited and ensure the transaction is not clearly unsuitable or otherwise improper for the client", "C": "Automatically reject all unsolicited orders without further action", "D": "Charge a higher commission for handling unsolicited orders due to added risk"},
    correct: "B",
    explanation: "For unsolicited orders, the firm must mark and document the order as unsolicited and still has a duty to avoid clearly unsuitable or improper transactions. They do not reject all such orders, overcharge, or limit disclosure to price only."
  },
  {
    id: 151,
    question: "Which statement is accurate regarding individuals who provide investment advice as part of their professional duties?",
    choices: {"A": "All financial advisors must register as investment advisers regardless of the type of advice given.", "B": "Professionals such as lawyers and accountants can give investment advice without being classified as investment advisers if the advice is incidental to their primary profession, they do not hold themselves out as investment advisers, and they do not receive special compensation for that advice.", "C": "Only certified financial planners are allowed to give investment advice.", "D": "Investment advisers can never provide advice related to their primary profession."},
    correct: "B",
    explanation: "Lawyers, accountants, teachers, and engineers (and similar professionals) are typically excluded from the definition of investment adviser when any investment advice they give is incidental to their professional practice, they do not hold themselves out as investment advisers, and they do not receive special compensation for that advice."
  },
  {
    id: 152,
    question: "Which action is typically associated with stock price manipulation?",
    choices: {"A": "Providing earnings forecasts", "B": "Earning an appropriate commission", "C": "Executing genuine trades", "D": "Engaging in matched orders"},
    correct: "D",
    explanation: "Matched orders are prearranged trades between parties to create an illusion of increased trading volume or price movement, a common form of price manipulation."
  },
  {
    id: 153,
    question: "Which of these factors is impacted by changes in the assumed interest rate (AIR) in a variable annuity? I. Payment schedule II. Annuity payout amount III. Plan contribution levels IV. Investment performance",
    choices: {"A": "II only", "B": "I and II", "C": "II and III", "D": "II and IV"},
    correct: "A",
    explanation: "The AIR is used to establish and adjust the annuity payout amount (II). It does not change the contractually selected payment schedule (I), investor contribution amounts (III), or the actual investment performance of the separate account (IV)."
  },
  {
    id: 154,
    question: "When quoting the dollar cost of a penny-stock purchase, the usual trap is:",
    choices: {"A": "Always multiplying by 100 as if it were an option contract", "B": "Misplacing the decimal: shares × price per share, so 500 × $0.12 is $60, not $600", "C": "Using the bid instead of ignoring commissions", "D": "Treating pennies as par value"},
    correct: "B",
    explanation: "Identity plus a decimal trap. Series 65 does not need a multiplication drill."
  },
  {
    id: 155,
    question: "To lawfully sell securities on behalf of a broker-dealer, what is required of the individual?",
    choices: {"A": "A college degree in finance or a related field", "B": "Registration as an agent of the broker-dealer with the appropriate regulator(s)", "C": "At least two years of prior securities experience", "D": "Passing a qualification exam, but registration is not necessary"},
    correct: "B",
    explanation: "Under the Uniform Securities Act and related rules, an individual must be properly registered as an agent of the broker-dealer with the appropriate regulator(s) to lawfully sell securities. Passing a qualification exam is usually part of obtaining that registration, but the legal requirement to engage in sales activity is being duly registered."
  },
  {
    id: 156,
    question: "How many consecutive quarters must a decline in gross domestic product persist to be commonly classified as a recession, according to the traditional rule of thumb?",
    choices: {"A": "Four quarters", "B": "Two quarters", "C": "Six quarters", "D": "One quarter"},
    correct: "B",
    explanation: "By the traditional rule of thumb often used in exams, a recession is defined as two consecutive quarters of negative GDP growth, even though the NBER considers a wider range of data when making official determinations."
  },
  {
    id: 157,
    question: "Quarterly holding-period return on a stock includes:",
    choices: {"A": "Price change plus dividends, divided by beginning price; multiplying by 4 is a crude annualization, not compound return", "B": "Price change only; dividends are ignored", "C": "Dividends only", "D": "EPS divided by price"},
    correct: "A",
    explanation: "HPR = (ΔP + income) / begin. Simple ×4 annualization is not the same as compounding. Skip the 12.5% × 4 = 50% worksheet."
  },
  {
    id: 158,
    question: "Which category of securities does not require registration with each state under the Uniform Securities Act before being offered there?",
    choices: {"A": "Exempt securities", "B": "Newly issued stocks", "C": "Bonds sold internationally", "D": "Exchange-traded funds"},
    correct: "A",
    explanation: "Under the Uniform Securities Act, exempt securities (such as U.S. government and municipal securities, among others) are excluded from state registration requirements and may be offered without state registration."
  },
  {
    id: 159,
    question: "Which statement is true regarding an investment adviser's responsibility to notify clients of changes in the advisory firm?",
    choices: {"A": "They can decide not to disclose any changes in the firm's ownership or structure.", "B": "They must inform clients about significant (material) changes such as changes in ownership or partnership structure.", "C": "They are only required to update institutional clients about material changes.", "D": "They do not have to inform clients about changes in the partnership if services remain the same."},
    correct: "B",
    explanation: "Under the Investment Advisers Act and parallel state rules, advisers have a fiduciary duty and must update and deliver Form ADV (or a summary of material changes) to clients when there are material changes, including significant changes in ownership or partnership structure."
  },
  {
    id: 160,
    question: "What are the two primary tools the government employs to influence economic direction?",
    choices: {"A": "Prime rate policy and fiscal policy", "B": "Monetary policy and fiscal policy", "C": "Fiscal policy and money market policy", "D": "Monetary policy and prime rate policy"},
    correct: "B",
    explanation: "Monetary policy, conducted primarily by the Federal Reserve, manages the money supply and interest rates; fiscal policy, set by Congress and the President, involves government spending and taxation. Together, these are the two main tools used to influence overall economic activity."
  },
  {
    id: 161,
    question: "What type of bond is issued at a discount and matures at face value without paying interest until maturity?",
    choices: {"A": "Callable bonds", "B": "Corporate bonds", "C": "Zero coupon bonds", "D": "Municipal bonds"},
    correct: "C",
    explanation: "Zero coupon bonds are sold at a deep discount and do not pay periodic interest; the investor receives a single lump-sum (face) payment at maturity."
  },
  {
    id: 162,
    question: "What is the formula for calculating current yield?",
    choices: {"A": "Annual income / par (face) value", "B": "Monthly income / current price", "C": "Annual income / purchase price", "D": "Annual income / current price"},
    correct: "D",
    explanation: "Current yield is the annual income (typically interest or dividends) divided by the security's current market price. If income is stated monthly, multiply by 12 to annualize it before dividing by the current price."
  },
  {
    id: 163,
    question: "After signing the advisory services contract, how many business days does a new client have to cancel without penalty if they receive Form ADV Part 2 (the adviser's brochure) from their portfolio manager at the time of signing?",
    choices: {"A": "48 hours", "B": "3 days", "C": "10 days", "D": "5 business days"},
    correct: "D",
    explanation: "If an adviser does not deliver Form ADV Part 2 at least 48 hours before the client signs the advisory contract, and instead delivers it at the time of signing, the client must be given at least 5 business days after entering into the contract to terminate it without penalty."
  },
  {
    id: 164,
    question: "A lawyer earning $230,000 annually has maximized contributions to his Keogh plan. A full-time paralegal earning $65,000 asks about retirement plan contributions. What should the lawyer be advised?",
    choices: {"A": "You are required to make a contribution to your employee's Keogh plan at the same percentage of compensation as you make for yourself.", "B": "You can choose how much to contribute for your employees since you are self-employed.", "C": "You must contribute the same dollar amount to your employee's Keogh as you did to your own.", "D": "The employee isn't self-employed and therefore cannot have a Keogh plan."},
    correct: "A",
    explanation: "Keogh (HR-10) plans for self-employed individuals must cover eligible employees on a nondiscriminatory basis; employer contributions must be made using the same percentage of compensation for eligible employees as for the owner, not the same dollar amount."
  },
  {
    id: 165,
    question: "An investment adviser who is not involved in any disciplinary or enforcement proceedings has filed to cancel (withdraw) their registration under the Uniform Securities Act. Which of the following statements are accurate? I. If no proceedings are pending, the withdrawal will normally become effective 30 days after the filing date. II. The Administrator may allow the withdrawal to become effective earlier than 30 days after filing if no action is contemplated. III. The Administrator may arbitrarily extend the effective date of the withdrawal beyond 30 days even when no investigations or proceedings are pending. IV. Even after the withdrawal becomes effective, the Administrator retains authority to initiate actions for violations that occurred while the adviser was registered.",
    choices: {"A": "I, II, and IV", "B": "I and III", "C": "II and IV", "D": "I, II, III, and IV"},
    correct: "A",
    explanation: "Under the USA, a withdrawal normally becomes effective 30 days after filing if no proceedings are pending, and the Administrator may permit an earlier effective date if no action is contemplated. The Administrator may not arbitrarily delay effectiveness beyond 30 days in the absence of a proceeding or investigation but does retain authority to bring actions for violations that occurred while the adviser was registered, even after withdrawal is effective."
  },
  {
    id: 166,
    question: "What does an investment's beta quantify?",
    choices: {"A": "Reinvestment risk", "B": "Business risk", "C": "Nonsystematic risk", "D": "Systematic risk"},
    correct: "D",
    explanation: "Beta measures an investment's systematic (market) risk or volatility relative to the overall market; it does not measure diversifiable (nonsystematic) risk."
  },
  {
    id: 167,
    question: "An Investment Adviser Representative (IAR) employed by a state-registered investment adviser in New York has several non-institutional clients in Florida and one client with an investment of $10,000,000 in Colorado. Where does the IAR need to register?",
    choices: {"A": "Only Florida", "B": "Both Florida and Colorado", "C": "Only New York", "D": "Both Florida and New York"},
    correct: "D",
    explanation: "Under the Uniform Securities Act, an IAR of a state-registered investment adviser must register in the state where the adviser has its principal office (here, New York) and in any state where the IAR has a place of business or more than a de minimis number of non-institutional clients (commonly more than 5). Because the IAR has multiple non-institutional clients in Florida, registration is required there. The single Colorado client is below the de minimis threshold and is not identified as an institutional client, so IAR registration in Colorado is not required."
  },
  {
    id: 168,
    question: "What is the minimum duration of a GDP decline commonly used to define a recession in most Series 65 exam materials?",
    choices: {"A": "One quarter", "B": "Two quarters", "C": "Three quarters", "D": "Four quarters"},
    correct: "B",
    explanation: "For Series 65 purposes, a recession is commonly described as two consecutive quarters (six months) of declining real GDP. In practice, the NBER uses a broader set of indicators, but the exam typically uses the two-quarter rule."
  },
  {
    id: 169,
    question: "What form is required for reporting the termination of a representative's association with a firm?",
    choices: {"A": "U-4", "B": "U-6", "C": "U-5", "D": "Filing Agreement"},
    correct: "C",
    explanation: "Form U-5 (Uniform Termination Notice for Securities Industry Registration) is used to document the end of a representative's association; the member firm must file it with the appropriate self-regulatory organization and/or the CRD generally within 30 days of termination."
  },
  {
    id: 170,
    question: "When an investor purchases an immediate variable annuity, what type of units do they acquire at the time of purchase?",
    choices: {"A": "Annuity units that fluctuate in number", "B": "Annuity units that remain constant in number", "C": "Accumulation units that fluctuate in number", "D": "Accumulation units that stay constant in number"},
    correct: "B",
    explanation: "With an immediate variable annuity, the contract is annuitized at or near the time of purchase. Upon annuitization, the investor is credited with a fixed number of annuity units; that number stays constant. In a variable annuity it is the value per annuity unit (and thus the payment amount) that fluctuates, not the number of annuity units."
  },
  {
    id: 171,
    question: "Which of the following results in a decrease in shareholders' equity when total assets remain unchanged?",
    choices: {"A": "An increase in total liabilities", "B": "A decrease in cash reserves used to pay down liabilities", "C": "A sale of assets above their book value", "D": "An increase in retained earnings"},
    correct: "A",
    explanation: "By the accounting equation (Assets = Liabilities + Shareholders' Equity), if total assets remain constant and liabilities increase, shareholders' equity must decrease to keep the equation in balance."
  },
  {
    id: 172,
    question: "Your client pays an annual premium of $1,200 for their variable life insurance policy. Which of the following is deducted from the total premium received by the insurer before any amount is invested in the separate account?",
    choices: {"A": "Sales load", "B": "Mortality fee", "C": "Administrative fee", "D": "Surrender charge"},
    correct: "A",
    explanation: "Sales loads (commissions) are deducted from the premium before the remainder is invested in the separate account. Mortality and administrative (M&E and admin) charges are typically deducted from the separate account's assets periodically (often monthly), and a surrender charge is assessed only if the policy is surrendered, not from each premium payment."
  },
  {
    id: 173,
    question: "Which of the following statements does not describe a characteristic of private placements under Regulation D?",
    choices: {"A": "They may be sold to any number of accredited investors.", "B": "They are classified as an exempt security.", "C": "Non-accredited investors can buy a private placement, subject to limitations.", "D": "They are not required to provide an offering circular or statutory prospectus."},
    correct: "B",
    explanation: "Under Regulation D, private placements are considered exempt transactions, not exempt securities. The exemption is based on how the securities are offered and sold. Reg D offerings may be sold to an unlimited number of accredited investors and, in some cases, a limited number of non-accredited investors, typically with disclosure via a private placement memorandum rather than a statutory prospectus or offering circular. Therefore, the statement that they are classified as an exempt security is incorrect."
  },
  {
    id: 174,
    question: "Which of the following scenarios would be deemed acceptable under the Uniform Securities Act and NASAA ethical standards? I. Offering dividends as a sales inducement II. Engaging in the legitimate sale of subscription rights to existing shareholders III. Advising a client to rescind a trade solely due to a market price decline IV. Selling common stock to an aggressive growth investor when suitable for that client",
    choices: {"A": "I, II, and III", "B": "I and IV", "C": "IV only", "D": "II and IV"},
    correct: "D",
    explanation: "II and IV are acceptable. Selling subscription rights to existing shareholders is a legitimate transaction when conducted properly, and selling common stock to an aggressive growth investor is appropriate when it aligns with that client's objectives and risk tolerance. I is improper if dividends are promised or used as a sales inducement because that can be misleading or fraudulent. III is not appropriate if the only reason for rescission is a market price decline—rescission is generally tied to issues such as fraud, material misrepresentation, or an unauthorized trade, not normal market fluctuation."
  },
  {
    id: 175,
    question: "Which scenario most clearly calls for registration by qualification under the Uniform Securities Act?",
    choices: {"A": "A 5-year-old company planning to sell securities only in one state, in an offering that is not registered with the SEC and is not exchange-listed.", "B": "A newly established company that plans to issue securities across three states simultaneously and files a registration statement with the SEC.", "C": "A 2-year-old company that has issued securities in multiple states before and now wants to sell the same class of securities in another state where they will be listed on a national exchange.", "D": "A startup company that decides to use SEC-regulated crowdfunding (Reg CF) to raise capital nationally."},
    correct: "A",
    explanation: "Registration by qualification is generally used for offerings sold only in a single state (intrastate offerings) that are not registered with the SEC and are not federal covered securities. When an offering is registered with the SEC and sold in multiple states, registration by coordination is typically used, and exchange-listed or Reg CF offerings are federal covered or otherwise exempt at the state level, so they do not rely on registration by qualification."
  },
  {
    id: 176,
    question: "Which of the following best describes nominal interest rates?",
    choices: {"A": "The stated interest rate not adjusted for inflation", "B": "The interest rate after adjustment for inflation (the real rate)", "C": "The rate lenders charge only for the risk of default", "D": "The interest computed after all taxes are applied"},
    correct: "A",
    explanation: "Nominal interest rates are the quoted or stated rates and are not adjusted for inflation; by contrast, real interest rates are adjusted for inflation."
  },
  {
    id: 177,
    question: "When an issuer registers securities in a state via coordination, which of the following statements is incorrect?",
    choices: {"A": "The issuer's registration does not need to be approved at the federal level yet.", "B": "The state Administrator determines the fees applicable to the issuer.", "C": "The issuer must be involved in an intrastate offering of its securities.", "D": "The state registration will take effect when the federal registration becomes effective or within 10 days thereafter."},
    correct: "C",
    explanation: "Registration by coordination is used when a security is being registered under the Securities Act of 1933 (i.e., an interstate, federally registered offering). It is not used for a purely intrastate offering, so the statement in option C is incorrect. Under coordination, a federal registration filing is required, the state Administrator sets the applicable fees, and the state registration becomes effective when the federal registration is effective or within 10 days thereafter."
  },
  {
    id: 178,
    question: "Your client has an open buy limit order to acquire 500 shares of XYZ at a price of $32. With XYZ going ex-dividend for $0.14 per share, what order qualifier should they use if they want to ensure their order isn't automatically reduced for a standard cash dividend?",
    choices: {"A": "GTX", "B": "DNR", "C": "AON", "D": "FOK"},
    correct: "B",
    explanation: "DNR means 'Do Not Reduce'—it instructs the broker/exchange not to adjust a buy limit or sell stop order for a normal cash dividend on the ex-dividend date. Without DNR, these orders are typically reduced by the amount of the dividend."
  },
  {
    id: 179,
    question: "Which of the following rights is NOT granted to a party involved in a hearing conducted by the Administrator under the Uniform Securities Act?",
    choices: {"A": "The right to request the hearing be confidential", "B": "The right to invoke their Fifth Amendment rights", "C": "The right to appeal an adverse order", "D": "The right to have a public hearing"},
    correct: "A",
    explanation: "Under the Uniform Securities Act, hearings before the Administrator are generally public proceedings. While the Administrator may, in limited circumstances, opt to keep certain matters nonpublic, a party does not have a guaranteed right to demand confidentiality. Parties do have the right to a public hearing, the ability to invoke the Fifth Amendment privilege against self-incrimination (subject to possible immunity provisions), and the right to appeal an adverse order in court."
  },
  {
    id: 180,
    question: "A client has obtained confidential, material, nonpublic information about a new technology stock from a friend. After purchasing 1,000 shares, the client instructs the broker to sell them, realizing a profit of $10,000. If the client is found guilty of trading on this insider information, what consequences would they face? I. Both the client and the friend may be charged with insider trading II. The client must pay back the full amount of the illicit profits III. The client is liable for treble damages (civil penalties up to three times the profit) IV. The client can face a lawsuit in civil court for these actions",
    choices: {"A": "I, II, III, IV", "B": "I & II", "C": "I, III, IV", "D": "II & III"},
    correct: "A",
    explanation: "Both the tipper (friend) and the tippee (client) can be held liable if insider trading is proven. Enforcement actions commonly involve disgorgement of profits (repayment of illicit gains) and civil penalties of up to three times those profits (treble damages). In addition to these regulatory sanctions, harmed investors may bring private civil actions (e.g., under Rule 10b-5)."
  },
  {
    id: 181,
    question: "As a state-registered investment adviser representative, you recently received verbal approval from a new client to exercise discretion in managing their account. After buying 100 shares of WDGT based on this verbal approval, three weeks have passed without the client sending a signed discretionary authorization form, and the stock's value has decreased by 25%. What is the most appropriate course of action in this scenario?",
    choices: {"A": "You should buy puts on margin to prevent further losses.", "B": "You should liquidate the stock and reach out to the client by the end of the business day.", "C": "You should notify the client that you cannot execute any additional discretionary trades until you receive written authorization.", "D": "Under NASAA's Model Rule regarding Unethical Business Practices, advisers are prohibited from ever executing trades based solely on verbal authorization."},
    correct: "C",
    explanation: "Under NASAA's Model Rule on Unethical Business Practices, a written power of attorney is required for discretionary authority beyond choosing price and/or time of execution. In this scenario, you improperly placed one discretionary trade based only on verbal approval. The appropriate action now is to stop exercising discretion and inform the client that you cannot execute any additional discretionary trades until you obtain written discretionary authorization; any further trades must be explicitly directed by the client."
  },
  {
    id: 182,
    question: "Which investment type is prohibited for inclusion in an IRA?",
    choices: {"A": "Stocks and bonds", "B": "Rare coins and art", "C": "U.S. minted coins", "D": "Mutual funds and annuities"},
    correct: "B",
    explanation: "The IRS prohibits 'collectibles' (such as art, rugs, antiques, and most rare/collectible coins) from being held in IRAs. There are limited exceptions for certain U.S.-minted coins and approved bullion that meet IRS fineness specifications."
  },
  {
    id: 183,
    question: "What could happen to an agent who does not comply with the administrator's subpoena or request for information under the Uniform Securities Act?",
    choices: {"A": "Could be fined up to $100,000", "B": "Could be sentenced up to 5 years in jail", "C": "Could be found in contempt of court", "D": "Could be sentenced to up to 3 years in jail"},
    correct: "C",
    explanation: "Under the Uniform Securities Act, if a person refuses to comply with the administrator's subpoena or request for information, the administrator may seek enforcement in court. The court can compel compliance and may hold the person in contempt of court for failure to comply."
  },
  {
    id: 184,
    question: "What must all investment advisory contracts clearly outline?",
    choices: {"A": "The fee structure", "B": "A guarantee of returns", "C": "Client's investment risk tolerance", "D": "Management style"},
    correct: "A",
    explanation: "Advisory contracts must disclose the adviser's compensation terms — the amount or formula for calculating fees and how and when they are charged to the client."
  },
  {
    id: 185,
    question: "Which statement about the registration process of securities in a state is true under coordination?",
    choices: {"A": "The issuer must have completed its federal registration before state registration can occur.", "B": "State registration can only happen if the securities are sold outside the state.", "C": "The registration can be effective at the same time as the federal registration.", "D": "The issuer must only be offering its securities intrastate."},
    correct: "C",
    explanation: "Under coordination, a state registration may be made effective simultaneously with the federal (SEC) registration. The Administrator coordinates the effective date with the SEC for offerings that are generally interstate. Federal registration does not have to be completed first, but the effective dates are matched."
  },
  {
    id: 186,
    question: "What condition must an investment adviser without an office in a state meet to be exempt from registration and still legally engage in business in that state under the Uniform Securities Act?",
    choices: {"A": "He has no more than five clients who are residents of the state during the preceding 12 months", "B": "He is also a broker-dealer", "C": "He is federally registered", "D": "He is registered by the state"},
    correct: "A",
    explanation: "Under the de minimis exemption in the USA, an adviser with no place of business in a state generally need not register there if, during the preceding 12 months, he has had no more than five resident clients in that state (subject to exclusions and state variations)."
  },
  {
    id: 187,
    question: "Which of the following statements about state broker-dealer registration exemptions is correct?",
    choices: {"A": "Broker-dealers are exempt from state registration if they only offer services to institutional investors, regardless of whether they have an office in the state.", "B": "All broker-dealers must register in every state where they have clients, with no exceptions.", "C": "Broker-dealers that have no place of business in a state and deal only with other broker-dealers, issuers, and certain institutional investors there, and not with the general public, may qualify for a state registration exemption.", "D": "Broker-dealers can operate in U.S. states without registration simply because they are located outside the United States."},
    correct: "C",
    explanation: "Under the Uniform Securities Act, a broker-dealer with no place of business in a state that limits its business there to other broker-dealers, issuers, and certain institutional investors (and not retail clients) is generally exempt from registration in that state. Merely being located outside the U.S. does not exempt a firm from state registration if it solicits or effects transactions in a state."
  },
  {
    id: 188,
    question: "Under the Uniform Securities Act and the Investment Advisers Act, when is an investment adviser generally permitted to charge performance-based fees?",
    choices: {"A": "They can be charged without any restrictions as long as the client agrees in writing.", "B": "They are allowed for all advisers regardless of client type, as long as the adviser is registered.", "C": "They can only be charged if the adviser manages public (registered) investment companies.", "D": "They may only be charged to qualified clients or by advisers to certain private investment companies (private funds), subject to regulatory exemptions."},
    correct: "D",
    explanation: "Performance-based fees are generally prohibited under the Advisers Act and USA except when charged to qualified clients (meeting specified financial thresholds and sophistication tests) or in limited, exempt circumstances involving certain private investment companies (private funds)."
  },
  {
    id: 189,
    question: "If a buy limit order is placed at $50 and the stock goes ex-dividend for $0.25 per share, what will the new order price be if the order remains active and is subject to standard ex-dividend adjustments (i.e., it is not marked DNR)?",
    choices: {"A": "An order to buy at $50.25", "B": "An order to buy at $49.75", "C": "An order to buy at $50", "D": "An order to buy at $49.50"},
    correct: "B",
    explanation: "On the ex-dividend date, the stock's price is reduced by the dividend amount. Open buy limit orders that are not marked DNR (do not reduce) are adjusted DOWN by the amount of the cash dividend. $50.00 − $0.25 = $49.75."
  },
  {
    id: 190,
    question: "Which of the following best describes the SEC registration requirements for private placements?",
    choices: {"A": "They require full registration with the SEC and a filed prospectus before being sold.", "B": "They can be sold without SEC registration if offered under an exemption (e.g., Section 4(a)(2)/Reg D), typically to accredited investors or a limited number of sophisticated nonaccredited investors.", "C": "They are exempt from registration and may be sold publicly without restrictions or general solicitation.", "D": "They must always be sold with an accompanying prospectus to all purchasers."},
    correct: "B",
    explanation: "Private placements that qualify under federal exemptions such as Section 4(a)(2) and Regulation D may be sold without SEC registration. Under Rule 506(b), sales are typically made to accredited investors and up to 35 sophisticated nonaccredited investors without general solicitation; Rule 506(c) permits general solicitation if all purchasers are accredited and the issuer takes reasonable steps to verify accredited status."
  },
  {
    id: 191,
    question: "What is the primary ethical obligation of an investment adviser when making recommendations?",
    choices: {"A": "To base recommendations solely on their personal opinions", "B": "To routinely rely on both public and material nonpublic information when advising clients", "C": "To ensure clients make decisions primarily using insider information", "D": "To act in the client's best interest and make recommendations based on reasonable due diligence using appropriate, lawfully obtained information"},
    correct: "D",
    explanation: "Investment advisers have a fiduciary duty to act in the client's best interest. Recommendations must be based on reasonable inquiry and due diligence, using information that is appropriate and lawfully obtained. Using material nonpublic (insider) information, or steering clients based on it, is illegal and unethical."
  },
  {
    id: 192,
    question: "What is a prerequisite for a firm to begin conducting business as an investment adviser?",
    choices: {"A": "The firm must have completed the required registration/notice filing and have its registration effective", "B": "A market analysis must be completed", "C": "The firm must hire at least one certified accountant", "D": "Additional training must be undertaken by the firm's staff"},
    correct: "A",
    explanation: "An adviser must be properly registered (or have made any required notice filings) with the SEC or the appropriate state regulator, and that registration must be effective before it may legally conduct business as an investment adviser."
  },
  {
    id: 193,
    question: "What is the current minimum age at which required minimum distributions (RMDs) from a traditional IRA must begin for most individuals under the SECURE 2.0 rules?",
    choices: {"A": "62", "B": "70 1/2", "C": "73", "D": "75"},
    correct: "C",
    explanation: "The SECURE Act (2019) raised the RMD age from 70½ to 72. The SECURE 2.0 Act (2022) subsequently raised the RMD age to 73 for individuals who attain age 72 after 2022, and it is scheduled to increase to 75 for certain individuals who attain age 74 after 2032. Under current rules tested for most new retirees, RMDs generally must begin by April 1 of the year following the year the individual reaches age 73."
  },
  {
    id: 194,
    question: "Which type of investment is typically considered a safer option during economic downturns?",
    choices: {"A": "Real estate investment trusts (REITs)", "B": "High-yield corporate bonds", "C": "Small-cap stocks", "D": "U.S. Treasury bonds"},
    correct: "D",
    explanation: "U.S. Treasury bonds are viewed as a safe haven during downturns because they are backed by the full faith and credit of the U.S. government and have very low default risk; REITs, high-yield (junk) bonds, and small-cap stocks are generally more sensitive to economic weakness and are riskier."
  },
  {
    id: 195,
    question: "Which of the following can be classified as securities issued by the U.S. government?",
    choices: {"A": "Notes and bonds", "B": "None of the choices listed", "C": "Common stock, preferred stock, warrants, and rights", "D": "Equipment, collateral, and voting trust certificates"},
    correct: "A",
    explanation: "U.S. government securities are debt instruments such as Treasury bills, notes, and bonds. Notes and bonds are examples of securities issued by the U.S. government."
  },
  {
    id: 196,
    question: "An individual has applied to register as an agent with a broker-dealer but has several pending arbitration disputes. What is true about their application under the Uniform Securities Act?",
    choices: {"A": "The applicant cannot be registered with FINRA solely due to the pending arbitration disputes", "B": "The applicant cannot be registered on any national securities exchange solely due to the pending arbitration disputes", "C": "The state Administrator may deny, suspend, revoke, or condition registration based on the information disclosed in the pending arbitration cases", "D": "The applicant must secure a fidelity bond to obtain registration because of the pending arbitration disputes"},
    correct: "C",
    explanation: "Under the Uniform Securities Act, applicants must disclose any pending legal or arbitration proceedings. The state Administrator has broad authority to deny, suspend, revoke, or impose conditions on a registration if such matters raise concerns about the applicant's financial responsibility, character, or fitness. Pending arbitration by itself does not create an automatic bar, but it may be used as a basis for administrative action after review of the facts."
  },
  {
    id: 197,
    question: "Under what conditions may a state Administrator deny, suspend, or revoke the registration of a securities offering by an issuer?",
    choices: {"A": "If the issuer has applied for registration in another state", "B": "If the issuer willfully omits material information or makes false statements in its registration application", "C": "If the issuer has securities quoted on the Pink Sheets or OTC markets", "D": "If the issuer has previously offered securities that have not produced profits for investors"},
    correct: "B",
    explanation: "A state Administrator may deny, suspend, or revoke a registration if the registration statement is incomplete, misleading, or contains willful omissions or false statements of material facts. Merely applying in another state, trading on OTC markets, or having unprofitable prior offerings are not valid grounds by themselves."
  },
  {
    id: 198,
    question: "What is a key advantage of a traditional 401(k) plan?",
    choices: {"A": "Participants can withdraw funds without penalties at any time", "B": "Taxable income is reduced by employee elective deferral contributions", "C": "Employers are required by law to match employee contributions", "D": "Employees are guaranteed fixed, risk-free returns"},
    correct: "B",
    explanation: "Traditional 401(k) employee elective deferrals are generally made on a pre-tax basis through salary reduction, which lowers the participant's current taxable income. Taxes are paid later when funds are withdrawn."
  },
  {
    id: 199,
    question: "What does ERISA primarily oversee for private-sector pension plans?",
    choices: {"A": "Funding and fiduciary standards", "B": "Employee eligibility", "C": "Investment performance guarantees", "D": "Tax implications for plan sponsors"},
    correct: "A",
    explanation: "ERISA's core focus is on setting minimum standards for plan funding, vesting, reporting and fiduciary responsibility to protect plan participants, rather than guaranteeing investment performance, determining employee eligibility, or setting tax rules for plan sponsors."
  },
  {
    id: 200,
    question: "What advantage do American Depository Receipts offer investors?",
    choices: {"A": "They allow U.S. investors to trade foreign stocks on U.S. markets in U.S. dollars.", "B": "They guarantee fixed returns on foreign investments.", "C": "They provide automatic voting rights in foreign corporations.", "D": "They ensure ownership of the underlying foreign stock without any fees."},
    correct: "A",
    explanation: "ADRs are receipts for shares of foreign companies that trade in U.S. dollars on U.S. exchanges or OTC markets, making foreign equities easier for U.S. investors to buy and sell."
  }
];
