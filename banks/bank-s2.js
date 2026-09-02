window.NEW_QUESTIONS = (window.NEW_QUESTIONS||[]).concat([
  {
    "section": 2,
    "topic": "Options — calls",
    "yield": "high",
    "trap": true,
    "question": "A client is long 100 shares of XYZ at $40 and sells 1 XYZ 45 call. This is a:",
    "options": [
      "Long straddle",
      "Covered call (covered write)",
      "Protective put",
      "Naked call"
    ],
    "answerIndex": 1,
    "explanation": "Long stock + short call on the same shares is a covered call. Income in exchange for capping upside above the strike. A protective put is long stock + long put. Naked call would be short the call without the stock."
  },
  {
    "section": 2,
    "topic": "Options — puts",
    "yield": "high",
    "trap": true,
    "question": "A client buys 1 MNO 50 put @ $3. MNO closes at $44 at expiration. The put is:",
    "options": [
      "Out of the money and expires worthless",
      "In the money by $6; intrinsic value is $6",
      "In the money by $3",
      "A covered put"
    ],
    "answerIndex": 1,
    "explanation": "A put is in the money when the stock is below the strike. 50 − 44 = $6 intrinsic. Premium paid ($3) is not intrinsic; it affects profit (here $3 per share before commissions) but not whether it is ITM."
  },
  {
    "section": 2,
    "topic": "Options — hedging",
    "yield": "high",
    "trap": true,
    "question": "An investor long a stock who wants to protect against a near-term decline, while keeping upside, should:",
    "options": [
      "Sell a put",
      "Buy a put (protective put)",
      "Sell a covered call only, which floors the stock price",
      "Buy a call"
    ],
    "answerIndex": 1,
    "explanation": "Protective put = insurance. Long call is for a bullish speculation without the stock (or to leverage). Covered call adds income and does not floor downside. Short put adds downside risk."
  },
  {
    "section": 2,
    "topic": "Options — breakeven",
    "yield": "high",
    "trap": true,
    "question": "An investor buys 1 ABC call. At expiration, long-call breakeven is:",
    "options": [
      "Strike plus the premium paid; the stock must be above that for a net profit",
      "Strike minus the premium",
      "The strike price alone, ignoring premium",
      "Equal to the premium only"
    ],
    "answerIndex": 0,
    "explanation": "Long call breakeven = strike + premium. Max loss is the premium; max gain is theoretically unlimited. Series 65 wants that identity, not a $64 worksheet."
  },
  {
    "section": 2,
    "topic": "Options — writer risk",
    "yield": "high",
    "trap": true,
    "question": "The MAXIMUM loss for the writer of an uncovered call is:",
    "options": [
      "The premium received",
      "Strike minus premium",
      "Unlimited",
      "The strike price times 100"
    ],
    "answerIndex": 2,
    "explanation": "Naked/uncovered call: stock can rise without limit, so loss is theoretically unlimited. Max gain is the premium. Uncovered put max loss is strike minus premium (stock to zero)."
  },
  {
    "section": 2,
    "topic": "Annuity types",
    "yield": "high",
    "trap": true,
    "question": "A 62-year-old wants lifetime income to start now, with payments that can rise or fall with a separate account. The product that matches is a:",
    "options": [
      "Deferred fixed annuity",
      "Immediate variable annuity",
      "Deferred indexed annuity with a 10-year surrender",
      "Life insurance MEC"
    ],
    "answerIndex": 1,
    "explanation": "Immediate = income starts now (generally within a year). Variable = payments fluctuate with the separate account. Deferred waits. Fixed payments don't float with a separate account."
  },
  {
    "section": 2,
    "topic": "Annuity suitability",
    "yield": "high",
    "trap": true,
    "question": "A 34-year-old maxing a 401(k) and Roth IRA, with a long horizon and no need for lifetime income, is considering a deferred variable annuity with a 7-year surrender charge. The most likely suitability problem is:",
    "options": [
      "Variable annuities are illegal under 34",
      "High expenses and surrender charges with no need for tax-deferred annuity features already available in retirement accounts",
      "Immediate annuities cannot be sold before 59½",
      "Indexed annuities are always preferable under 40"
    ],
    "answerIndex": 1,
    "explanation": "Tax deferral is redundant inside already-advantaged accounts, VA expenses are high, and surrender periods punish liquidity. That's the classic 'don't stuff a VA in an IRA' / young-client trap."
  },
  {
    "section": 2,
    "topic": "Fixed vs indexed annuity",
    "yield": "high",
    "trap": true,
    "question": "An equity-indexed annuity typically:",
    "options": [
      "Is a security registered under the 1940 Act in every case",
      "Credits interest based on an external index, subject to a cap, participation rate, and a floor (often 0%)",
      "Passes through actual index dividends and has unlimited upside",
      "Can be redeemed at NAV daily like an open-end fund"
    ],
    "answerIndex": 1,
    "explanation": "EIAs/FIAs: insurer credit formula tied to an index with cap/participation/spread and a floor. They are generally insurance products (though some structures raise security questions). Not daily NAV funds and not full index total return."
  },
  {
    "section": 2,
    "topic": "Variable annuity taxation",
    "yield": "high",
    "trap": true,
    "question": "Withdrawals from a nonqualified deferred variable annuity before annuitization are generally:",
    "options": [
      "FIFO: basis out first, tax-free",
      "LIFO: earnings out first, ordinary income (and a 10% penalty if under 59½ unless an exception applies)",
      "Always long-term capital gain",
      "Tax-free as a 1035 if paid in cash"
    ],
    "answerIndex": 1,
    "explanation": "Nonqualified annuity withdrawals are LIFO: gain first, ordinary income. 10% additional tax before 59½ unless an exception. 1035 is an exchange into another insurance contract, not a cash-out."
  },
  {
    "section": 2,
    "topic": "Open-end vs closed-end",
    "yield": "high",
    "trap": true,
    "question": "Which statement is TRUE?",
    "options": [
      "Open-end funds issue a fixed number of shares that trade all day on an exchange",
      "Closed-end funds redeem at NAV at 4:00 p.m. each day",
      "Open-end (mutual) funds issue and redeem at NAV; closed-end funds trade on an exchange at a premium or discount to NAV",
      "ETFs are closed-end funds with a 12b-1 fee"
    ],
    "answerIndex": 2,
    "explanation": "Mutual funds: continuous offering, redeem at NAV. Closed-end: fixed shares, exchange-traded, price can be off NAV. ETFs are typically open-end (or UITs) that trade intraday, not classic closed-end."
  },
  {
    "section": 2,
    "topic": "UIT",
    "yield": "high",
    "trap": true,
    "question": "A unit investment trust:",
    "options": [
      "Has an actively traded portfolio run by an investment adviser board",
      "Is unmanaged: a fixed portfolio, units redeemable, no board of directors",
      "Must list on NYSE",
      "Is the same as a hedge fund"
    ],
    "answerIndex": 1,
    "explanation": "UIT: unmanaged fixed portfolio, redeemable units, no board. That's the 1940 Act trio trap — management company (open/closed) vs UIT vs face-amount certificate."
  },
  {
    "section": 2,
    "topic": "Duration vs maturity",
    "yield": "high",
    "trap": true,
    "question": "If yields rise 1%, which bond's price typically falls the MOST?",
    "options": [
      "A 3-year 8% coupon trading at par",
      "A 30-year zero-coupon bond",
      "A 30-year 8% coupon trading at a premium",
      "A money-market instrument maturing in 90 days"
    ],
    "answerIndex": 1,
    "explanation": "Duration (rate sensitivity) is longer when maturity is longer and coupons are lower. A long zero has duration equal to maturity — the most sensitive. Short, high-coupon bonds move less."
  },
  {
    "section": 2,
    "topic": "Premium bond",
    "yield": "high",
    "trap": true,
    "question": "A bond bought at a premium and held to maturity (no default) will, over its remaining life:",
    "options": [
      "Appreciate to par, producing a capital gain",
      "Amortize toward par; YTM is less than current yield, which is less than coupon",
      "Remain at the premium price",
      "Have YTM higher than the coupon"
    ],
    "answerIndex": 1,
    "explanation": "Premium bonds: coupon > current yield > YTM. Price works down toward par (amortization). You do not get a 'gain to par'; you paid above par."
  },
  {
    "section": 2,
    "topic": "annuities",
    "yield": "high",
    "trap": false,
    "question": "Which statements about a variable annuity are accurate? I. The unit values are determined on a daily basis II. Investors possess voting rights III. Unit value is influenced by performance of the separate account IV. The maximum sales charge cannot exceed 9% of total payments",
    "options": [
      "II and IV",
      "I and III",
      "I, II, and III",
      "I, II, III, and IV"
    ],
    "answerIndex": 2,
    "explanation": "Statements I, II, and III are correct. In a variable annuity, accumulation units are priced each business day, and those values rise or fall with the performance of the separate account. Contract owners (investors) have voting rights on key issues related to the separate account, such as changes in investment objectives, though the insurer usually votes the underlying portfolio securities by proxy. Statement IV is false because the 9% maximum sales charge over 20 years applies to contractual plans in mutual funds under FINRA rules, not to variable annuities; variable annuity charges must be fully disclosed and reasonable, but there is no  single statutory 9% cap on total payments."
  },
  {
    "section": 2,
    "topic": "ETF / UIT",
    "yield": "med",
    "trap": false,
    "question": "Which component is NOT part of stockholders' equity on a corporate balance sheet?",
    "options": [
      "Preferred stock",
      "Common stock",
      "Liabilities",
      "Retained earnings"
    ],
    "answerIndex": 2,
    "explanation": "Liabilities are the company's debts and obligations and appear in a separate section of the balance sheet from stockholders' equity. Stockholders' equity includes ownership accounts such as common stock, preferred stock, and retained earnings."
  },
  {
    "section": 2,
    "topic": "annuities",
    "yield": "high",
    "trap": false,
    "question": "What term describes the transition an investor makes from contributing funds into an annuity to receiving distributions from it?",
    "options": [
      "Annuitization (annuitizing) the contract",
      "Annualizing the contract",
      "Accumulating the contract",
      "None of the choices listed"
    ],
    "answerIndex": 0,
    "explanation": "Annuitization (annuitizing) is the process of converting an annuity's accumulated value into a stream of periodic income payments."
  },
  {
    "section": 2,
    "topic": "warrants",
    "yield": "med",
    "trap": false,
    "question": "What is the typical maximum maturity for a corporate warrant as commonly described in Series 65 exam materials?",
    "options": [
      "10 years",
      "270 days",
      "45 days",
      "5 years"
    ],
    "answerIndex": 0,
    "explanation": "Warrants are long-term instruments. On Series 65-style exams, they are commonly described as having long maturities, often as long as 10 years or even longer—much longer than short- term options."
  },
  {
    "section": 2,
    "topic": "life insurance",
    "yield": "med",
    "trap": false,
    "question": "Which of the following does not typically involve a consistent (level) premium payment structure?",
    "options": [
      "Universal life insurance",
      "Variable life insurance",
      "Whole life insurance",
      "Term life insurance"
    ],
    "answerIndex": 0,
    "explanation": "Universal life insurance is designed with  flexible premiums and an adjustable death benefit, so payments are not necessarily consistent over time. Traditional whole life, traditional variable life, and level term policies generally have fixed, level premiums for the stated period."
  },
  {
    "section": 2,
    "topic": "equity characteristics",
    "yield": "med",
    "trap": false,
    "question": "Which of the following statements about qualified dividends is true?",
    "options": [
      "They are taxed at a lower preferential rate.",
      "They are considered ordinary income and taxed accordingly.",
      "They are subject to a 30% withholding tax.",
      "They must be held for one year to qualify for lower rates."
    ],
    "answerIndex": 0,
    "explanation": " Qualified dividends are taxed at the preferential long-term cRaepsituallt gsa: i 7 n 3 s r o at u e t s o (g f e 1 n 0 e 0 rally 0%, 15%, or 20% depending on taxable income and filing status). To be treated as qualified, the investor must meet a holding-period requirement—generally more than 60 days during the 121-day period beginning 60 days before the ex-dividend date (special rules apply for certain preferred stock)."
  },
  {
    "section": 2,
    "topic": "equity characteristics",
    "yield": "med",
    "trap": true,
    "question": "Cumulative preferred stock that skipped dividends for several years owes the holder:",
    "options": [
      "The missed preferred dividends (rate × par, per share, times years missed) before common can be paid—arrears accumulate",
      "Nothing, because skipped preferred dividends are always cancelled",
      "Only the current year's preferred dividend, never prior years",
      "A penalty equal to the common dividend"
    ],
    "answerIndex": 0,
    "explanation": "Cumulative means arrears pile up. Annual preferred = percent of par; unpaid total = that amount × shares × years. Know the rule; skip the $3,000 grind."
  },
  {
    "section": 2,
    "topic": "ETF / UIT",
    "yield": "high",
    "trap": false,
    "question": "If a client intends to buy an annuity through consistent scheduled payments, which type should they consider?",
    "options": [
      "Single-premium deferred annuity",
      "Single-premium immediate annuity",
      "Flexible-premium (periodic payment) deferred annuity",
      "Immediate annuity funded by periodic payments"
    ],
    "answerIndex": 0,
    "explanation": "A flexible-premium (periodic payment) deferred annuity is designed for investors to make regular contributions during an accumulation period and receive income at a later, deferred date."
  },
  {
    "section": 2,
    "topic": "unethical practices",
    "yield": "med",
    "trap": false,
    "question": "If a corporation you invested in is undergoing bankruptcy proceedings, which of the following rights pertains to common stockholders?",
    "options": [
      "Entitlement to a share of the residual assets, if any remain, after all creditors and senior security holders have been paid ",
      "Guaranteed return of principal investment",
      "Continu R e e d s d u i l v t i s d : e 7n3d poauytm oefn 1ts0 u0ntil the process is complete",
      "Full repayment of original stock value"
    ],
    "answerIndex": 0,
    "explanation": "In bankruptcy, common stockholders are last in line and have only a residual claim on assets— meaning they may receive a proportionate share of what, if anything, is left after all creditors, bondholders, and preferred stockholders are fully paid."
  },
  {
    "section": 2,
    "topic": "annuities",
    "yield": "med",
    "trap": false,
    "question": "Which of the following statements about a variable life insurance policy is incorrect?",
    "options": [
      "It serves as both a securities and insurance product.",
      "It accumulates cash value that can fluctuate.",
      "Its investment assets are managed within the insurer's general account.",
      "It features a constant premium."
    ],
    "answerIndex": 0,
    "explanation": "Variable life policy investments are held in a separate account (not the insurer's general account), so any statement saying they are managed in the general account is incorrect."
  },
  {
    "section": 2,
    "topic": "unethical practices",
    "yield": "med",
    "trap": false,
    "question": "When an investor buys convertible preferred stock, which of the following is not typically among the benefits they receive?",
    "options": [
      "Chance to profit from a rise in common stock value",
      "Fixed dividend payments",
      "Assured dividend payments",
      "Equity ownership"
    ],
    "answerIndex": 2,
    "explanation": "Convertible preferred stock normally offers a stated (fixed) dividend and the right to convert into common stock, allowing the investor to benefit if the common stock price rises. It is also an equity security. However, dividends on preferred stock are never guaranteed; they must be declared by the board and depend on the issuerʼs financial condition. Therefore, 'assured dividend payments' is not a legitimate  benefit."
  },
  {
    "section": 2,
    "topic": "life insurance",
    "yield": "med",
    "trap": true,
    "question": "A variable life policy is surrendered (no loans, ignore extra charges). The owner receives:",
    "options": [
      "The cash surrender value, which may be less than premiums paid—not a refund of total premiums",
      "A refund of all premiums paid plus interest by statute",
      "The greater of premiums paid or the death benefit",
      "Nothing, because variable life has no cash value"
    ],
    "answerIndex": 0,
    "explanation": "Surrender pays CSV, which can be below premiums in early years. Concept, not a $810 vs $1,500 arithmetic trap."
  },
  {
    "section": 2,
    "topic": "warrants",
    "yield": "med",
    "trap": false,
    "question": "For how long may stock subscription rights typically remain outstanding before they expire?",
    "options": [
      "30 days",
      "60 days",
      "14 days",
      "45 days"
    ],
    "answerIndex": 3,
    "explanation": "On the Series 65, stock rights are characterized as very short-term instruments that are typically exercisable for about 45 days before they expire, whereas warrants are long- term."
  },
  {
    "section": 2,
    "topic": "bond valuation / duration",
    "yield": "high",
    "trap": false,
    "question": "What is the minimum duration of a GDP decline commonly used to define a recession in most Series 65 exam materials?",
    "options": [
      "One quarter ",
      "Two quarters",
      "Three q R u e a s rt u e l r t s s: 73 out of 100",
      "Four quarters"
    ],
    "answerIndex": 0,
    "explanation": "For Series 65 purposes, a recession is commonly described as two consecutive quarters (six months) of declining real GDP. In practice, the NBER uses a broader set of indicators, but the exam typically uses the two- quarter rule."
  },
  {
    "section": 2,
    "topic": "annuities",
    "yield": "high",
    "trap": false,
    "question": "Which statement regarding a variable single- premium deferred annuity (SPDA) is incorrect?",
    "options": [
      "The contract is funded entirely by a single payment.",
      "Funds invested are allocated to accumulation units.",
      "The portfolio value of the separate account grows due to extra investments by the investor after the single premium is paid. ",
      "The investor postpones receiving payments from the annuity until a specified time, typicallyR easftuelrt sre: t 7 ir 3 em o e u n t t . of 100"
    ],
    "answerIndex": 2,
    "explanation": "In a variable SPDA, a single premium funds the contract; that premium purchases accumulation units in the separate account, whose value rises or falls with investment performance. The separate account may grow due to investment performance, not ongoing extra contributions by the investor after the single premium is paid."
  },
  {
    "section": 2,
    "topic": "equity characteristics",
    "yield": "med",
    "trap": false,
    "question": "What amount of semi-annual dividends can an investor expect from a 7% cumulative preferred stock (assume $100 par value)?",
    "options": [
      "$ 7 per share",
      "7% of the corporate profits",
      "$ 3.50 per share",
      "3.5% of the corporate profits"
    ],
    "answerIndex": 0,
    "explanation": " A 7% preferred pays 7% of the $100 par value = $7 per year. Paid semiannually, that is $3.50 every six mRonetshusl.ts: 73 out of 100"
  },
  {
    "section": 2,
    "topic": "equity characteristics",
    "yield": "med",
    "trap": false,
    "question": "Which type of preferred stock typically provides additional dividends under certain conditions beyond the stated rate?",
    "options": [
      "Cumulative preferred",
      "Convertible preferred",
      "Callable preferred",
      "Participating preferred"
    ],
    "answerIndex": 3,
    "explanation": "Participating preferred stock may receive additional dividends above the stated rate when specified conditions are met, such as when common shareholders receive dividends above a certain level."
  },
  {
    "section": 2,
    "topic": "ETF / UIT",
    "yield": "high",
    "trap": true,
    "question": "Which types of organizations permit their employees to contribute to a Tax Sheltered Annuity (TSA), also known as a 403(b) plan?",
    "options": [
      "Public schools and certain nonprofit organizations (e.g., private nonprofit schools, charities, and some daycare centers)",
      "Only public schools",
      "Only private hospitals",
      "Corporate offices"
    ],
    "answerIndex": 0,
    "explanation": "TSAs (403(b) plans) are available to employees of public school systems and certain tax-exempt organizations (typically 501(c)(3) nonprofits), such as private nonprofit schools, charitable organizations, and some nonprofit daycare centers. They are not generally available to employees of for-profit corporations."
  },
  {
    "section": 2,
    "topic": "unethical practices",
    "yield": "med",
    "trap": false,
    "question": "What is a potential consequence for investors if a company decides to liquidate?",
    "options": [
      "Common stockholders may not receive any repayment until all debts are settled.",
      "Common stockholders receive priority repayment over creditors.",
      "Common stockholders automatically receive a refund of their investment.",
      "Common stockholders are guaranteed a set dividend during liquidation."
    ],
    "answerIndex": 0,
    "explanation": "In a liquidation, secured and unsecured creditors, and then preferred stockholders, are paid before common stockholders. Common stockholders are last in line and may receive nothing if no assets remain after satisfying prior claims."
  },
  {
    "section": 2,
    "topic": "annuities",
    "yield": "high",
    "trap": false,
    "question": "An investor has recently entered the payout (annuity) stage of their non-qualified variable annuity and is curious about the tax implications of their distributions. What should you inform them?",
    "options": [
      "You will only be taxed on the earnings (growth) portion of each distribution; that portion is taxed as ordinary income",
      "Your distributions will be tax-exempt",
      "You will need to pay capital gains taxes on the funds",
      "You must pay ordinary income taxes on the full amount"
    ],
    "answerIndex": 0,
    "explanation": "For non-qualified variable annuities, the portion of each payment representing a return of principal (cost basis) is tax-free; only the earnings portion is taxable, and those earnings are taxed as ordinary income, not capital gains."
  },
  {
    "section": 2,
    "topic": "equity characteristics",
    "yield": "high",
    "trap": false,
    "question": "In a period of rising inflation, which of the following asset types is likely to experience the most significant price decrease?",
    "options": [
      "Long-term Treasury bonds",
      "Common stock",
      "Treasury bills",
      "Preferred stock"
    ],
    "answerIndex": 0,
    "explanation": "Rising inflation generally leads to higher interest rates, which reduce the present value of fixed interest payments. Long-term Treasury bonds have the longest duration and are most sensitive to interest rate increases, so their prices typically fall the most. Treasury bills are very short-term and much less affected; preferred stock and common stock can be influenced by rates and inflation but are not as immediately or directly impacted as long-term fixed-rate government bonds."
  },
  {
    "section": 2,
    "topic": "annuities",
    "yield": "med",
    "trap": false,
    "question": "Which of the following charges is not typically deducted from the separate account of a variable life insurance policy?",
    "options": [
      "Administrative fee",
      "Management fee",
      "Mortality risk fee",
      "Expense risk fee"
    ],
    "answerIndex": 0,
    "explanation": "Administrative fees are generally taken from the gross premium (or billed separately) before the remainder is invested in the separate account. By contrast, management (investment) fees, mortality (cost of insurance) charges, and expense risk charges are commonly deducted from the separate account's assets."
  },
  {
    "section": 2,
    "topic": "ETF / UIT",
    "yield": "high",
    "trap": false,
    "question": "Which investment vehicles allow contributions made with after-tax money?",
    "options": [
      "401(k) and Traditional IRA",
      "Pension Plan and TSA",
      "Roth IRA and Nonqualified Annuity",
      "Roth IRA and Qualified Annuity"
    ],
    "answerIndex": 2,
    "explanation": "Roth IRAs are funded with after-tax dollars. Nonqualified annuities are purchased with after-tax money and grow tax-deferred. By contrast, qualified plans (401(k), pensions, TSAs, qualified annuities) are generally funded with pre-tax dollars or on a tax-deductible basis, so their contributions are not considered after-tax in this context."
  },
  {
    "section": 2,
    "topic": "ETF / UIT",
    "yield": "high",
    "trap": false,
    "question": "Which of the following accurately describes the primary purpose of annuities?",
    "options": [
      "Annuities exclusively benefit beneficiaries after the policyholder passes away.",
      "Annuities provide a stream of income to the investor while they are still alive.",
      "Annuities are meant solely for education funding.",
      "Annuities require the investor to be disabled for payouts to occur."
    ],
    "answerIndex": 1,
    "explanation": "Annuities are designed primarily to provide periodic income payments to the contract owner or annuitant during their lifetime (commonly for retirement), whereas life insurance primarily provides death benefits to beneficiaries."
  },
  {
    "section": 2,
    "topic": "unethical practices",
    "yield": "high",
    "trap": false,
    "question": "Which of the following benefits is associated with fixed annuities?",
    "options": [
      "Flexible withdrawal options",
      "High potential returns from stock market investments",
      "Premiums invested in separate accounts",
      "Predictable periodic income stream"
    ],
    "answerIndex": 3,
    "explanation": "Fixed annuities provide a guaranteed fixed interest rate and a predictable periodic income stream; the insurer bears the investment risk. They are not tied to separate accounts or stock market performance, and withdrawals are often limited or subject to surrender charges and penalties."
  },
  {
    "section": 2,
    "topic": "warrants",
    "yield": "med",
    "trap": true,
    "question": "Individuals can acquire warrants in all of the following manners except:",
    "options": [
      "Investors might purchase warrants linked to preferred stock from the issuing company.",
      "Companies can attach warrants to their bonds to enhance their appeal to investors.",
      "Investors aiming to benefit from potential increases in common stock prices may choose to buy warrants instead of common shares.",
      "Companies will grant warrants to those who have purchased their common stock during the initial public offering."
    ],
    "answerIndex": 0,
    "explanation": "Warrants are typically issued exercisable into common stock and are most commonly attached to bonds or offered with equity issues; they can also trade separately. They are not normally issued as warrants exercisable into preferred stock, so acquiring 'warrants linked to preferred stock' is not a standard manner of obtaining them."
  },
  {
    "section": 2,
    "topic": "annuities",
    "yield": "high",
    "trap": false,
    "question": "When a tax-deferred annuity is annuitized (converted to periodic payments), how is the investor's tax liability on each payment determined?",
    "options": [
      "The entire distribution is taxed at the estate tax rate.",
      "Only the growth portion is subject to capital gains tax.",
      "The investor pays capital gains tax on the total amount received.",
      "The tax burden is assessed based on a specific exclusion ratio."
    ],
    "answerIndex": 3,
    "explanation": "Upon annuitization, each payment is divided into a tax-free return of principal and a taxable earnings portion using an exclusion ratio; the taxable portion is treated as ordinary income, not capital gains."
  },
  {
    "section": 2,
    "topic": "ETF / UIT",
    "yield": "high",
    "trap": false,
    "question": "What is a typical characteristic of contributions to a nonqualified annuity?",
    "options": [
      "They are made with pre-tax money",
      "They provide tax-free withdrawals",
      "Growth within the annuity is taxed immediately",
      "Contributions are made with after-tax money"
    ],
    "answerIndex": 3,
    "explanation": "Most nonqualified annuities are funded with after-tax dollars; earnings then grow tax-deferred and are taxed as ordinary income when withdrawn."
  },
  {
    "section": 2,
    "topic": "annuities",
    "yield": "high",
    "trap": false,
    "question": "Which of these factors is impacted by changes in the assumed interest rate (AIR) in a variable annuity? I. Payment schedule II. Annuity payout amount III. Plan contribution levels IV. Investment performance",
    "options": [
      "II only",
      "I and II",
      "II and III",
      "II and IV"
    ],
    "answerIndex": 0,
    "explanation": "The AIR is used to establish and adjust the annuity payout amount (II). It does not change the contractually selected payment schedule (I), investor contribution amounts (III), or the actual investment performance of the separate account (IV)."
  },
  {
    "section": 2,
    "topic": "municipal bonds",
    "yield": "med",
    "trap": false,
    "question": "What type of bond is issued at a discount and matures at face value without paying interest until maturity?",
    "options": [
      "Callable bonds",
      "Corporate bonds",
      "Zero coupon bonds",
      "Municipal bonds"
    ],
    "answerIndex": 2,
    "explanation": "Zero coupon bonds are sold at a deep discount and do not pay periodic interest; the investor receives a single lump-sum (face) payment at maturity."
  },
  {
    "section": 2,
    "topic": "annuities",
    "yield": "high",
    "trap": false,
    "question": "When an investor purchases an immediate variable annuity, what type of units do they acquire at the time of purchase?",
    "options": [
      "Annuity units that fluctuate in number",
      "Annuity units that remain constant in number",
      "Accumulation units that fluctuate in number",
      "Accumulation units that stay constant in number"
    ],
    "answerIndex": 1,
    "explanation": "With an immediate variable annuity, the contract is annuitized at or near the time of purchase. Upon annuitization, the investor is credited with a fixed number of annuity units; that number stays constant. In a variable annuity it is the value per annuity unit (and thus the payment amount) that fluctuates, not the number of annuity units."
  },
  {
    "section": 2,
    "topic": "annuities",
    "yield": "med",
    "trap": false,
    "question": "Your client pays an annual premium of $1,200 for their variable life insurance policy. Which of the following is deducted from the total premium received by the insurer before any amount is invested in the separate account?",
    "options": [
      "Sales load",
      "Mortality fee",
      "Administrative fee",
      "Surrender charge"
    ],
    "answerIndex": 0,
    "explanation": "Sales loads (commissions) are deducted from the premium before the remainder is invested in the separate account. Mortality and administrative (M&E and admin) charges are typically deducted from the separate account's assets periodically (often monthly), and a surrender charge is assessed only if the policy is surrendered, not from each premium payment."
  },
  {
    "section": 2,
    "topic": "REITs / SPACs",
    "yield": "med",
    "trap": false,
    "question": "Which type of investment is typically considered a safer option during economic downturns?",
    "options": [
      "Real estate investment trusts (REITs)",
      "High-yield corporate bonds",
      "Small-cap stocks",
      "U.S. Treasury bonds"
    ],
    "answerIndex": 3,
    "explanation": "U.S. Treasury bonds are viewed as a safe haven during downturns because they are backed by the full faith and credit of the U.S. government and have very low default risk; REITs, high-yield (junk) bonds, and small-cap stocks are generally more sensitive to economic weakness and are riskier."
  },
  {
    "section": 2,
    "topic": "Fed tools / policy",
    "yield": "med",
    "trap": false,
    "question": "A bank temporarily short on reserves has two borrowing options: borrowing overnight reserves from another bank at the fed funds rate, or borrowing directly from the Federal Reserve's discount window at the discount rate. Which statement best describes the typical relationship between these two rates?",
    "options": [
      "The discount rate is normally set below the fed funds rate to encourage banks to borrow from the Fed",
      "The fed funds rate and discount rate are always identical because both are directly set by the FOMC",
      "The discount rate is normally set above the fed funds rate, making it a backup, higher-cost source of funds",
      "The discount rate applies only to consumer loans and has no connection to bank reserves"
    ],
    "answerIndex": 2,
    "explanation": "The discount rate is typically set above the fed funds rate so that banks use the Fed's discount window only as a last resort after exhausting cheaper interbank borrowing options. This penalty-rate structure discourages routine reliance on the Fed as a funding source."
  },
  {
    "section": 2,
    "topic": "bond valuation / duration",
    "yield": "high",
    "trap": false,
    "question": "Which of the following is generally classified as a leading economic indicator, useful for predicting the future direction of the economy?",
    "options": [
      "The unemployment rate",
      "Corporate profits reported last quarter",
      "Building permits for new private housing",
      "The average duration of unemployment"
    ],
    "answerIndex": 2,
    "explanation": "Building permits are considered a leading indicator because increased permit activity signals future construction and economic activity before it occurs. Unemployment rate and average duration of unemployment are lagging indicators, and reported corporate profits reflect past performance."
  },
  {
    "section": 2,
    "topic": "bond valuation / duration",
    "yield": "high",
    "trap": false,
    "question": "An economist reviewing data notes that a particular statistic tends to confirm a business cycle turning point only after it has already occurred. Which of the following is considered a lagging economic indicator?",
    "options": [
      "New orders for durable goods",
      "The index of consumer expectations",
      "The average duration of unemployment",
      "Building permits"
    ],
    "answerIndex": 2,
    "explanation": "The average duration of unemployment is a lagging indicator because it typically continues to rise for a period after a recession has technically ended, confirming a downturn only in hindsight. New orders, consumer expectations, and building permits are all leading indicators."
  },
  {
    "section": 2,
    "topic": "inflation / CPI",
    "yield": "high",
    "trap": false,
    "question": "As the economy strengthens and inflation becomes a concern, the Federal Reserve begins allowing its holdings of Treasury and mortgage-backed securities to mature without reinvesting the proceeds, shrinking its balance sheet. This process is best described as:",
    "options": [
      "Quantitative easing",
      "An open market purchase",
      "Quantitative tightening",
      "A discount rate cut"
    ],
    "answerIndex": 2,
    "explanation": "Quantitative tightening (QT) is the reverse of quantitative easing: the central bank reduces the size of its balance sheet by letting securities mature (or actively selling them) without reinvesting the proceeds, which reduces liquidity in the financial system and tends to put upward pressure on interest rates."
  },
  {
    "section": 2,
    "topic": "bond valuation / duration",
    "yield": "high",
    "trap": true,
    "question": "A manager holds Bond X with a much lower effective duration than Bond Y. If market yields rise, which statement is most accurate?",
    "options": [
      "Bond Y (higher duration) is expected to fall by a larger percentage; approximate % price change ≈ −duration × change in yield",
      "Bond X will fall more because low duration means more risk",
      "Both bonds fall by the same percent because both are fixed-income",
      "Bond prices rise when yields rise"
    ],
    "answerIndex": 0,
    "explanation": "Duration ranks interest-rate sensitivity. Know the sign (rates up, prices down) and that higher duration moves more. You do not need to multiply duration 12 by 1% to get 12%."
  },
  {
    "section": 2,
    "topic": "performance measures",
    "yield": "med",
    "trap": true,
    "question": "A corporate bond with a stated coupon trades in the secondary market below par. Its current yield compared with the coupon rate is:",
    "options": [
      "Higher than the coupon rate, because current yield is annual coupon dollars divided by the lower market price",
      "Equal to the  coupon rate at every price",
      "Lower than the coupon rate for every discount bond",
      "Equal to YTM only if the bond is a zero"
    ],
    "answerIndex": 0,
    "explanation": "Current yield = annual coupon / price. Discount → CY > coupon. The exam wants that ranking, not $50 / $960 ≈ 5.21%."
  },
  {
    "section": 2,
    "topic": "bond valuation / duration",
    "yield": "med",
    "trap": false,
    "question": "A corporate bond is currently trading at a premium to its par value. Which of the following correctly ranks the bond's coupon rate, current yield, and yield to maturity from highest to lowest?",
    "options": [
      "Yield to maturity > current yield > coupon rate",
      "Coupon rate > current yield > yield to maturity",
      "Current yield > coupon rate > yield to maturity",
      "All three are always equal regardless of price"
    ],
    "answerIndex": 1,
    "explanation": "For a premium bond, coupon rate is highest, current yield is in the middle, and yield to maturity is lowest, because YTM also reflects the capital loss the investor will realize as the price declines to par at maturity."
  },
  {
    "section": 2,
    "topic": "bond valuation / duration",
    "yield": "high",
    "trap": false,
    "question": "Bond A has a 5-year maturity and Bond B has a 20-year maturity; both carry identical 4% coupons and identical credit quality. If market interest rates rise by 100 basis points, which bond will experience the larger percentage price decline, and why?",
    "options": [
      "Bond A, because shorter maturities are always more sensitive to rate changes",
      "Bond B, because longer-maturity bonds have higher duration and greater price sensitivity to a given change in yield",
      "Both bonds will decline by an identical percentage since they share the same coupon",
      "Neither bond's price will change because both bonds have fixed coupon rates"
    ],
    "answerIndex": 1,
    "explanation": "Duration increases with time to maturity (holding coupon constant), and bonds with higher duration experience larger percentage price swings for a given change in yield. Bond B's longer maturity gives it materially greater interest-rate sensitivity than Bond A."
  },
  {
    "section": 2,
    "topic": "municipal bonds",
    "yield": "med",
    "trap": false,
    "question": "A risk-averse client is comparing three municipal bonds: (1) an unlimited-tax general obligation bond backed by a state's full taxing power, (2) a limited-tax GO bond capped by statute, and (3) a revenue bond funding a new toll bridge with uncertain traffic projections. Ranked from lowest to highest credit risk, which order is most accurate?",
    "options": [
      "Revenue bond, limited-tax GO, unlimited-tax GO",
      "Unlimited-tax GO, limited-tax GO, revenue bond",
      "Limited-tax GO, revenue bond, unlimited-tax GO",
      "All three carry identical credit risk because they are all municipal bonds"
    ],
    "answerIndex": 1,
    "explanation": "Unlimited-tax GO bonds are backed by the issuer's broadest taxing power and are generally lowest risk; limited-tax GOs are constrained in how much tax can be raised; single-purpose revenue bonds depend entirely on uncertain project revenue and typically carry the highest credit risk of the three."
  },
  {
    "section": 2,
    "topic": "investment vehicles",
    "yield": "med",
    "trap": false,
    "question": "An investor purchases a newly issued 10-year zero-coupon corporate bond in a taxable brokerage account at a deep discount to face value. Which statement about the federal tax treatment of this bond is correct?",
    "options": [
      "No taxes are due until the bond matures or is sold, since no cash interest is ever paid annually",
      "The investor must report the annual accreted (imputed) original issue discount as taxable ordinary income each year, even though no cash interest is received",
      "The entire original issue discount is taxed as a long-term capital gain, but only in the year of maturity",
      "Zero-coupon corporate bonds are exempt from federal taxation because they pay no periodic coupon"
    ],
    "answerIndex": 1,
    "explanation": "Zero-coupon bonds accrete in value toward par each year, and the IRS requires holders to recognize this phantom (imputed) interest as ordinary taxable income annually under the original issue discount rules, even though no cash is actually received until maturity."
  },
  {
    "section": 2,
    "topic": "Treasuries / agencies",
    "yield": "med",
    "trap": false,
    "question": "An investor buys a $1,000 par Treasury Inflation-Protected Security (TIPS) with a 2% real coupon rate. Over the next year the CPI rises by 3%. Which statement best describes the effect on the investor's principal and interest payments?",
    "options": [
      "The par value remains $1,000, and only the coupon rate itself is increased to compensate for inflation",
      "The principal is adjusted upward to approximately $1,030, and the coupon payment is calculated as 2% of the new, higher adjusted principal, so the dollar amount of interest received also rises",
      "TIPS pay a fixed dollar coupon regardless of inflation, and only the redemption value at maturity is adjusted for CPI changes",
      "The coupon rate itself is adjusted upward by the CPI change while the principal amount stays fixed at $1,000"
    ],
    "answerIndex": 1,
    "explanation": "TIPS adjust the underlying principal semiannually to reflect changes in the CPI, and the fixed real coupon rate is then applied to that adjusted (higher) principal, increasing the dollar amount of each interest payment as inflation rises."
  },
  {
    "section": 2,
    "topic": "bond valuation / duration",
    "yield": "high",
    "trap": false,
    "question": "Modified duration is used mainly to estimate:",
    "options": [
      "The percentage price change for a small yield change: prices fall when yields rise, by roughly duration times the yield change",
      "The bond's credit spread over Treasuries",
      "Convexity only, not price sensitivity",
      "Whether the coupon is taxable"
    ],
    "answerIndex": 0,
    "explanation": "Know the rule and the sign. A 50 bp rise is not an invitation to compute −8 × 0.005 = −4% and $40 on the Series 65."
  },
  {
    "section": 2,
    "topic": "equity characteristics",
    "yield": "med",
    "trap": false,
    "question": "XYZ Corp has 8% cumulative preferred stock outstanding with a $100 par value. The company suspended preferred dividends entirely for two consecutive years due to financial distress. In the third year, the board wants to resume paying a dividend to common shareholders. What must occur first?",
    "options": [
      "Nothing; cumulative preferred shareholders are only entitled to the current year's dividend before common shareholders may be paid",
      "The company must first pay all missed and current preferred dividends — a total of $24 per share (two missed years plus the current year, at $8 each) — before any dividend can be paid to common shareholders",
      "The missed dividends are forfeited entirely because the preferred stock is non-participating",
      "Preferred shareholders must convert their shares into common stock before they can receive any back dividends"
    ],
    "answerIndex": 1,
    "explanation": "Cumulative preferred dividends that are skipped accumulate as arrearages that must be fully paid before any dividend can be distributed to common shareholders. Two missed years plus the current year at $8 per share totals $24 per share owed."
  },
  {
    "section": 2,
    "topic": "bond valuation / duration",
    "yield": "high",
    "trap": false,
    "question": "An investor purchases a 20-year, 7% corporate bond at par. The bond is callable in 5 years at 103. If interest rates decline sharply and the issuer calls the bond at the first opportunity, which yield measure best reflects the investor's actual realized return, and how does it compare with the yield to maturity calculated at purchase?",
    "options": [
      "Yield to maturity; it will be identical to the yield to call in this scenario",
      "Yield to call; because the bond was bought at par and redeemed early at a 103 call premium after only 5 years, the realized yield to call will likely exceed the original 7% yield to maturity",
      "Current yield; because it reflects only coupon income and ignores the timing of principal repayment",
      "Yield to worst, which by definition is always lower than a bond's yield to maturity when purchased at par"
    ],
    "answerIndex": 1,
    "explanation": "Because the bond was purchased at par (so YTM equaled the 7% coupon) and was called early at a 103 premium, the extra capital gain realized over a shorter holding period boosts the annualized realized return above the original YTM — this is captured by yield to call."
  },
  {
    "section": 2,
    "topic": "municipal bonds",
    "yield": "med",
    "trap": true,
    "question": "A resident of State A purchases a municipal bond issued by a municipal authority located within State A, and the investor owes no alternative minimum tax. Which of the following best describes the taxation of the bond's interest income?",
    "options": [
      "Exempt from federal income tax only; state income tax still applies because it is a local bond",
      "Exempt from federal income tax and, in most cases, also exempt from that investor's home-state income tax (double tax-exempt), because the bond was issued within the investor's state of residence",
      "Fully taxable at both the federal and state level because municipal bond tax exemption was eliminated in 2018",
      "Exempt from state tax only; federal income tax still applies at ordinary income rates"
    ],
    "answerIndex": 1,
    "explanation": "Interest on most municipal bonds is exempt from federal income tax, and most states also exempt interest on bonds issued by municipalities within that same state, producing a \"double tax-exempt\" result for in-state residents."
  },
  {
    "section": 2,
    "topic": "municipal bonds",
    "yield": "med",
    "trap": false,
    "question": "An investor evaluating two callable municipal revenue bonds notices that one issue has a sinking fund provision requiring the issuer to retire a portion of the bonds annually, while the other issue has no sinking fund. From the investor's perspective, which statement about the sinking fund bond is most accurate?",
    "options": [
      "It carries higher risk because sinking fund provisions increase the total amount of debt outstanding over time",
      "It generally carries somewhat lower credit risk and may trade at a slightly lower yield, since systematic retirement of debt reduces the amount outstanding at final maturity and signals orderly repayment",
      "It cannot be called prior to final maturity under any circumstances",
      "It eliminates reinvestment risk entirely because all bonds in the issue are retired on the exact same date"
    ],
    "answerIndex": 1,
    "explanation": "Sinking fund provisions require an issuer to periodically retire portions of an outstanding bond issue, which reduces the amount of debt outstanding at maturity and provides evidence of an orderly repayment plan, typically viewed favorably by credit markets."
  },
  {
    "section": 2,
    "topic": "municipal bonds",
    "yield": "med",
    "trap": false,
    "question": "A municipality issues $50 million in bonds structured as a serial bond issue, with portions maturing each year from 2027 through 2046. Which statement best compares this structure with a term bond issue of the same total size?",
    "options": [
      "All $50 million matures on a single date, exactly like a term bond, so the two structures are functionally identical",
      "Serial bonds spread principal repayment across many maturity dates, which can lower borrowing costs and reduce the issuer's refinancing (rollover) risk, whereas a term bond issue repays the full principal in one lump sum at a single maturity date",
      "Serial bonds are legally required to pay a lower coupon than any term bond of comparable credit quality",
      "Serial bonds must always be secured by the issuer's full taxing power, while term bonds must always be revenue bonds"
    ],
    "answerIndex": 1,
    "explanation": "A serial bond issue matures in installments over many years, spreading out the issuer's repayment obligation and reducing the risk of needing to refinance one large lump sum, unlike a term bond issue where the entire principal comes due at a single maturity date."
  },
  {
    "section": 2,
    "topic": "Treasuries / agencies",
    "yield": "high",
    "trap": false,
    "question": "An investor purchases Treasury STRIPS (Separate Trading of Registered Interest and Principal Securities) in a taxable brokerage account. Which of the following is a key characteristic the investor should understand about this product?",
    "options": [
      "STRIPS pay semiannual coupon interest just like conventional Treasury notes and bonds",
      "STRIPS are purchased at a deep discount to face value, pay no periodic cash interest, and the annually accreted imputed interest is taxable as ordinary income even though no cash is received until maturity",
      "STRIPS carry meaningful credit risk because separating the coupon from principal removes the U.S. government's backing",
      "STRIPS have no interest rate risk because their cash flows were stripped from the original coupon payments"
    ],
    "answerIndex": 1,
    "explanation": "STRIPS are zero-coupon instruments created by separating a Treasury security's principal and interest components; they are sold at a discount and, despite paying no periodic cash interest, generate annual phantom taxable income under original issue discount rules."
  },
  {
    "section": 2,
    "topic": "investment vehicles",
    "yield": "med",
    "trap": true,
    "question": "A coupon bond trades at a discount. The approximate YTM shortcut (coupon plus average annual accretion, over the average of par and price) is teaching that:",
    "options": [
      "YTM is above the coupon because the investor also earns the pull from discount up to par if held to maturity",
      "YTM equals the coupon on every discount bond",
      "YTM is below current yield on discount bonds",
      "YTM ignores the difference between price and par"
    ],
    "answerIndex": 0,
    "explanation": "Discount → YTM > current yield > coupon. Understand the shortcut's story; do not grind $62 / $940 ≈ 6.60% for exam prep."
  },
  {
    "section": 2,
    "topic": "options",
    "yield": "high",
    "trap": false,
    "question": "An investor buys 100 shares of ABC stock at $60 per share and simultaneously sells one ABC call option with a $65 strike for a premium of $2.50 per share, writing a covered call. If the stock rises to $70 at expiration and the call is exercised, what is the investor's total profit per share?",
    "options": [
      "$10.00, the full amount the stock appreciated",
      "$7.50, consisting of $5.00 in stock appreciation up to the strike plus the $2.50 premium collected",
      "$2.50, only the premium collected, since the stock gain is forfeited entirely upon exercise",
      "$12.50, the sum of the $10.00 stock gain plus the $2.50 premium with no cap on upside"
    ],
    "answerIndex": 1,
    "explanation": "A covered call caps the stock gain at the strike price. The investor keeps $5.00 of stock appreciation (from $60 to the $65 strike) plus the $2.50 premium collected, for a total profit of $7.50 per share, even though the market price rose to $70."
  },
  {
    "section": 2,
    "topic": "options",
    "yield": "high",
    "trap": false,
    "question": "An investor is long 100 shares of XYZ stock purchased at $80 per share. To protect against a decline while preserving upside potential, she buys one XYZ put option with a $75 strike for a premium of $3 per share. What is her maximum possible loss per share on the combined position, and what is her break-even price?",
    "options": [
      "Maximum loss is unlimited; break-even is $75",
      "Maximum loss is $8 per share (the $5 stock decline to the strike plus the $3 premium paid); break-even is $83 per share",
      "Maximum loss is $3 per share; break-even is $80 per share",
      "Maximum loss is $5 per share; break-even is $75 per share"
    ],
    "answerIndex": 1,
    "explanation": "The protective put limits downside risk to the difference between the purchase price and strike ($80 − $75 = $5) plus the premium paid ($3), for a maximum loss of $8 per share. Break-even equals the original purchase price plus the premium paid: $80 + $3 = $83."
  },
  {
    "section": 2,
    "topic": "options",
    "yield": "high",
    "trap": false,
    "question": "An investor writes (sells) one uncovered (naked) call option on DEF stock with a $50 strike, collecting a premium of $4 per share. The investor does not currently own shares, and the stock later rises sharply to $80 at expiration. What is the investor's approximate loss per share if assigned and forced to buy shares in the market to deliver?",
    "options": [
      "$4 per share, limited to the premium originally received",
      "$26 per share ($30 loss on having to buy at $80 and deliver at $50, minus the $4 premium collected)",
      "Zero, because naked call writers can never be assigned when the market is rising",
      "$50 per share, equal to the full strike price"
    ],
    "answerIndex": 1,
    "explanation": "A naked call writer has theoretically unlimited risk. If assigned, the writer must buy stock in the open market at $80 and deliver it for only $50, a $30 loss, offset by the $4 premium received, for a net loss of $26 per share."
  },
  {
    "section": 2,
    "topic": "options",
    "yield": "high",
    "trap": false,
    "question": "A portfolio manager holds a diversified bond portfolio and is concerned that rising interest rates over the next quarter will reduce the portfolio's value. Which options strategy would most directly hedge against this specific risk?",
    "options": [
      "Selling covered calls against the bond portfolio's holdings to generate additional income",
      "Buying put options on an interest-rate-sensitive bond index or futures contract, which increase in value as bond prices fall when rates rise",
      "Buying call options on the same bond index, which profit if bond prices rise",
      "Writing cash-secured puts on the bond index to collect premium income"
    ],
    "answerIndex": 1,
    "explanation": "Since bond prices fall when interest rates rise, buying put options on a bond index or futures contract provides a hedge: the puts gain value as the hedged bond positions lose value, offsetting the portfolio's decline."
  },
  {
    "section": 2,
    "topic": "investment vehicles",
    "yield": "high",
    "trap": false,
    "question": "An investor believes a stock will experience a large price move but is uncertain of the direction. She buys one at-the-money call and one at-the-money put on the same stock, with the same strike price and expiration date. This is best described as which strategy, and what is required for it to be profitable?",
    "options": [
      "A straddle; the stock must move far enough in either direction to exceed the combined premiums paid for both options",
      "A spread; the stock must stay exactly at the strike price at expiration",
      "A collar; profit is generated regardless of which direction the stock moves, even with minimal movement",
      "A covered combination; profit requires the investor to already own the underlying shares"
    ],
    "answerIndex": 0,
    "explanation": "Buying a call and a put with the same strike and expiration is a long straddle. It profits from a large price move in either direction, once the move exceeds the total premium paid for both options; small price moves result in a loss of some or all of the premium."
  },
  {
    "section": 2,
    "topic": "pooled investments",
    "yield": "med",
    "trap": false,
    "question": "An open-end mutual fund calculates its NAV once per business day after market close, while a closed-end fund of similar composition trades continuously throughout the day on an exchange. Which statement correctly distinguishes the two structures?",
    "options": [
      "Both fund types issue a fixed number of shares at inception and never issue or redeem additional shares",
      "The open-end fund continuously issues and redeems shares at NAV, while the closed-end fund has a fixed number of shares outstanding that trade at a market price which may differ from NAV (a premium or discount)",
      "Closed-end funds must always redeem shares directly from the fund at NAV upon shareholder request",
      "Open-end funds trade throughout the day on exchanges, while closed-end funds only price once daily"
    ],
    "answerIndex": 1,
    "explanation": "Open-end funds continuously create and redeem shares at NAV based on investor demand, keeping share price aligned with NAV. Closed-end funds issue a fixed number of shares in an IPO, and thereafter shares trade on an exchange at a market-determined price that can significantly deviate from underlying NAV."
  },
  {
    "section": 2,
    "topic": "pooled investments",
    "yield": "med",
    "trap": false,
    "question": "A unit investment trust (UIT) is created with a fixed portfolio of 25 municipal bonds and a stated termination date 20 years in the future. Which of the following best describes how a UIT differs from an actively managed open-end mutual fund?",
    "options": [
      "A UIT has a professional portfolio manager who actively trades securities to seek outperformance, just like a mutual fund",
      "A UIT's portfolio is fixed at inception and is not actively managed or traded; the trust dissolves on its stated termination date, whereas an open-end fund is continuously and actively managed with no fixed termination",
      "A UIT continuously issues new units that are redeemable at NAV and has no fixed portfolio",
      "A UIT is legally structured as a corporation, while a mutual fund is legally structured as a trust"
    ],
    "answerIndex": 1,
    "explanation": "UITs purchase a fixed, unmanaged portfolio of securities at inception and hold it largely unchanged until the trust terminates on a predetermined date; this passive, fixed structure contrasts with an open-end mutual fund's ongoing active management and perpetual existence."
  },
  {
    "section": 2,
    "topic": "pooled investments",
    "yield": "med",
    "trap": false,
    "question": "An ETF's shares are trading on the exchange at a price notably below its underlying NAV. Which action by an authorized participant (AP) would help correct this discount?",
    "options": [
      "The AP buys ETF shares on the open market and redeems them in-kind with the ETF sponsor in exchange for the underlying basket of securities, reducing ETF share supply and pushing the market price back up toward NAV",
      "The AP creates new ETF shares by delivering the underlying securities basket to the sponsor, increasing ETF share supply",
      "The AP asks the ETF sponsor to increase the expense ratio to discourage further selling",
      "The AP shorts the underlying securities and buys additional ETF shares to widen the discount further"
    ],
    "answerIndex": 0,
    "explanation": "When an ETF trades at a discount to NAV, an AP can buy the undervalued ETF shares on the market and redeem them in-kind for the more valuable underlying securities basket, profiting from the spread while reducing ETF share supply, which pushes the market price back toward NAV."
  },
  {
    "section": 2,
    "topic": "ETF / UIT",
    "yield": "med",
    "trap": false,
    "question": "An investor in a taxable account compares a traditional actively managed equity mutual fund to a similarly invested equity ETF tracking the same index. Both have comparable expense ratios. Which factor most explains why the ETF is likely to generate fewer taxable capital gains distributions to the investor over time?",
    "options": [
      "ETFs are legally prohibited from ever distributing capital gains to shareholders",
      "The ETF's in-kind creation and redemption mechanism allows the fund to remove low-basis securities from the portfolio without triggering a taxable sale inside the fund, unlike the mutual fund which must sell securities to meet cash redemptions",
      "Mutual funds are required by law to distribute 100% of realized gains annually, while ETFs have no such requirement",
      "ETFs hold no appreciated securities because they only track passive indexes"
    ],
    "answerIndex": 1,
    "explanation": "ETFs use in-kind redemptions with authorized participants, allowing the fund to hand off appreciated securities without an internal taxable sale. Mutual funds meeting cash redemptions may need to sell appreciated securities, realizing gains that must be distributed to all remaining shareholders, including those who didn't redeem."
  },
  {
    "section": 2,
    "topic": "unethical practices",
    "yield": "med",
    "trap": false,
    "question": "An investor purchases $30,000 of Class A shares in a mutual fund family that offers a breakpoint schedule with a reduced sales charge starting at $50,000. The fund also permits a Letter of Intent (LOI). If the investor signs an LOI committing to invest an additional $25,000 within 13 months, what is the primary benefit?",
    "options": [
      "The LOI eliminates all future sales charges permanently on any purchases in the fund family",
      "The LOI allows the investor to receive the reduced sales charge applicable to the $50,000 breakpoint immediately on the initial $30,000 purchase, in anticipation of reaching that total within the stated time frame",
      "The LOI requires the fund company to refund all sales charges already paid on prior unrelated purchases",
      "The LOI guarantees the fund's future performance will match the breakpoint discount percentage"
    ],
    "answerIndex": 1,
    "explanation": "A Letter of Intent lets an investor commit in writing to invest a specified total amount (usually within 13 months) and receive the reduced sales charge for that total breakpoint immediately, rather than waiting until the full amount is actually invested."
  },
  {
    "section": 2,
    "topic": "pooled investments",
    "yield": "med",
    "trap": false,
    "question": "A mutual fund investor is deciding between Class A, B, and C shares of the same fund for a $200,000 investment intended to be held for at least 15 years. The fund offers breakpoints starting at $100,000. Which choice is generally most cost-effective for this investor?",
    "options": [
      "Class C shares, because they have no front-end load at all regardless of investment size",
      "Class A shares, because the $200,000 investment qualifies for a substantial breakpoint discount on the front-end load, and the lower ongoing 12b-1 fees will minimize costs over a long holding period",
      "Class B shares, because the contingent deferred sales charge is always cheaper than a front-end load for large investments",
      "It makes no difference because all share classes charge identical total fees regardless of investment size or holding period"
    ],
    "answerIndex": 1,
    "explanation": "For a large investment held long-term, Class A shares are usually most cost-effective because a large purchase can qualify for breakpoint discounts that substantially reduce the front-end load, and Class A's lower ongoing 12b-1 fees compound favorably over a long holding period compared with B or C shares."
  },
  {
    "section": 2,
    "topic": "investment vehicles",
    "yield": "med",
    "trap": false,
    "question": "A mutual fund shareholder has a Rights of Accumulation (ROA) privilege with a fund family. She currently holds $42,000 in Fund X and wants to invest an additional $10,000 in Fund X. The fund family's breakpoint schedule offers a reduced sales charge starting at $50,000. Which statement about the ROA privilege is correct?",
    "options": [
      "ROA only applies to purchases made on the exact same day, so this purchase would not qualify for any discount",
      "Her existing $42,000 holding can be combined with the new $10,000 purchase under ROA, bringing the total to $52,000, which qualifies the new purchase for the reduced sales charge at the $50,000 breakpoint",
      "ROA privileges apply only to retirement accounts and cannot be used in a taxable brokerage account",
      "She must first redeem her existing shares before the ROA privilege can be applied to a new purchase"
    ],
    "answerIndex": 1,
    "explanation": "Rights of Accumulation allow an investor to aggregate the current value of existing fund family holdings with a new purchase to determine eligibility for sales charge breakpoints. Her combined total of $52,000 qualifies the new $10,000 purchase for the reduced sales charge."
  },
  {
    "section": 2,
    "topic": "pooled investments",
    "yield": "med",
    "trap": true,
    "question": "A fund's annual expense ratio (excluding sales loads) is:",
    "options": [
      "The sum of ongoing costs such as the 12b-1 fee, management fee, and other operating expenses—not a one-time load",
      "The 12b-1 fee only",
      "The front-end sales charge plus the CDSC",
      "Management fee minus 12b-1"
    ],
    "answerIndex": 0,
    "explanation": "Expense ratio = ongoing annual costs. Loads are separate. No need to add 0.75 + 0.50 + 0.10 = 1.35 as exam drill."
  },
  {
    "section": 2,
    "topic": "pooled investments",
    "yield": "med",
    "trap": false,
    "question": "An investor redeems Class B shares of a mutual fund after holding them for exactly 4 years. The fund's contingent deferred sales charge (CDSC) schedule declines from 5% in year one to 1% in year five, reaching zero after year six. What sales charge, if any, will the investor most likely pay upon this redemption?",
    "options": [
      "No sales charge, because Class B shares never impose a CDSC after the first year",
      "A CDSC based on the applicable declining percentage for year four of the holding period, typically around 2%, applied to the original investment or redemption value depending on the fund's specific schedule",
      "The full 5% first-year CDSC regardless of how long the shares were held",
      "A front-end sales charge is also assessed in addition to the CDSC upon redemption"
    ],
    "answerIndex": 1,
    "explanation": "Class B shares impose a contingent deferred sales charge that declines each year the shares are held, typically disappearing entirely after five to eight years. Redeeming in year four would trigger the applicable declining-scale percentage for that year, not the full initial rate nor zero."
  },
  {
    "section": 2,
    "topic": "unethical practices",
    "yield": "med",
    "trap": false,
    "question": "A money market mutual fund is described in its prospectus as seeking to maintain a stable $1.00 net asset value per share. Which of the following statements about this type of fund is most accurate?",
    "options": [
      "Money market funds are insured by the FDIC in the same manner as bank deposit accounts",
      "Money market funds invest in high-quality, short-term debt instruments and, while most seek a stable $1.00 NAV, they are not federally insured and it is possible, though rare, for a fund to break the buck if it cannot maintain that value",
      "Money market funds are guaranteed by the U.S. Treasury never to lose principal value",
      "Money market funds typically hold long-term corporate bonds to generate higher current income than short-term instruments"
    ],
    "answerIndex": 1,
    "explanation": "Money market funds invest in high-quality, short-term instruments such as T-bills, commercial paper, and repos, and most retail funds aim to maintain a stable $1.00 NAV, but this is not guaranteed or federally insured; in rare stress events a fund's NAV can fall below $1.00 (breaking the buck)."
  },
  {
    "section": 2,
    "topic": "unethical practices",
    "yield": "high",
    "trap": false,
    "question": "A 60-year-old investor purchases a variable annuity and allocates the entire premium to equity subaccounts. During the accumulation phase, which statement correctly describes the risk borne by the annuity owner as compared to a fixed annuity?",
    "options": [
      "The insurance company bears all investment risk, and the owner is guaranteed a minimum stated return regardless of subaccount performance",
      "The owner bears the investment risk of the subaccounts, since the annuity's cash value and eventual payout fluctuate with the performance of the underlying separate account investments, unlike a fixed annuity where the insurer bears the investment risk and guarantees the rate",
      "Variable annuities guarantee the same minimum crediting rate as fixed annuities, eliminating market risk for the owner",
      "There is no meaningful difference in risk allocation between fixed and variable annuities during the accumulation phase"
    ],
    "answerIndex": 1,
    "explanation": "In a variable annuity, premiums are invested in separate account subaccounts chosen by the owner, and the account value rises and falls with the performance of those investments, meaning the owner bears the investment risk. In a fixed annuity, the insurer bears the investment risk and guarantees a minimum rate."
  },
  {
    "section": 2,
    "topic": "annuities",
    "yield": "high",
    "trap": false,
    "question": "A retiree annuitizes a nonqualified variable annuity and elects a straight life payout option. Compared to a joint-and-survivor payout option with the same account value, which statement is correct?",
    "options": [
      "The straight life option will produce a lower periodic payment because it must also provide income to a second beneficiary",
      "The straight life option will produce the highest periodic payment of the two, because payments are based on a single life expectancy and cease entirely at the annuitant's death with no further payout to a survivor",
      "Both options must legally provide identical monthly payments regardless of the number of lives covered",
      "The joint-and-survivor option always pays more because it covers two people instead of one"
    ],
    "answerIndex": 1,
    "explanation": "A straight life (single life) annuity payout is calculated using only the annuitant's life expectancy, ceasing at death with no continuing payments, which allows for the highest periodic payment among common payout options. A joint-and-survivor option must fund payments over two lives, resulting in a lower periodic payment for the same account value."
  },
  {
    "section": 2,
    "topic": "annuities",
    "yield": "high",
    "trap": false,
    "question": "A client purchases a nonqualified fixed annuity with $100,000 and it grows to $140,000 before she begins taking withdrawals under the last-in, first-out (LIFO) tax treatment applicable to nonqualified annuities. What is the tax treatment of her first withdrawal?",
    "options": [
      "The withdrawal is entirely a tax-free return of principal because withdrawals are treated as return of basis first",
      "The withdrawal is taxed as ordinary income to the extent it represents earnings (the $40,000 of growth), since nonqualified annuity withdrawals are taxed LIFO, with earnings coming out first and taxed as ordinary income, potentially with a 10% penalty if taken before age 59 1/2",
      "The withdrawal is taxed entirely as a long-term capital gain regardless of the amount withdrawn",
      "The withdrawal is tax-free because annuity earnings are never taxed if held for more than five years"
    ],
    "answerIndex": 1,
    "explanation": "Nonqualified annuity withdrawals follow LIFO tax treatment: earnings (the growth above basis) are considered withdrawn first and are taxed as ordinary income, not capital gains. Withdrawals before age 59 1/2 may also incur a 10% early withdrawal penalty on the taxable portion."
  },
  {
    "section": 2,
    "topic": "annuities",
    "yield": "high",
    "trap": false,
    "question": "A client purchases an equity-indexed annuity with a 70% participation rate and a 6% annual cap, tied to a broad stock index. If the referenced index rises 12% in one contract year, how much index-linked growth will the client's contract value receive?",
    "options": [
      "12%, the full amount of the index gain",
      "8.4% (70% of 12%), but this result is subject to the 6% annual cap, so the client actually receives 6% for that year",
      "6%, calculated as the participation rate applied to the cap",
      "0%, because equity-indexed annuities never credit gains in years the cap is exceeded"
    ],
    "answerIndex": 1,
    "explanation": "Applying the 70% participation rate to the 12% index gain would produce 8.4%, but because the contract has a 6% annual cap, the credited return is limited to the lower cap amount of 6% for that contract year."
  },
  {
    "section": 2,
    "topic": "equity characteristics",
    "yield": "med",
    "trap": false,
    "question": "A REIT distributes 95% of its taxable income to shareholders each year to maintain its favorable tax status. Which statement about REIT distributions to individual shareholders is most accurate?",
    "options": [
      "REIT distributions are always taxed as long-term capital gains regardless of the underlying source of the income",
      "A portion of REIT distributions is typically taxed as ordinary income (not eligible for the qualified dividend rate), since the REIT itself generally avoids corporate-level tax by distributing most of its income, and distributions may also include return-of-capital and capital-gain components",
      "REIT distributions are entirely tax-exempt to shareholders because REITs do not pay corporate income tax on distributed income",
      "REIT distributions are only taxable if the shareholder sells the shares within the same calendar year"
    ],
    "answerIndex": 1,
    "explanation": "Because a REIT generally does not pay corporate tax on income it distributes, most REIT dividends do not qualify for the lower qualified-dividend tax rate and are instead taxed to shareholders as ordinary income; distributions can also include nontaxable return-of-capital and capital-gain components, each taxed differently."
  },
  {
    "section": 2,
    "topic": "pooled investments",
    "yield": "med",
    "trap": false,
    "question": "An investor is comparing a publicly traded (exchange-listed) equity REIT to a nontraded REIT with similar underlying real estate holdings. Which of the following is the most significant practical difference for a client who may need to access funds within two years?",
    "options": [
      "Nontraded REITs offer superior daily liquidity compared with exchange-listed REITs",
      "The exchange-listed REIT can generally be sold quickly at a transparent, market-determined price, while the nontraded REIT is illiquid, often has limited or no redemption windows, and may be difficult to sell before a liquidity event",
      "Both REIT types provide identical liquidity because all REITs are legally required to redeem shares at NAV upon request",
      "Nontraded REITs are always safer investments because they are not subject to daily price volatility"
    ],
    "answerIndex": 1,
    "explanation": "Exchange-listed REITs trade continuously on a stock exchange with readily available market pricing, offering good liquidity. Nontraded REITs are not listed, typically have long holding periods, limited redemption programs, and significant illiquidity, making them unsuitable for a client with a near-term liquidity need."
  },
  {
    "section": 2,
    "topic": "business entities",
    "yield": "med",
    "trap": false,
    "question": "A limited partner invests $50,000 in a real estate direct participation program (DPP) structured as a limited partnership. The DPP subsequently loses money and creditors sue the partnership. What is the maximum amount the limited partner can lose as a result of the partnership's liabilities?",
    "options": [
      "Unlimited, because all partners in a partnership bear unlimited personal liability for partnership debts",
      "The limited partner's loss is generally limited to the amount invested (the capital contribution), because limited partners, unlike the general partner, have limited liability and are not personally liable for partnership debts beyond their investment",
      "Zero, because limited partnerships fully indemnify all partners against any losses by law",
      "The limited partner is liable only for the general partner's personal debts, not the partnership's business debts"
    ],
    "answerIndex": 1,
    "explanation": "A key feature of the limited partnership structure is that limited partners enjoy limited liability, meaning their financial exposure is generally capped at their capital contribution, whereas the general partner bears unlimited personal liability for the partnership's obligations."
  },
  {
    "section": 2,
    "topic": "unethical practices",
    "yield": "med",
    "trap": false,
    "question": "An investor purchases participating preferred stock of XYZ Corp with a stated 6% dividend rate and a $100 par value. In a year when the corporation performs exceptionally well and pays a larger-than-normal dividend to common shareholders, which statement about the participating preferred shares is correct?",
    "options": [
      "Participating preferred shareholders are contractually limited to the stated 6% dividend and can never receive more, regardless of common stock performance",
      "In addition to the guaranteed stated 6% dividend, participating preferred shareholders may be entitled to receive an additional dividend based on a formula tied to common shareholder distributions, as specified in the preferred stock's provisions",
      "Participating preferred stock automatically converts to common stock whenever common dividends exceed the preferred dividend rate",
      "Participating preferred shareholders lose their preferred dividend entirely in any year that common shareholders receive an above-average dividend"
    ],
    "answerIndex": 1,
    "explanation": "Participating preferred stock entitles the holder to the stated fixed dividend plus the potential to participate in additional distributions when the company performs particularly well, based on formulas set out in the stock's provisions, unlike straight (non-participating) preferred stock, which is limited strictly to its stated rate."
  },
  {
    "section": 2,
    "topic": "unethical practices",
    "yield": "high",
    "trap": false,
    "question": "An investor purchases a callable preferred stock with a 7% dividend rate, callable at $105 (par $100), five years from now. Market interest rates have since fallen significantly. Which statement best describes the likely effect on the preferred stock's price and the issuer's incentive?",
    "options": [
      "The issuer has no incentive to call the shares because falling rates never affect preferred stock pricing",
      "The preferred stock's price will likely rise toward the call price, and the issuer has an increased incentive to call and refinance the shares with lower-cost preferred or debt, capping further price appreciation for the investor near the call price",
      "The preferred stock's price will fall because callable securities always decline when interest rates fall",
      "The call feature guarantees the investor will receive a price above $105 regardless of market conditions"
    ],
    "answerIndex": 1,
    "explanation": "Like callable bonds, callable preferred stock is subject to having its price appreciation capped as it approaches the call price when rates decline, because the issuer becomes more likely to call and refinance at a lower dividend rate, limiting the investor's upside from falling rates."
  },
  {
    "section": 2,
    "topic": "exempt transactions",
    "yield": "med",
    "trap": true,
    "question": "A sophisticated investor wants to invest in a hedge fund that uses significant leverage and short selling, targeting absolute returns uncorrelated with the broader market. Which of the following is a key structural characteristic the investor should understand before investing?",
    "options": [
      "Hedge funds are required to register as investment companies under the Investment Company Act of 1940, just like mutual funds",
      "Hedge funds are typically structured as private placements exempt from Investment Company Act registration, generally available only to accredited investors or qualified purchasers, and often feature high fees (e.g., a management fee plus a performance/incentive fee), limited liquidity, and lock-up periods",
      "Hedge funds must provide daily liquidity and NAV pricing identical to open-end mutual funds",
      "Hedge funds are prohibited from charging any performance-based incentive fees under federal securities law"
    ],
    "answerIndex": 1,
    "explanation": "Hedge funds typically rely on private placement exemptions (avoiding registration as investment companies), restrict investment to accredited investors or qualified purchasers, and commonly charge a management fee plus an incentive fee (e.g., \"2 and 20\"), while imposing lock-up periods and limited redemption windows that reduce liquidity compared with mutual funds."
  },
  {
    "section": 2,
    "topic": "unethical practices",
    "yield": "high",
    "trap": false,
    "question": "A financial planner is comparing a fixed annuity to a certificate of deposit (CD) for a risk-averse retiree seeking guaranteed principal protection and steady income. Which of the following is a key distinction between the two, aside from FDIC insurance coverage on the CD?",
    "options": [
      "Fixed annuities and CDs are functionally identical in every respect, including tax treatment of interest earned",
      "Fixed annuity earnings grow tax-deferred until withdrawal, whereas CD interest is generally taxable annually as it is earned (or credited), even if not withdrawn",
      "CD interest grows tax-deferred, whereas fixed annuity earnings are taxed annually regardless of withdrawal",
      "Fixed annuities are insured by the FDIC in the same manner as bank CDs"
    ],
    "answerIndex": 1,
    "explanation": "A fixed annuity's earnings grow on a tax-deferred basis, with taxation deferred until withdrawal, while a bank CD's interest is generally taxable in the year it is earned or credited, regardless of whether the depositor withdraws it. Annuities are backed by the issuing insurer, not FDIC-insured like CDs."
  },
  {
    "section": 2,
    "topic": "unethical practices",
    "yield": "high",
    "trap": false,
    "question": "A portfolio manager sells 10 put option contracts on a broad market index as part of a cash-secured put writing strategy, setting aside sufficient cash to purchase the underlying at the strike price if assigned. Which statement about this strategy's risk/return profile is correct?",
    "options": [
      "The strategy has unlimited profit potential and unlimited risk, similar to a naked short call",
      "The strategy's maximum profit is limited to the premium received, while its maximum loss occurs if the index falls to zero (loss equal to the strike price minus the premium received, per share), making it economically similar to a covered call from a risk perspective",
      "The strategy guarantees a profit regardless of market direction because cash is held in reserve",
      "The strategy has no risk at all because the position is fully cash-secured"
    ],
    "answerIndex": 1,
    "explanation": "A cash-secured put writer's maximum gain is capped at the premium received, while the maximum loss (if the underlying falls to zero) equals the strike price minus the premium received per share. This risk/reward profile mirrors that of a covered call, though the mechanics differ."
  },
  {
    "section": 2,
    "topic": "Treasuries / agencies",
    "yield": "med",
    "trap": true,
    "question": "A T-bill bought at a discount has an investment yield that:",
    "options": [
      "Uses the discount relative to the purchase price (not par) in the denominator, so it exceeds the discount-from-face quote",
      "Always equals the coupon on a T-note of the same maturity",
      "Is computed only as discount divided by face, which overstates the investor's return",
      "Ignores the purchase price entirely"
    ],
    "answerIndex": 0,
    "explanation": "Know price vs face in the denominator. You do not need $20 / $980 ≈ 2.04% as a Series 65 skill."
  },
  {
    "section": 2,
    "topic": "investment vehicles",
    "yield": "med",
    "trap": false,
    "question": "A retail client purchases $18,000 of Class A shares in Fund X and simultaneously (through the same fund family) has an immediate family member's account holding $35,000 in the identical fund. The fund family's breakpoint schedule considers combined family holdings for breakpoint purposes. Under the sales-charge breakpoint rules, what should the selling representative do?",
    "options": [
      "Ignore the family member's holdings entirely, since breakpoints only apply to purchases made by the exact same named account holder",
      "Aggregate the client's new $18,000 purchase with the qualifying family member's existing $35,000 holding (totaling $53,000) to determine whether a breakpoint discount applies, since many funds permit combining holdings of immediate family members for breakpoint purposes",
      "Automatically deny any breakpoint discount because only retirement account holdings can be aggregated",
      "Charge the maximum sales load regardless of combined holdings to avoid any compliance risk"
    ],
    "answerIndex": 1,
    "explanation": "Many mutual fund breakpoint schedules permit aggregating holdings of immediate family members within the same household for purposes of determining breakpoint eligibility. Failing to inform the client of available breakpoints, when eligible, is considered a sales practice violation."
  },
  {
    "section": 2,
    "topic": "bond valuation / duration",
    "yield": "high",
    "trap": false,
    "question": "An issuer sells a floating-rate note that resets its coupon quarterly based on a short-term reference rate plus a fixed spread. Compared with a fixed-rate bond of the same maturity and credit quality, which statement about the floating-rate note's price sensitivity to changes in market interest rates is correct?",
    "options": [
      "The floating-rate note will experience significantly larger price swings than the fixed-rate bond when rates change",
      "The floating-rate note's price will remain relatively stable when market rates change because its coupon periodically resets to reflect current rates, giving it a much lower effective duration than a comparable fixed-rate bond",
      "Floating-rate notes have exactly the same duration as fixed-rate bonds of the same maturity",
      "Floating-rate notes are entirely immune to credit risk because their coupon adjusts with market rates"
    ],
    "answerIndex": 1,
    "explanation": "Because a floating-rate note's coupon resets periodically to reflect prevailing short-term rates, its price remains relatively stable when general interest rates move, giving it a much lower effective duration (and thus lower interest-rate risk) than a fixed-rate bond of comparable maturity, though it still carries credit risk."
  },
  {
    "section": 2,
    "topic": "investment vehicles",
    "yield": "high",
    "trap": false,
    "question": "An investor holds a bond that is putable at par at the investor's option after five years. If interest rates rise significantly after purchase, which statement best describes the value and benefit of this put feature to the bondholder?",
    "options": [
      "The put feature is worthless when rates rise because put bonds can only be exercised when rates fall",
      "The put feature becomes valuable when rates rise, because it allows the bondholder to sell the bond back to the issuer at par, avoiding the market price decline that would otherwise occur on a comparable non-putable bond",
      "The put feature obligates the issuer to raise the coupon rate instead of allowing redemption at par",
      "The put feature has no effect on the bond's price behavior compared with an otherwise identical non-putable bond"
    ],
    "answerIndex": 1,
    "explanation": "A put bond gives the holder the right to sell the bond back to the issuer at a predetermined price (often par) on specified dates. When interest rates rise and the bond's market price would otherwise fall, this put feature protects the investor by allowing redemption at par, limiting downside price risk."
  },
  {
    "section": 2,
    "topic": "ETF / UIT",
    "yield": "med",
    "trap": false,
    "question": "A financial adviser recommends a leveraged inverse ETF designed to deliver -2x the daily return of an equity index to a buy-and-hold client with a five-year time horizon who wants to hedge a long-term equity position. Which of the following is the primary concern with this recommendation?",
    "options": [
      "Leveraged and inverse ETFs are designed to accurately track -2x the index's cumulative return over any holding period, including multi-year periods, making them ideal for this client",
      "Leveraged and inverse ETFs reset their leverage daily, so compounding effects over longer holding periods can cause significant tracking error and divergence from -2x the index's longer-term cumulative return, making them generally unsuitable for a multi-year buy-and-hold hedge",
      "Leveraged inverse ETFs are risk-free hedging instruments appropriate for any time horizon",
      "There is no material difference between a leveraged inverse ETF and a simple short sale of the index held over five years"
    ],
    "answerIndex": 1,
    "explanation": "Leveraged and inverse ETFs are designed to achieve their stated multiple of the underlying index's return on a daily basis, and due to daily rebalancing and compounding, their returns over longer periods (especially in volatile markets) often diverge substantially from the simple multiple of the index's longer-term return, making them unsuitable for extended holding periods."
  },
  {
    "section": 2,
    "topic": "options",
    "yield": "high",
    "trap": false,
    "question": "An investor holding a diversified stock portfolio wants protection against a broad market decline over the next quarter without selling any individual positions. Which strategy would most efficiently accomplish this using options?",
    "options": [
      "Buying calls on individual stocks within the portfolio to generate additional income",
      "Buying put options on a broad market index (such as one tracking the S&P 500) to hedge the portfolio's overall market exposure, since it is typically more efficient than buying puts on each individual holding",
      "Selling naked calls on a broad market index to generate downside protection",
      "Purchasing additional shares of the same stocks already held to average down the cost basis"
    ],
    "answerIndex": 1,
    "explanation": "Buying index put options provides a cost-effective way to hedge broad market risk across a diversified portfolio in a single transaction, rather than purchasing puts on each individual stock position, which would be more costly and administratively burdensome."
  },
  {
    "section": 2,
    "topic": "unethical practices",
    "yield": "high",
    "trap": false,
    "question": "A 45-year-old investor holds a $500,000 diversified portfolio, most of which is invested in a taxable brokerage account. Comparing an actively managed bond mutual fund to a laddered portfolio of individual municipal bonds held to maturity, which of the following is a key structural difference the adviser should explain?",
    "options": [
      "Both options guarantee the same fixed maturity date and eliminate all interest rate risk",
      "Individual bonds held to maturity have a known maturity date and return of principal (absent default), while a bond fund has no maturity date, and its NAV will fluctuate indefinitely with interest rate changes since the fund continuously buys and sells bonds to maintain its target duration",
      "Bond mutual funds always guarantee return of principal at a specific date, just like holding individual bonds to maturity",
      "There is no meaningful difference between the two approaches from an interest-rate-risk perspective"
    ],
    "answerIndex": 1,
    "explanation": "An individual bond held to maturity has a defined maturity date at which principal is returned (barring default), giving the investor certainty about eventual cash flow. A bond fund is a continuously managed, open-ended pool with no maturity date; its NAV fluctuates indefinitely with interest rates as the manager buys and sells bonds to maintain the fund's target duration and objectives."
  },
  {
    "section": 2,
    "topic": "municipal bonds",
    "yield": "med",
    "trap": true,
    "question": "A client in a high federal tax bracket is comparing a municipal bond to fully taxable alternatives. Tax-equivalent yield is used to:",
    "options": [
      "Gross up the muni by dividing its yield by (1 − the client's tax rate) so it can be compared to taxable yields",
      "Reduce the muni yield by multiplying by the tax rate",
      "Leave the muni yield unchanged because munis are never compared to taxables",
      "Convert YTM into current yield"
    ],
    "answerIndex": 0,
    "explanation": "TEY = tax-free yield / (1 − t). Higher brackets make a given muni more competitive. Skip 3.5% / 0.68 ≈ 5.15%."
  },
  {
    "section": 2,
    "topic": "municipal bonds",
    "yield": "med",
    "trap": true,
    "question": "The break-even tax bracket at which a muni and a taxable bond offer the same after-tax yield is:",
    "options": [
      "1 minus (muni yield / taxable yield); above that bracket the muni generally wins, below it the taxable generally wins",
      "The muni yield plus the taxable yield",
      "Always 37%, the top statutory rate",
      "The taxable yield divided by the muni yield, with no subtraction from 1"
    ],
    "answerIndex": 0,
    "explanation": "t* = 1 − (muni/taxable). Directional suitability, not a 30% plug-in."
  },
  {
    "section": 2,
    "topic": "wash sale",
    "yield": "high",
    "trap": false,
    "question": "An investor sells 400 shares of a stock at a loss on November 5 to harvest a tax loss. On November 20, the same investor purchases deep in-the-money call options on the same stock that are economically equivalent to owning the shares outright. What is the tax effect of this options purchase?",
    "options": [
      "It has no effect because options and stock are different security types.",
      "It triggers the wash sale rule because the options are a substantially identical position, disallowing the loss and adding it to the option's basis.",
      "It is permitted because the wash sale rule applies only to identical share purchases, not derivatives.",
      "It converts the loss from a capital loss into an ordinary loss."
    ],
    "answerIndex": 1,
    "explanation": "The wash sale rule disallows a loss when a taxpayer acquires a substantially identical position — including certain options that are economically equivalent to the stock — within 30 days before or after the sale. The disallowed loss is added to the basis of the new position."
  },
  {
    "section": 2,
    "topic": "estate / gift / ownership",
    "yield": "med",
    "trap": false,
    "question": "An investor purchases three equal lots of a mutual fund: 100 shares at $20, 100 shares at $25, and 100 shares at $30. Using the average cost basis method, what is the cost basis of 150 shares sold today?",
    "options": [
      "$2,000, using only the first lot purchased",
      "$3,000, using only the most recent lot",
      "$3,750, based on an average cost of $25 per share",
      "$4,500, based on an average cost of $30 per share"
    ],
    "answerIndex": 2,
    "explanation": "Total cost of all 300 shares = $2,000 + $2,500 + $3,000 = $7,500; average cost per share = $7,500 / 300 = $25.00. For 150 shares sold, basis = 150 × $25 = $3,750."
  },
  {
    "section": 2,
    "topic": "ETF / UIT",
    "yield": "high",
    "trap": false,
    "question": "A grantor establishes an irrevocable trust and retains the right to receive an annuity payment for a fixed term of years, after which the remaining trust assets pass to his children. This describes which estate planning technique, and what is its primary tax benefit?",
    "options": [
      "A GRAT (Grantor Retained Annuity Trust), which can transfer future appreciation to heirs with minimal gift tax if the assets outperform the IRS Section 7520 rate.",
      "A QTIP trust, which qualifies for the unlimited marital deduction.",
      "A charitable remainder trust, which provides an income tax deduction for the grantor.",
      "A 2503(c) minor's trust, which allows tax-free gifts to minors."
    ],
    "answerIndex": 0,
    "explanation": "A GRAT allows the grantor to retain an annuity for a term of years while transferring any appreciation above the IRS Section 7520 hurdle rate to remainder beneficiaries with reduced gift tax cost; if the grantor survives the term, this removes future appreciation from the estate."
  },
  {
    "section": 2,
    "topic": "discretion",
    "yield": "high",
    "trap": false,
    "question": "A 45-year-old client wants to compare a 20-year term life policy to a cash-value whole life policy to cover a $500,000 mortgage-protection need that will be fully paid off in 20 years. The client has limited discretionary income and wants the lowest-cost way to cover this specific, temporary need. Which recommendation is most appropriate?",
    "options": [
      "Whole life insurance, because the cash value component builds savings that can later be borrowed against.",
      "A 20-year level term life policy, because it provides the needed death benefit at the lowest premium cost for a temporary, defined need.",
      "Variable universal life, because it allows the client to invest the cash value in equity subaccounts for higher growth.",
      "Universal life with a low, flexible premium, because it never requires additional premium payments."
    ],
    "answerIndex": 1,
    "explanation": "For a temporary, clearly defined need (paying off a mortgage within 20 years) with limited discretionary income, level term insurance matched to the need's duration provides the necessary death benefit at the lowest cost; permanent insurance is more expensive and better suited to permanent needs."
  },
  {
    "section": 2,
    "topic": "bond valuation / duration",
    "yield": "high",
    "trap": false,
    "question": "A retiree's bond portfolio has a multi-year duration. If yields rise across the curve, duration predicts:",
    "options": [
      "A decline in market value; the longer the duration, the larger the percentage drop for a given yield increase",
      "An increase in market value, because coupons are fixed",
      "No change, because duration only measures credit risk",
      "A decline only if the portfolio holds zeros, not coupon bonds"
    ],
    "answerIndex": 0,
    "explanation": "% ΔP ≈ −duration × Δy. Rates up, prices down; more duration, more pain. No need for 3% of $400,000 = $12,000."
  },
  {
    "section": 2,
    "topic": "unethical practices",
    "yield": "high",
    "trap": false,
    "question": "A client purchases a fixed immediate annuity with a $300,000 premium. Her financial planner explains that this product is primarily designed to address which specific risk in retirement?",
    "options": [
      "Inflation risk, because fixed annuity payments always increase with the CPI.",
      "Longevity risk, because the annuity provides a guaranteed income stream for as long as the annuitant lives, transferring the risk of outliving assets to the insurer.",
      "Reinvestment risk, because annuity payments can be reinvested at the original crediting rate indefinitely.",
      "Liquidity risk, because immediate annuities allow unlimited penalty-free withdrawals."
    ],
    "answerIndex": 1,
    "explanation": "A fixed immediate annuity converts a lump sum into a stream of guaranteed periodic payments for life, transferring longevity risk (the risk of outliving one's savings) to the insurance company. It does not address inflation risk unless it includes a cost-of-living adjustment, and it generally has limited liquidity."
  },
  {
    "section": 2,
    "topic": "ETF / UIT",
    "yield": "med",
    "trap": false,
    "question": "An adviser is comparing a growth-style equity mutual fund to a value-style equity mutual fund for a client. Which characteristic would most likely distinguish the value fund's typical holdings from the growth fund's typical holdings?",
    "options": [
      "The value fund's holdings would typically have lower price-to-earnings and price-to-book ratios relative to the market, while the growth fund's holdings would typically have higher P/E and P/B ratios reflecting expectations of above-average future earnings growth.",
      "The value fund's holdings would always pay no dividends, while the growth fund's holdings always pay high dividends.",
      "The growth fund would hold only fixed-income securities to reduce volatility.",
      "There is no meaningful distinction; value and growth styles hold identical securities."
    ],
    "answerIndex": 0,
    "explanation": "Value investing targets stocks trading at lower valuation multiples (P/E, P/B) relative to fundamentals, often due to being out of favor, while growth investing targets companies with above-average expected earnings growth, typically trading at higher valuation multiples reflecting those growth expectations."
  },
  {
    "section": 2,
    "topic": "unethical practices",
    "yield": "med",
    "trap": false,
    "question": "A retired client holds a laddered municipal bond portfolio with maturities from 1 to 10 years. She asks her adviser why laddering is preferable to putting all funds into a single 10-year bond, given that the 10-year bond offers a higher yield. Which explanation best addresses her concern?",
    "options": [
      "Laddering guarantees a higher total return than any single-maturity bond strategy.",
      "Laddering provides regular, predictable liquidity as bonds mature at staggered intervals, reduces reinvestment-timing risk compared to concentrating all funds at one maturity, and reduces interest rate risk exposure relative to holding only long-maturity bonds, at the cost of some yield compared to the longest maturity available.",
      "Laddering eliminates all interest rate risk regardless of the rate environment.",
      "A single 10-year bond provides better diversification than a ladder because it locks in one rate for the entire holding period."
    ],
    "answerIndex": 1,
    "explanation": "A bond ladder spreads maturities across multiple dates, providing periodic liquidity, moderating interest rate risk (compared to concentrating in long bonds), and reducing the risk of reinvesting a large sum all at once at an unfavorable rate — trading some yield potential (available on the longest single maturity) for these benefits."
  },
  {
    "section": 2,
    "topic": "municipal bonds",
    "yield": "med",
    "trap": true,
    "question": "For a muni that is double tax-exempt (federal and the client's state), tax-equivalent yield should:",
    "options": [
      "Use the combined federal-plus-state marginal rate in the (1 − t) denominator",
      "Use only the state rate, ignoring federal tax",
      "Always use 0% because double-exempt bonds have no taxable equivalent",
      "Add the two tax rates to the muni yield"
    ],
    "answerIndex": 0,
    "explanation": "If both taxes are avoided, both belong in t. Conceptually gross up; do not compute 3.1% / 0.62 = 5.00% as exam drill."
  },
  {
    "section": 2,
    "topic": "bond valuation / duration",
    "yield": "high",
    "trap": false,
    "question": "A client compares Bond X (5-year maturity, modified duration 4.5) to Bond Y (5-year maturity, modified duration 4.5, but higher coupon and therefore lower convexity than Bond X). If market yields are expected to be highly volatile with large swings in either direction, which bond would provide a more favorable price response for the investor?",
    "options": [
      "Bond Y, because lower convexity always outperforms in volatile markets.",
      "Bond X, because with equal duration, higher convexity produces larger price gains when yields fall and smaller price losses when yields rise, making it more favorable given anticipated volatility.",
      "Both bonds will perform identically because their durations are equal.",
      "Convexity is irrelevant when durations are matched."
    ],
    "answerIndex": 1,
    "explanation": "When two bonds have equal duration, the bond with higher convexity will experience larger price increases when yields fall and smaller price declines when yields rise, compared to the lower-convexity bond. This asymmetric benefit becomes more valuable when large yield swings are anticipated."
  },
  {
    "section": 2,
    "topic": "estate / gift / ownership",
    "yield": "med",
    "trap": false,
    "question": "A client's IRA beneficiary designation names her estate rather than an individual or a see-through trust. Following the client's death, what is the most likely consequence for how quickly the inherited IRA must be distributed?",
    "options": [
      "The estate, as a non-designated beneficiary, will generally be subject to a faster distribution requirement (either the remaining balance of the decedent's life expectancy or the 5-year rule if the decedent died before their required beginning date) rather than the more flexible options available to designated individual beneficiaries.",
      "Naming an estate as beneficiary has no effect on distribution timing compared to naming an individual.",
      "Estates as IRA beneficiaries automatically qualify for the 10-year rule available to designated beneficiaries.",
      "The IRA custodian will automatically re-designate the account to the decedent's closest living relative."
    ],
    "answerIndex": 0,
    "explanation": "An estate is not a 'designated beneficiary' under IRS rules. If the IRA owner dies before their required beginning date, the estate must generally distribute the account within 5 years; if after, distributions continue over the decedent's remaining single life expectancy — both options are typically less favorable than what a designated individual beneficiary could use."
  },
  {
    "section": 2,
    "topic": "unethical practices",
    "yield": "high",
    "trap": false,
    "question": "A client's adviser is evaluating two competing annuity riders for a variable annuity: a Guaranteed Minimum Withdrawal Benefit (GMWB) and a Guaranteed Minimum Income Benefit (GMIB). The client wants flexibility to withdraw funds without necessarily annuitizing the contract. Which rider best matches this preference, and why?",
    "options": [
      "The GMIB, because it guarantees a minimum income stream only if the client annuitizes the contract, offering no benefit if the client simply withdraws funds.",
      "The GMWB, because it guarantees the ability to withdraw a specified percentage of the benefit base annually for life (or a set period) without requiring annuitization, preserving flexibility and potential access to remaining account value.",
      "Both riders provide identical benefits regardless of whether the client annuitizes.",
      "Neither rider provides any guarantee unless the underlying subaccounts lose money."
    ],
    "answerIndex": 1,
    "explanation": "A GMWB allows the contract owner to withdraw a guaranteed percentage of a benefit base each year without converting the contract into an annuitized income stream, preserving access to any remaining account value; a GMIB typically requires annuitization to activate the guaranteed income benefit."
  },
  {
    "section": 2,
    "topic": "retirement plans",
    "yield": "high",
    "trap": false,
    "question": "A client's employer offers both a traditional 401(k) and a Roth 401(k) option. The client is currently in a low tax bracket early in her career but expects to be in a significantly higher tax bracket in retirement due to anticipated income growth and pension benefits. From a tax-planning perspective, which contribution type is generally more advantageous for this client?",
    "options": [
      "Traditional 401(k) contributions, because the current-year tax deduction is always more valuable regardless of future tax rates.",
      "Roth 401(k) contributions, because paying tax on contributions now at the client's current lower tax rate, and receiving tax-free qualified withdrawals in retirement at what is expected to be a higher tax rate, is generally more tax-efficient.",
      "Neither option matters because 401(k) contribution limits are identical regardless of tax treatment.",
      "The client should contribute to neither and instead use only a taxable brokerage account."
    ],
    "answerIndex": 1,
    "explanation": "When an individual expects to be in a higher tax bracket in retirement than during their contribution years, Roth contributions (taxed now at the lower current rate, withdrawn tax-free later) are generally more advantageous than traditional pre-tax contributions, which defer tax to what is expected to be a higher future rate."
  },
  {
    "section": 2,
    "topic": "Traditional vs Roth RMD",
    "yield": "high",
    "trap": false,
    "question": "A 62-year-old widow's late husband's 401(k) plan allowed her, as his surviving spouse, to roll his account into her own IRA (a spousal rollover) rather than treating it as an inherited IRA. Which of the following best describes the primary advantage of this spousal rollover election compared to treating it as an inherited IRA?",
    "options": [
      "A spousal rollover has no RMD implications and no age-based rules apply for the rest of her life.",
      "Treating the account as her own IRA (via spousal rollover) means RMDs are based on her own age and life expectancy (and can be delayed until her own required beginning date), and she avoids the early-withdrawal penalty concerns that could otherwise apply differently to inherited account rules, giving her greater flexibility than treating it as an inherited IRA.",
      "A spousal rollover is only available if she is younger than 59.5 at the time of the rollover.",
      "Inherited IRAs always provide better tax treatment than spousal rollovers for a surviving spouse."
    ],
    "answerIndex": 1,
    "explanation": "A surviving spouse has the unique option to roll a deceased spouse's retirement account into her own IRA, treating it as her own for RMD purposes (based on her own age and required beginning date) rather than being bound by the beneficiary-specific rules that apply to a non-spouse inherited IRA, offering greater flexibility in timing distributions."
  },
  {
    "section": 2,
    "topic": "SPACs / blank checks",
    "yield": "high",
    "trap": true,
    "question": "A client asks whether buying a SPAC at IPO is ‘cash with a free option’ because she can redeem if she dislikes the merger target. The best Series 65-level response is:",
    "options": [
      "Correct — redemption makes the IPO risk-free, so SPACs are equivalent to T-bills until the deal closes",
      "Redemption rights reduce but do not eliminate risk: no target at IPO, sponsor promote/dilution, opportunity cost, and post-deal operating risk if she stays in",
      "SPACs are illegal blank-check schemes and cannot be recommended",
      "Once listed, a SPAC is a closed-end fund required to trade at NAV"
    ],
    "answerIndex": 1,
    "explanation": "2023 outline (II.G): SPACs / blind pools / blank checks. Redemption is not risk-free. Sponsor promote dilutes remaining shareholders. No operating company at IPO."
  },
  {
    "section": 2,
    "topic": "Digital assets",
    "yield": "high",
    "trap": true,
    "question": "On the Series 65 (2023 outline II.N), digital assets are tested primarily as:",
    "options": [
      "A trading-tactics exam: leverage, funding rates, and perpetual futures mechanics",
      "Definition, characteristics, and risks — including whether a token is a security, commodity, or currency, plus custody, volatility, and cyber risk (Howey-level classification, not day-trading)",
      "A requirement that all tokens are securities under the USA",
      "An exemption from custody rules because private keys are not ‘funds or securities’"
    ],
    "answerIndex": 1,
    "explanation": "NASAA added digital assets as characteristics/risks/classification, not a crypto-trading exam. Do not overweight vs registration/ethics. Custody and Howey still matter; private keys can be custody."
  },
  {
    "section": 2,
    "topic": "Open-end vs closed-end vs ETF vs UIT",
    "yield": "high",
    "trap": true,
    "question": "Which vehicle continuously issues and redeems shares at NAV, is actively managed (typically), and does not generally trade at a premium or discount on an exchange during the day?",
    "options": [
      "Closed-end fund",
      "Open-end mutual fund",
      "UIT",
      "Non-traded REIT"
    ],
    "answerIndex": 1,
    "explanation": "Open-end: continuous offer, redeem at NAV. Closed-end: exchange, premium/discount. ETF: exchange all day but creation/redemption keeps price near NAV. UIT: unmanaged, trust termination. Non-traded REIT: illiquid, not daily NAV redeemable like a mutual fund."
  },
  {
    "section": 2,
    "topic": "Duration vs maturity",
    "yield": "high",
    "trap": true,
    "question": "Two bonds have the same maturity and coupon frequency. Bond A is a 6% coupon priced at a premium; Bond B is a 2% coupon priced at a discount. Interest rates rise 100 bp. Which statement is most accurate?",
    "options": [
      "They have identical duration because maturity is identical, so price drops match",
      "The lower-coupon discount bond has longer duration and will generally fall more in price",
      "The premium bond has longer duration because you invested more dollars",
      "Duration measures credit risk, so the move depends only on the issuer’s rating"
    ],
    "answerIndex": 1,
    "explanation": "Duration ≠ maturity. Duration is rate sensitivity (weighted average time to cash flows). Lower coupon → longer duration → larger price drop when yields rise. Inverse price/yield still holds for both."
  },
  {
    "section": 2,
    "topic": "Annuity types",
    "yield": "high",
    "trap": true,
    "question": "Which statement about annuity types is the one the Series 65 wants?",
    "options": [
      "A fixed annuity is generally a security; a variable annuity is generally not",
      "A fixed annuity is generally an insurance product (not a security); a variable annuity is a security (and insurance), so IA/IAR + insurance licensing issues can both appear",
      "Indexed annuities are always securities because the crediting rate references an equity index",
      "Variable annuities have no M&E charges or surrender schedules"
    ],
    "answerIndex": 1,
    "explanation": "Fixed: insurance, generally not a security. Variable: security + insurance (separate account). Equity-indexed/fixed indexed is the gray/trap product — often insurance, still suitability-sensitive. Know surrender, M&E, riders."
  },
  {
    "section": 2,
    "topic": "Options: covered call vs protective put",
    "yield": "high",
    "trap": true,
    "question": "A client is long 200 shares of XYZ at $50. She sells 2 XYZ 55 calls. This is a covered call. Max gain and the main trade-off:",
    "options": [
      "Unlimited gain; the calls provide complete downside protection",
      "Max gain is the premium plus the $5 rise to the strike; she caps upside and has only limited downside cushion equal to the premium",
      "Max gain is the premium only; stock can still make unlimited profit",
      "This is a protective put, so max loss is limited to the premium paid"
    ],
    "answerIndex": 1,
    "explanation": "Covered call = long stock + short call. Upside capped at strike + premium. Downside still almost the stock’s, minus premium. Protective put = long stock + long put (floor). Naked/uncovered short call is a different, much riskier profile."
  },
  {
    "section": 2,
    "topic": "cash equivalents",
    "yield": "high",
    "trap": false,
    "question": "A couple needs a $90,000 down payment in four months and wants virtually no market risk. Which vehicle is the most suitable parking place?",
    "options": [
      "30-year TIPS held to the first coupon",
      "A four-month Treasury bill purchased at a discount and held to maturity",
      "A high-yield corporate bond fund for extra yield",
      "A non-traded REIT because real estate is stable over short horizons"
    ],
    "answerIndex": 1,
    "explanation": "T-bills are short-term, discount, full-faith-and-credit instruments that mature at par. A four-month bill matches the horizon and avoids the interest-rate, credit, and liquidity risks of long TIPS, junk funds, or non-traded REITs."
  },
  {
    "section": 2,
    "topic": "cash equivalents",
    "yield": "high",
    "trap": true,
    "question": "An IAR is comparing a negotiable jumbo CD, commercial paper, and a Treasury bill for a corporate treasurer's 90-day cash. Which statement is correct?",
    "options": [
      "Commercial paper is typically unsecured corporate IOU paper with maturities of 270 days or less",
      "Jumbo CDs are insured by the FDIC without limit",
      "T-bills pay a semi-annual coupon and are callable at par",
      "All three are exempt from purchasing-power risk"
    ],
    "answerIndex": 0,
    "explanation": "Commercial paper is short-term unsecured corporate debt, generally 270 days or less (and often exempt as a security). Jumbo CDs have FDIC limits; T-bills are discount instruments, not coupon bonds; inflation can still erode any nominal cash equivalent."
  },
  {
    "section": 2,
    "topic": "cash equivalents",
    "yield": "med",
    "trap": false,
    "question": "A bank offers a retail client a $15,000 18-month CD at a fixed rate. Compared with a money-market mutual fund, what is the key liquidity trade-off the IAR should disclose?",
    "options": [
      "The CD can be sold intra-day on an exchange at NAV",
      "Early withdrawal from the CD typically incurs a bank penalty, whereas money-market funds generally allow same-day/next-day redemptions at a stable $1 NAV (subject to rare gates/fees)",
      "Money-market funds are FDIC-insured; CDs are not",
      "CDs have unlimited daily liquidity and higher market-price volatility than T-bills"
    ],
    "answerIndex": 1,
    "explanation": "Retail time deposits lock funds until maturity unless the holder pays an early-withdrawal penalty. Money-market funds are designed for daily liquidity. FDIC insurance applies to bank CDs (within limits), not to money-market funds."
  },
  {
    "section": 2,
    "topic": "cash equivalents",
    "yield": "med",
    "trap": false,
    "question": "Why might a conservative client prefer T-bills over a prime money-market fund even if the fund yields slightly more?",
    "options": [
      "T-bills have direct U.S. government backing; prime funds take modest credit and liquidity risk in commercial paper and similar paper",
      "Prime funds are guaranteed by the Fed's discount window",
      "T-bills are always state-taxable while prime funds never are",
      "T-bills cannot lose purchasing power"
    ],
    "answerIndex": 0,
    "explanation": "T-bills are direct Treasury obligations. Prime money-market funds hold private short-term credit and can, in stress, face NAV or liquidity pressure. The extra yield is compensation for that incremental risk."
  },
  {
    "section": 2,
    "topic": "Treasuries TIPS",
    "yield": "high",
    "trap": false,
    "question": "A client buys a newly issued 10-year TIPS with a 1.2% real coupon when CPI subsequently rises 3% in year one. What happens to the contractual cash flows?",
    "options": [
      "The coupon rate is reset to 4.2% and principal is unchanged",
      "Principal is adjusted upward with CPI, and the 1.2% real coupon is paid on the inflation-adjusted principal",
      "Both coupon and principal are fixed like a nominal note",
      "TIPS stop paying coupons whenever CPI is positive"
    ],
    "answerIndex": 1,
    "explanation": "TIPS pay a fixed real coupon on a CPI-adjusted principal. Inflation lifts the principal (and therefore the dollar coupon); the stated real rate does not simply add CPI as a new coupon rate."
  },
  {
    "section": 2,
    "topic": "Treasuries TIPS",
    "yield": "high",
    "trap": true,
    "question": "A client fears deflation over the next decade and asks whether TIPS can pay back less than par at maturity. The most accurate answer is:",
    "options": [
      "TIPS can mature below par with no protection",
      "TIPS have a deflation floor: if adjusted principal is below original par, Treasury still pays original par at maturity, though interim coupons are paid on the reduced adjusted principal",
      "TIPS convert to T-bills automatically in deflation",
      "Deflation increases TIPS principal just as inflation does"
    ],
    "answerIndex": 1,
    "explanation": "Treasury guarantees at least original par at maturity. Coupons during a deflationary path are computed on the inflation-adjusted principal, which can fall below par before that maturity floor applies."
  },
  {
    "section": 2,
    "topic": "Treasuries TIPS",
    "yield": "high",
    "trap": false,
    "question": "Interest on a Treasury note held by a California resident is generally:",
    "options": [
      "Exempt from federal tax but fully taxable by the state",
      "Taxable at the federal level and generally exempt from state and local income tax",
      "Triple-tax-exempt like an in-state municipal GO",
      "Tax-free at all levels if held to maturity"
    ],
    "answerIndex": 1,
    "explanation": "Treasury interest is federally taxable and typically state/local tax-exempt. Munis are the instruments that are generally federal-tax-exempt (and often state-exempt if in-state)."
  },
  {
    "section": 2,
    "topic": "Treasuries agencies",
    "yield": "med",
    "trap": false,
    "question": "An IAR is contrasting Ginnie Mae pass-throughs with a Treasury STRIP. Which distinction is correct?",
    "options": [
      "Ginnie Mae securities carry explicit U.S. government guarantee of timely principal and interest but still have prepayment/extension risk; STRIPS have no reinvestment of coupons because they are zeros",
      "STRIPS have monthly prepayment risk identical to Ginnie Maes",
      "Ginnie Maes are issued by corporations with no government backing",
      "STRIPS pay a floating coupon indexed to LIBOR"
    ],
    "answerIndex": 0,
    "explanation": "Ginnie Mae MBS are government-guaranteed but homeowners can prepay, so cash-flow timing is uncertain. STRIPS are zero-coupon Treasuries: no periodic coupon to reinvest, and no mortgage prepayment risk."
  },
  {
    "section": 2,
    "topic": "GO vs revenue munis",
    "yield": "high",
    "trap": false,
    "question": "A city wants to finance a new courthouse that will not generate user fees. Which municipal structure is the natural fit, and what backing should the IAR cite?",
    "options": [
      "Revenue bond backed only by courthouse parking meters",
      "General obligation bond backed by the issuer's full faith, credit, and taxing power",
      "Industrial-development bond backed by a private corporation's lease, automatically AMT-free",
      "Moral-obligation bond with a federal Treasury wrap"
    ],
    "answerIndex": 1,
    "explanation": "Non-self-supporting public buildings are classic GO purposes. GO holders look to the issuer's taxing power (often with voter approval). Revenue bonds need a dedicated project revenue stream."
  },
  {
    "section": 2,
    "topic": "GO vs revenue munis",
    "yield": "high",
    "trap": true,
    "question": "An IAR is comparing an airport revenue bond to the same city's GO. The airport coverage ratio has slipped below 1.0x. Which statement is most accurate?",
    "options": [
      "GO holders can automatically be paid from airport landing fees",
      "Revenue-bond holders generally have a claim only on pledged project revenues, not on the city's general tax levy, so weak coverage is a direct credit issue for that bond",
      "Revenue bonds always have higher priority than GOs in municipal bankruptcy",
      "A coverage ratio below 1.0x is irrelevant because munis cannot default"
    ],
    "answerIndex": 1,
    "explanation": "Revenue bonds stand on pledged net revenues. Coverage below 1.0x means operations are not earning the debt service. That does not give those holders a GO tax pledge unless additional security was specifically granted."
  },
  {
    "section": 2,
    "topic": "GO vs revenue munis",
    "yield": "high",
    "trap": false,
    "question": "A high-tax-bracket New York resident is shopping for tax-exempt income and is considering an out-of-state hospital revenue bond. What tax point should the IAR raise?",
    "options": [
      "Out-of-state municipal interest is generally federal-tax-exempt but typically taxable at the state level for a New York resident",
      "All municipal bonds are triple-tax-exempt regardless of residence",
      "Hospital bonds are always taxable private-activity bonds with no federal exemption",
      "State tax treatment follows the bond's CUSIP check digit"
    ],
    "answerIndex": 0,
    "explanation": "Most muni interest is federally tax-exempt. State exemption usually requires an in-state issuer. Out-of-state munis commonly create a state-tax drag. Some private-activity issues can also be AMT preference items."
  },
  {
    "section": 2,
    "topic": "duration vs maturity",
    "yield": "high",
    "trap": false,
    "question": "Two investment-grade bonds have the same maturity and yield. Bond C has a 6% coupon; Bond Z is a zero. Which has greater interest-rate sensitivity, and why?",
    "options": [
      "Bond C, because higher coupons always lengthen duration",
      "Bond Z, because a zero's duration equals its maturity, which is longer than the coupon bond's duration",
      "They have identical duration because maturity is the same",
      "Bond C, because zeros have no duration"
    ],
    "answerIndex": 1,
    "explanation": "Duration is a weighted-average time to cash flows. A zero pays only at maturity, so Macaulay duration equals maturity. Coupon bonds pay earlier, so duration is shorter than maturity."
  },
  {
    "section": 2,
    "topic": "duration vs maturity",
    "yield": "high",
    "trap": true,
    "question": "A client says, 'I shortened risk by buying a 10-year 8% premium bond instead of a 10-year 2% discount bond.' Is that logic sound?",
    "options": [
      "No; premium bonds always have longer duration than discounts",
      "Yes; the higher coupon pulls duration down relative to the low-coupon bond of equal maturity, so price is less sensitive to a rate rise",
      "Coupon has no effect on duration",
      "Premium bonds have zero interest-rate risk because they can be called"
    ],
    "answerIndex": 1,
    "explanation": "All else equal, higher coupons mean more cash earlier and lower duration. A premium (high-coupon) 10-year is less rate-sensitive than a deep-discount/low-coupon 10-year. Call risk is a separate issue."
  },
  {
    "section": 2,
    "topic": "premium bond yields",
    "yield": "high",
    "trap": true,
    "question": "A 6% municipal bond is trading at a premium and is callable in three years at par. Market yields for similar bonds are 4%. Which yield should a conservative IAR quote as the worst-case contractual yield?",
    "options": [
      "Current yield, because it ignores call and maturity",
      "Yield to call, which for a premium callable bond is lower than yield to maturity and is the standard 'yield to worst'",
      "Yield to maturity, which is always lower than yield to call on premium bonds",
      "Nominal coupon of 6%, because price is irrelevant"
    ],
    "answerIndex": 1,
    "explanation": "A premium bond that is called early locks in the premium amortization over a shorter period, producing a lower yield. YTC is therefore yield-to-worst versus YTM. Discount bonds are the opposite: YTM is worse than YTC."
  },
  {
    "section": 2,
    "topic": "premium bond yields",
    "yield": "high",
    "trap": false,
    "question": "A client buys a corporate bond at 108. If rates fall further, what is the most important structural risk besides duration?",
    "options": [
      "Call risk: the issuer is more likely to refinance, capping price appreciation and forcing reinvestment at lower rates",
      "Conversion risk: corporates must convert into equity when prices rise",
      "Default risk disappears at a premium",
      "Premium bonds cannot be called"
    ],
    "answerIndex": 0,
    "explanation": "Falling rates raise the odds of a call on a high-coupon premium issue. The investor loses the remaining high coupons and must reinvest in a lower-yield market (call/reinvestment risk)."
  },
  {
    "section": 2,
    "topic": "fixed income valuation",
    "yield": "med",
    "trap": false,
    "question": "Why do long-term zero-coupon Treasuries (STRIPS) create 'phantom income' in a taxable account?",
    "options": [
      "The IRS taxes the annual accretion of the discount even though no cash coupon is received",
      "STRIPS pay a cash coupon that is exempt from federal tax",
      "Phantom income applies only inside Roth IRAs",
      "STRIPS are prepaid forwards and never generate tax"
    ],
    "answerIndex": 0,
    "explanation": "OID/zero accretion is taxable annually as interest for most taxable holders even without a cash coupon. That is why zeros are often placed in tax-advantaged accounts."
  },
  {
    "section": 2,
    "topic": "open vs closed vs ETF vs UIT",
    "yield": "high",
    "trap": false,
    "question": "A client wants to redeem shares directly with the issuer at next-computed NAV and is not concerned about intra-day trading. Which structure fits?",
    "options": [
      "Closed-end fund trading at a 12% discount",
      "Traditional open-end mutual fund",
      "Exchange-traded note",
      "Non-traded REIT with a two-year lockup"
    ],
    "answerIndex": 1,
    "explanation": "Open-end funds issue and redeem with the fund at NAV (typically end-of-day). Closed-end funds and ETFs (and ETNs) trade on exchanges at market prices; non-traded REITs are illiquid."
  },
  {
    "section": 2,
    "topic": "open vs closed vs ETF vs UIT",
    "yield": "high",
    "trap": true,
    "question": "A closed-end municipal fund's NAV is $14.10; it last traded at $12.40. What does that gap mean for a buyer?",
    "options": [
      "The buyer pays a 12% sales load to the fund company",
      "The market price is at a discount to NAV; the buyer may still wait a long time for that discount to close, and it can widen",
      "Closed-end funds must redeem at NAV daily, so the discount is an arbitrage the fund will immediately pay",
      "Discounts prove the manager has positive alpha"
    ],
    "answerIndex": 1,
    "explanation": "CEFs trade at supply-demand prices that can sit at discounts or premiums to NAV. There is no daily NAV redemption right like an open-end fund, so discounts can persist or worsen."
  },
  {
    "section": 2,
    "topic": "open vs closed vs ETF vs UIT",
    "yield": "high",
    "trap": false,
    "question": "Compared with an open-end index mutual fund, a traditional equity ETF tracking the same index is generally more tax-efficient because:",
    "options": [
      "ETFs never hold dividend-paying stocks",
      "In-kind creation/redemption lets the ETF manager purge low-basis lots without distributing as much capital gain as a cash-redeeming mutual fund",
      "ETFs are legally prohibited from realizing gains",
      "All ETF distributions are tax-free return of capital"
    ],
    "answerIndex": 1,
    "explanation": "Authorized-participant in-kind redemptions are a key ETF tax mechanic. Open-end funds often sell securities to meet cash redemptions and may distribute gains to remaining shareholders."
  },
  {
    "section": 2,
    "topic": "open vs closed vs ETF vs UIT",
    "yield": "high",
    "trap": false,
    "question": "A unit investment trust holding a fixed basket of municipal bonds has no investment adviser managing the portfolio day to day. Which feature is characteristic?",
    "options": [
      "Continuous active sector rotation by a board-supervised manager",
      "A finite life, a generally unmanaged/fixed portfolio, and redeemable units",
      "Intra-day NAV trading identical to a closed-end fund premium",
      "Perpetual share issuance at a premium to NAV by statute"
    ],
    "answerIndex": 1,
    "explanation": "UITs are packaged, typically unmanaged portfolios with a stated termination date. Units are redeemable (often through the sponsor) rather than actively managed like an open-end fund."
  },
  {
    "section": 2,
    "topic": "open vs closed vs ETF vs UIT",
    "yield": "high",
    "trap": true,
    "question": "A client confuses 12b-1 fees, CDSC, and ETF spreads. Which description is accurate?",
    "options": [
      "A 12b-1 fee is an ongoing distribution/marketing charge inside some mutual fund share classes; a CDSC is a back-end sales charge that typically declines the longer Class B/C-type shares are held; ETF investors mainly pay bid-ask spread plus commission, not a CDSC",
      "ETFs always charge a CDSC of 5% in year one",
      "12b-1 fees are one-time IPO spreads on closed-end funds",
      "CDSCs increase each year the shares are held"
    ],
    "answerIndex": 0,
    "explanation": "Know the fee map: 12b-1 is ongoing; CDSC is a contingent deferred sales load that usually steps down; ETF costs are primarily expense ratio plus trading spread/commission."
  },
  {
    "section": 2,
    "topic": "preferred vs common",
    "yield": "high",
    "trap": false,
    "question": "A 65-year-old income investor likes a 6.5% cumulative preferred over the same issuer's common. Which rights trade-off is correct?",
    "options": [
      "Preferred typically has priority on dividends and in liquidation versus common, but usually no (or limited) voting power, and missed common dividends do not have to be caught up",
      "Preferred always votes and common never receives dividends until preferred is converted",
      "Cumulative preferred dividends, if skipped, are lost forever",
      "Common stands ahead of preferred in bankruptcy"
    ],
    "answerIndex": 0,
    "explanation": "Cumulative preferred: unpaid dividends accrue before common can be paid. Preferred is senior to common but almost always non-voting and still junior to debt."
  },
  {
    "section": 2,
    "topic": "preferred vs common",
    "yield": "high",
    "trap": true,
    "question": "Why is straight (non-convertible) preferred stock often described as behaving more like a bond than like common equity?",
    "options": [
      "Dividends are a contractual interest obligation of the issuer, deductible to the company like bond coupons",
      "The stated dividend is fixed, so price is highly sensitive to interest-rate moves and there is little claim on residual growth",
      "Preferred holders elect the entire board each year",
      "Preferred principal is guaranteed by the FDIC"
    ],
    "answerIndex": 1,
    "explanation": "Fixed-rate preferred is an interest-rate product with limited upside. Unlike bonds, dividends are not a legal debt obligation and are generally not deductible to the issuer (with limited exceptions such as certain hybrid structures)."
  },
  {
    "section": 2,
    "topic": "ADRs",
    "yield": "high",
    "trap": false,
    "question": "A client buys ADRs of a German manufacturer. Which risk remains even though the shares trade in dollars on a U.S. exchange?",
    "options": [
      "No currency risk, because the ADR is dollar-priced",
      "Euro/dollar currency risk, because the company's cash flows and the ADR's underlying shares are still euro-based",
      "ADRs eliminate political risk by statute",
      "ADRs convert the foreign company into a Delaware corporation"
    ],
    "answerIndex": 1,
    "explanation": "ADRs are dollar-denominated receipts, but the economic asset is still the foreign share. FX moves, home-country politics, and foreign accounting/legal systems remain."
  },
  {
    "section": 2,
    "topic": "equity characteristics",
    "yield": "med",
    "trap": false,
    "question": "An employee receives incentive stock options (ISOs). Which high-level tax distinction versus nonqualified stock options (NQSOs) should an IAR know for the exam?",
    "options": [
      "ISOs can receive favorable capital-gains treatment if holding-period rules are met, but the bargain element at exercise can be an AMT preference; NQSOs generally create ordinary income at exercise",
      "NQSOs are always tax-free",
      "ISOs are taxable as ordinary income at grant with no AMT interaction",
      "Both are identical to listed call options the employee writes on the open market"
    ],
    "answerIndex": 0,
    "explanation": "Series 65 tests the conceptual split: NQSOs → ordinary income at exercise; ISOs → potential long-term capital gain if qualified, with AMT risk on the spread. These are compensation options, not exchange-traded covered writes."
  },
  {
    "section": 2,
    "topic": "options hedging",
    "yield": "high",
    "trap": true,
    "question": "A client is long 400 shares of a volatile stock bought at $52 and is worried about a near-term drop but does not want to sell. Which listed strategy is the textbook hedge?",
    "options": [
      "Write 4 naked calls",
      "Buy 4 puts (protective puts)",
      "Buy 4 additional calls",
      "Write 4 puts"
    ],
    "answerIndex": 1,
    "explanation": "A protective put (long stock + long put) floors the sale price at the strike, less the premium. Naked short calls add downside and cap upside; short puts add more downside; long calls do not hedge a long stock."
  },
  {
    "section": 2,
    "topic": "options hedging",
    "yield": "high",
    "trap": true,
    "question": "An IAR recommends a covered call on a stock the client already owns. What is the economic profile?",
    "options": [
      "Unlimited upside remains, and downside is fully insured",
      "The client collects premium (income) and is modestly bullish/neutral; upside is capped at the strike, and downside is only cushioned by the premium",
      "The position is equivalent to a long put",
      "Covered calls require the client to be short the stock"
    ],
    "answerIndex": 1,
    "explanation": "Covered call = long stock + short call. Premium is income. If the stock rallies through the strike, the stock is called away (upside capped). If it falls, the premium is a small buffer, not insurance like a put."
  },
  {
    "section": 2,
    "topic": "options calls puts",
    "yield": "high",
    "trap": true,
    "question": "A bullish speculator buys a call (cannot or will not buy 100 shares). At expiration, which description is correct?",
    "options": [
      "Max loss is the premium paid; breakeven is strike plus premium; max gain is theoretically unlimited",
      "Max loss is unlimited; breakeven is strike minus premium",
      "Max loss is the strike price; breakeven is the stock price",
      "Max gain is the premium; max loss is unlimited"
    ],
    "answerIndex": 0,
    "explanation": "Long call: limited loss (premium), unlimited gain, breakeven = strike + premium. Do not build a $300 P/L table."
  },
  {
    "section": 2,
    "topic": "options calls puts",
    "yield": "high",
    "trap": true,
    "question": "A client is bearish on a stock at $70 and buys a 70 put for $4. Which outcome at expiration is correct?",
    "options": [
      "Profit if the stock is above $74",
      "Profit if the stock is below $66; max loss is the $400 premium",
      "Unlimited loss if the stock falls",
      "The put is exercised automatically whenever the stock is above $70"
    ],
    "answerIndex": 1,
    "explanation": "Long put profits as the stock falls below strike minus premium ($66). Max loss is the premium. Puts are in the money below the strike, not above."
  },
  {
    "section": 2,
    "topic": "options calls puts",
    "yield": "high",
    "trap": true,
    "question": "Which position has theoretically unlimited loss?",
    "options": [
      "Long 1 XYZ 50 call",
      "Long 1 XYZ 50 put",
      "Short 1 naked XYZ 50 call",
      "Long 100 shares of XYZ"
    ],
    "answerIndex": 2,
    "explanation": "A naked (uncovered) short call loses as the stock rises without limit. Long options lose only the premium. Long stock's loss is limited to the purchase price (stock can go to zero)."
  },
  {
    "section": 2,
    "topic": "options hedging",
    "yield": "high",
    "trap": false,
    "question": "A client is short 200 shares and fears a squeeze. The protective options overlay is:",
    "options": [
      "Sell 2 puts",
      "Buy 2 calls (protective calls)",
      "Sell 2 calls",
      "Buy 2 puts"
    ],
    "answerIndex": 1,
    "explanation": "Short stock is hurt by a rally. Buying calls caps the repurchase price. Short puts or short calls would add risk; long puts are a hedge for long stock, not short stock."
  },
  {
    "section": 2,
    "topic": "options hedging",
    "yield": "high",
    "trap": false,
    "question": "An IAR builds a collar: long stock, long 45-strike put, short 55-strike call, all on the same shares. What is the client trying to do?",
    "options": [
      "Maximize speculative upside with leverage",
      "Set a floor and a ceiling around the holding, often to reduce net hedging cost by selling the call to help pay for the put",
      "Create a naked short-call profile",
      "Convert the shares into a money-market instrument with FDIC insurance"
    ],
    "answerIndex": 1,
    "explanation": "A collar brackets outcomes between the put strike (floor) and call strike (cap). The short call premium subsidizes the put. It is a risk-reduction structure, not a directional levered bet."
  },
  {
    "section": 2,
    "topic": "options characteristics",
    "yield": "med",
    "trap": true,
    "question": "A call is in-the-money: the stock is above the strike. Of the call's premium, which statement is TRUE?",
    "options": [
      "Intrinsic value is stock minus strike (if positive); time value is premium minus that intrinsic amount",
      "The entire premium is intrinsic whenever the call is in-the-money",
      "In-the-money calls have zero intrinsic value",
      "Time value equals the strike price"
    ],
    "answerIndex": 0,
    "explanation": "Split the premium conceptually. Series 65 does not need a $2.00 / $2.10 P/L table."
  },
  {
    "section": 2,
    "topic": "options characteristics",
    "yield": "med",
    "trap": true,
    "question": "A client asks whether an American-style equity put can be exercised before expiration. Correct response?",
    "options": [
      "No; only European index options can ever be exercised",
      "Yes; American-style listed equity options may be exercised any business day through expiration, while European-style options may be exercised only at expiration",
      "American-style means the trade settles in euros",
      "Puts can never be exercised; they can only be closed in the market"
    ],
    "answerIndex": 1,
    "explanation": "American = exercise any time; European = expiration only. Most listed U.S. equity options are American; many index options are European. Style is not about currency."
  },
  {
    "section": 2,
    "topic": "options suitability",
    "yield": "high",
    "trap": false,
    "question": "A 78-year-old widow with a $400,000 portfolio, a need for stable income, and no options experience is told by an agent to sell naked puts 'for yield.' The recommendation is:",
    "options": [
      "Suitable because short puts are conservative if the strike is out of the money",
      "Unsuitable: naked puts have large downside, require margin/experience, and conflict with an income-and-capital-preservation profile",
      "Suitable if she also buys a lottery ticket as a hedge",
      "Required under the Prudent Investor Act for all retirees"
    ],
    "answerIndex": 1,
    "explanation": "Uncovered short puts can force the seller to buy stock in a crash at the strike, with losses far beyond the premium. That is not a cash-flow substitute for a conservative retiree."
  },
  {
    "section": 2,
    "topic": "annuity types",
    "yield": "high",
    "trap": true,
    "question": "A 62-year-old wants lifetime income to start next month from a $300,000 rollover and does not want market risk inside the payout. Which contract type matches?",
    "options": [
      "Deferred variable annuity, remain in accumulation",
      "Immediate fixed annuity (SPIA)",
      "Equity-indexed annuity with a 14-year surrender schedule and income starting at 80",
      "Variable life insurance with a side fund"
    ],
    "answerIndex": 1,
    "explanation": "Immediate annuities begin payments within one year (often the next month). Fixed means the insurer's general account bears investment risk. Deferred contracts delay income; variable contracts expose payments or account value to the separate account."
  },
  {
    "section": 2,
    "topic": "annuity types",
    "yield": "high",
    "trap": true,
    "question": "Which statement correctly separates a deferred variable annuity from a deferred fixed annuity?",
    "options": [
      "Both are insurance-company general-account products and are not securities",
      "Variable: account value and (if annuitized as variable) payments fluctuate with a separate account that is a security; fixed: insurer credits a declared rate from the general account",
      "Fixed annuities require a Series 65 but not an insurance license",
      "Variable annuities guarantee the principal dollar-for-dollar each day"
    ],
    "answerIndex": 1,
    "explanation": "Variable annuities are securities (separate account / subaccounts). Fixed annuities are insurance products with a guaranteed crediting rate (subject to the insurer's claims-paying ability). Licensing and risk profiles differ."
  },
  {
    "section": 2,
    "topic": "annuity types",
    "yield": "high",
    "trap": true,
    "question": "An indexed (equity-indexed) annuity credits interest using a 40% participation rate and a 6% annual cap, with a 0% floor. If the linked index rises 20% that year, what is credited (ignoring spreads/fees)?",
    "options": [
      "20%",
      "8% (40% of 20%)",
      "6%, because the cap limits the credit even though 40% of 20% would be 8%",
      "0%, because indexed contracts never credit in up years"
    ],
    "answerIndex": 2,
    "explanation": "Participation 40% × 20% = 8%, but the 6% cap binds. The floor (often 0%) protects against negative index years; it does not raise the credited rate in a strong year."
  },
  {
    "section": 2,
    "topic": "annuity suitability",
    "yield": "high",
    "trap": true,
    "question": "A 71-year-old has $180,000 in a savings account earmarked for a possible assisted-living move within three years. An IAR proposes a variable annuity with a seven-year CDSC declining from 7%. Suitability?",
    "options": [
      "Suitable: all retirees need tax deferral more than liquidity",
      "Unsuitable: the surrender period and market risk conflict with a short, identified liquidity need",
      "Suitable if the separate account is 100% in a bond subaccount",
      "Required because savings accounts are unethical holdings after age 70"
    ],
    "answerIndex": 1,
    "explanation": "VA surrender schedules and market risk make them a poor match for near-term known cash needs. Tax deferral does not cure a liquidity mismatch."
  },
  {
    "section": 2,
    "topic": "annuity suitability",
    "yield": "high",
    "trap": false,
    "question": "Which profile is the best relative fit for a deferred variable annuity (assuming fees and riders are fully disclosed)?",
    "options": [
      "A 30-year-old who has not yet funded a 401(k) match or IRA",
      "A high earner who has already maxed qualified plans, has a long horizon, and can tolerate separate-account volatility and higher fees in exchange for tax-deferred growth and optional riders",
      "A client who needs the money in 18 months for a house",
      "A client whose only goal is FDIC-insured principal"
    ],
    "answerIndex": 1,
    "explanation": "VAs are generally a second-line tax-deferral vehicle after workplace plans/IRAs, for long-horizon investors who accept fees, CDSC, and market risk. Do not skip the 401(k) match to buy a VA."
  },
  {
    "section": 2,
    "topic": "annuity types",
    "yield": "high",
    "trap": true,
    "question": "A client asks whether a traditional fixed indexed annuity is a security. The exam-typical answer is:",
    "options": [
      "Always a security because any index link is an option",
      "Typically treated as an insurance product, not a security, when it provides a minimum guarantee and does not pass through actual index/separate-account performance the way a variable annuity does",
      "Identical to an S&P 500 ETF for Howey purposes in every state",
      "A federal covered security listed on Nasdaq"
    ],
    "answerIndex": 1,
    "explanation": "Classic fixed indexed annuities credit a limited, formula-based interest amount with a floor and are generally insurance products. Variable annuities, whose values fluctuate with a separate account, are securities. (Registered index-linked annuities/RILAs are a different, securities-registered category; the classic EIA is the testable contrast.)"
  },
  {
    "section": 2,
    "topic": "annuity payouts",
    "yield": "high",
    "trap": false,
    "question": "At annuitization, a 68-year-old single client chooses life-only (straight life) rather than life with 10-year period certain. What is the trade-off?",
    "options": [
      "Life-only pays the highest periodic amount but payments stop at death with nothing for heirs",
      "Life-only pays the lowest amount and guarantees 10 years to beneficiaries",
      "Period certain eliminates mortality pooling",
      "Straight life continues to a named child automatically"
    ],
    "answerIndex": 0,
    "explanation": "Straight life uses only the annuitant's mortality, so the check is largest. The risk is dying early and forfeiting remaining value. Period certain or joint-life options lower the payment to add survivor protection."
  },
  {
    "section": 2,
    "topic": "annuity payouts",
    "yield": "med",
    "trap": false,
    "question": "A variable annuity in the payout phase uses an assumed interest rate (AIR) of 4%. If separate-account performance next month exceeds 4%, what happens to the payment?",
    "options": [
      "The payment falls",
      "The payment rises versus the prior payment",
      "The payment is frozen for the life of the contract",
      "AIR resets to zero"
    ],
    "answerIndex": 1,
    "explanation": "In a variable payout, performance above AIR increases the next payment; below AIR decreases it. AIR is a hurdle for payment changes, not a guaranteed return."
  },
  {
    "section": 2,
    "topic": "annuity tax",
    "yield": "med",
    "trap": false,
    "question": "A 55-year-old takes a lump-sum withdrawal from the deferred annuity she funded with after-tax dollars 8 years ago. Earnings are $22,000 of a $100,000 account. Tax treatment of a $22,000 withdrawal?",
    "options": [
      "FIFO: return of principal first, all tax-free",
      "LIFO: earnings come out first, taxable as ordinary income, and a 10% premature-distribution penalty generally applies before 59½ (with limited exceptions)",
      "All long-term capital gain",
      "Tax-free because annuities are Roth equivalents"
    ],
    "answerIndex": 1,
    "explanation": "Nonqualified annuity withdrawals are last-in, first-out: earnings first, ordinary income. Pre-59½ withdrawals generally add a 10% penalty on the taxable portion."
  },
  {
    "section": 2,
    "topic": "annuity vs life insurance",
    "yield": "med",
    "trap": false,
    "question": "A client needs a death benefit for young children and is not trying to create a tax-deferred investment account. Which product is the more direct fit?",
    "options": [
      "Deferred variable annuity with a GMAB rider",
      "Term life insurance",
      "Immediate life-only annuity",
      "Equity-indexed annuity with a 12-year CDSC"
    ],
    "answerIndex": 1,
    "explanation": "Term life is pure death-benefit protection. Annuities are longevity/accumulation vehicles; using them as a substitute for needed term coverage is a common suitability error."
  },
  {
    "section": 2,
    "topic": "REITs",
    "yield": "high",
    "trap": false,
    "question": "A 68-year-old who may need principal in two years is offered a non-traded (non-listed) REIT yielding 6.2%. Primary concern?",
    "options": [
      "Non-traded REITs are as liquid as listed REIT shares and T-bills",
      "Non-listed REITs often have limited liquidity, high upfront fees, and NAV uncertainty—poor for a short horizon",
      "Non-traded REITs are FDIC-insured real estate CDs",
      "All REITs must redeem daily at NAV like open-end funds"
    ],
    "answerIndex": 1,
    "explanation": "The 2023 specs added non-liquid REITs. They are not exchange-traded, redemptions (if any) can be gated, fees are often heavy, and valuations lag. Unsuitable for near-term cash needs."
  },
  {
    "section": 2,
    "topic": "SPACs",
    "yield": "high",
    "trap": false,
    "question": "A client wants to buy a SPAC that has not yet announced a target. What is the most accurate description?",
    "options": [
      "A seasoned operating company issuing a secondary offering of existing business lines",
      "A blank-check/blind-pool vehicle that raises IPO cash and later seeks a merger with an unidentified private company, with deal and dilution/redemption risk",
      "A UIT of Treasury STRIPS",
      "An open-end fund required to hold 75% real estate"
    ],
    "answerIndex": 1,
    "explanation": "SPACs (blank-check companies) are on the 2023 outline. Investors fund a shell that must find a target; they face uncertainty about the business, possible dilution, and whether to redeem at the deal vote."
  },
  {
    "section": 2,
    "topic": "digital assets",
    "yield": "high",
    "trap": false,
    "question": "An IAR is asked to contrast a bitcoin spot holding with a registered equity. Which risk cluster is most distinctive for the digital asset?",
    "options": [
      "No volatility; digital assets have par-value floors",
      "Operational/custody, cybersecurity, 24/7 market structure, and uncertain regulatory status (including whether a given token is a security under Howey)",
      "Digital assets are always covered by SIPC like street-name stocks",
      "Bitcoin pays a contractual coupon from the U.S. Treasury"
    ],
    "answerIndex": 1,
    "explanation": "The 2023 specs test digital-asset characteristics and the security-versus-commodity distinction. Custody hacks, private-key loss, and regulatory classification are central, along with extreme price volatility."
  },
  {
    "section": 2,
    "topic": "life insurance",
    "yield": "med",
    "trap": false,
    "question": "Which life-insurance design has a flexible premium, a cash-value account credited by the insurer, and an adjustable death benefit, but is not invested in a securities separate account?",
    "options": [
      "Variable life",
      "Universal life",
      "Variable annuity",
      "Traditional whole life with a rigid scheduled premium and fixed guaranteed death benefit only"
    ],
    "answerIndex": 1,
    "explanation": "Universal life: flexible premiums and adjustable death benefit, general-account crediting. Variable life uses a separate account (security). Whole life has level scheduled premiums and a guaranteed face amount."
  },
  {
    "section": 2,
    "topic": "ETNs structured products",
    "yield": "med",
    "trap": false,
    "question": "An exchange-traded note tracking a commodity index is best described as:",
    "options": [
      "An ownership share of a commodity pool with no issuer credit risk",
      "An unsecured debt obligation of the issuing bank whose return is linked to an index; the holder has issuer credit risk plus the index's market risk",
      "A Treasury STRIP backed by Ginnie Mae",
      "An FDIC-insured CD with equity participation"
    ],
    "answerIndex": 1,
    "explanation": "ETNs are senior unsecured notes, not funds holding the underlying. If the bank fails, the index formula does not protect principal."
  },
  {
    "section": 2,
    "topic": "leveraged inverse funds",
    "yield": "med",
    "trap": false,
    "question": "A client buys a −3x daily inverse ETF on the S&P 500 as a 'long-term hedge' to hold for five years. What should the IAR warn?",
    "options": [
      "Daily-reset leveraged/inverse ETFs are generally designed for short-term tactical use; compounding can cause multi-day returns to diverge sharply from −3× the index over long holds",
      "Inverse ETFs perfectly deliver −3× over any horizon by prospectus",
      "Inverse ETFs are the same as protective puts with no path dependency",
      "Five-year holds are the intended use because leverage decays only intra-day"
    ],
    "answerIndex": 0,
    "explanation": "Path dependency and daily compounding mean leveraged/inverse ETFs are poor buy-and-hold hedges. They are short-horizon trading tools, not long-term portfolio insurance."
  },
  {
    "section": 2,
    "topic": "private funds",
    "yield": "med",
    "trap": false,
    "question": "Compared with a registered open-end fund, a hedge fund sold to wealthy investors typically features:",
    "options": [
      "Daily NAV liquidity, a $1 minimum, and no performance allocation",
      "Limited liquidity, accredited/qualified-purchaser gates, and often a performance (carried-interest) allocation on top of a management fee",
      "SEC-registered unlimited public offering with a prospectus identical to a mutual fund",
      "FDIC insurance of partnership capital"
    ],
    "answerIndex": 1,
    "explanation": "Private funds rely on exemptions, restrict who may invest, lock up capital, and commonly charge '2 and 20'-style fees. They are not daily-liquidity retail products."
  },
  {
    "section": 2,
    "topic": "MBS ABS",
    "yield": "med",
    "trap": false,
    "question": "When mortgage rates drop 150 bp, holders of premium Ginnie Mae pass-throughs most often experience:",
    "options": [
      "Extension risk as prepayments stall",
      "Faster prepayments (contraction risk), returning principal that must be reinvested at lower rates",
      "A contractual increase in coupon to match new originations",
      "Conversion into TIPS"
    ],
    "answerIndex": 1,
    "explanation": "Lower rates → refinancing → faster prepayments on MBS. Premium MBS are especially painful because expensive principal comes back early (contraction/prepayment risk)."
  }
]);
