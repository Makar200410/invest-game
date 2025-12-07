import React, { useEffect, useState, useRef, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import { BookOpen, ChevronRight, Search } from 'lucide-react';
import { getGlossaryTermsForLanguage } from './data/locales/glossary';

export interface GlossaryTerm {
    id: string;
    term: string;
    definition: string;
    category: string;
}

export const glossaryTerms: GlossaryTerm[] = [
    // Basic Terms
    { id: 'asset', term: 'Asset', definition: 'Anything of value that can be owned: stocks, bonds, real estate, cash, etc. Assets can generate income or appreciate in value over time.', category: 'Basic' },
    { id: 'liability', term: 'Liability', definition: 'A debt or obligation you owe to someone else. Examples: mortgage, car loan, credit card debt.', category: 'Basic' },
    { id: 'equity', term: 'Equity', definition: 'The value of ownership in an asset after subtracting all liabilities. In stocks, it represents ownership in a company.', category: 'Basic' },
    { id: 'capital', term: 'Capital', definition: 'Money or assets used to generate more money through investment or business operations.', category: 'Basic' },
    { id: 'portfolio', term: 'Portfolio', definition: 'A collection of all your investments (stocks, bonds, ETFs, etc.) held together.', category: 'Basic' },
    { id: 'dividend', term: 'Dividend', definition: 'A payment made by a company to its shareholders, typically from profits. Usually paid quarterly.', category: 'Basic' },
    { id: 'principal', term: 'Principal', definition: 'The original amount of money invested or borrowed, before any interest or returns.', category: 'Basic' },
    { id: 'net-worth', term: 'Net Worth', definition: 'Total assets minus total liabilities. The true measure of your wealth.', category: 'Basic' },
    { id: 'opportunity-cost', term: 'Opportunity Cost', definition: 'The potential benefit you miss out on when choosing one alternative over another.', category: 'Basic' },
    { id: 'cash-flow', term: 'Cash Flow', definition: 'The net amount of cash and cash-equivalents being transferred into and out of a business or personal accounts.', category: 'Basic' },

    // Money & History
    { id: 'barter', term: 'Barter', definition: 'Direct exchange of goods/services without money. Inefficient due to "double coincidence of wants."', category: 'Money' },
    { id: 'commodity-money', term: 'Commodity Money', definition: 'Money made from valuable substance (gold, silver, salt). Has intrinsic value beyond its monetary use.', category: 'Money' },
    { id: 'gold-standard', term: 'Gold Standard', definition: 'A monetary system where currency is backed by and exchangeable for a fixed amount of gold.', category: 'Money' },
    { id: 'fractional-reserve', term: 'Fractional Reserve Banking', definition: 'Banking system where banks hold only a fraction of deposits as reserves and lend out the rest. Creates money.', category: 'Money' },
    { id: 'bank-run', term: 'Bank Run', definition: 'When many depositors withdraw their money simultaneously, fearing the bank will fail. Can cause bank collapse.', category: 'Money' },
    { id: 'money-supply', term: 'Money Supply', definition: 'The total amount of money in circulation in an economy (M1, M2, M3 measures).', category: 'Money' },
    { id: 'velocity-of-money', term: 'Velocity of Money', definition: 'How quickly money circulates in the economy. High velocity = money changes hands frequently.', category: 'Money' },
    { id: 'double-coincidence', term: 'Double Coincidence of Wants', definition: 'The problem in barter where you must find someone who has what you want AND wants what you have.', category: 'Money' },
    { id: 'fungibility', term: 'Fungibility', definition: 'Property of a good where one unit is identical to another (e.g., one dollar is the same as another dollar).', category: 'Money' },
    { id: 'scarcity', term: 'Scarcity', definition: 'Limited availability of a resource. Essential for money to maintain value.', category: 'Money' },
    { id: 'representative-money', term: 'Representative Money', definition: 'Money that has no intrinsic value but can be exchanged for a commodity like gold or silver.', category: 'Money' },

    // Interest & Returns
    { id: 'compound-interest', term: 'Compound Interest', definition: 'Interest calculated on both the initial principal and the accumulated interest from previous periods. "Interest on interest."', category: 'Interest' },
    { id: 'simple-interest', term: 'Simple Interest', definition: 'Interest calculated only on the original principal amount, not on any accumulated interest.', category: 'Interest' },
    { id: 'apr', term: 'APR (Annual Percentage Rate)', definition: 'The yearly interest rate without accounting for compounding. Used for loans and credit cards.', category: 'Interest' },
    { id: 'apy', term: 'APY (Annual Percentage Yield)', definition: 'The real rate of return including compounding. Used for savings accounts and investments.', category: 'Interest' },
    { id: 'rule-of-72', term: 'Rule of 72', definition: 'A formula to estimate how long it takes money to double: divide 72 by the annual interest rate.', category: 'Interest' },
    { id: 'nominal-return', term: 'Nominal Return', definition: 'Investment return before accounting for inflation. The raw percentage gain.', category: 'Interest' },
    { id: 'real-return', term: 'Real Return', definition: 'Investment return after subtracting inflation. Real Return = Nominal Return - Inflation Rate.', category: 'Interest' },
    { id: 'time-preference', term: 'Time Preference', definition: 'The relative valuation placed on receiving a good at an earlier date compared with receiving it at a later date.', category: 'Interest' },

    // Inflation & Economy
    { id: 'inflation', term: 'Inflation', definition: 'The rate at which prices rise over time, reducing purchasing power. Measured by CPI (Consumer Price Index).', category: 'Economy' },
    { id: 'deflation', term: 'Deflation', definition: 'When prices fall across the economy. Sounds good but can be devastating because it increases debt burden.', category: 'Economy' },
    { id: 'hyperinflation', term: 'Hyperinflation', definition: 'Extreme inflation (50%+ per month). Destroys currency value rapidly. Examples: Zimbabwe, Weimar Germany.', category: 'Economy' },
    { id: 'cpi', term: 'CPI (Consumer Price Index)', definition: 'A measure of the average change in prices for a basket of consumer goods and services over time.', category: 'Economy' },
    { id: 'purchasing-power', term: 'Purchasing Power', definition: 'The amount of goods/services your money can buy. Inflation erodes purchasing power over time.', category: 'Economy' },
    { id: 'fiat-currency', term: 'Fiat Currency', definition: 'Money declared legal tender by a government but not backed by a physical commodity (like gold).', category: 'Economy' },
    { id: 'demand-pull-inflation', term: 'Demand-Pull Inflation', definition: 'Inflation caused by too much money chasing too few goods. Usually from strong economic growth.', category: 'Economy' },
    { id: 'cost-push-inflation', term: 'Cost-Push Inflation', definition: 'Inflation caused by rising production costs (oil, wages, materials) being passed to consumers.', category: 'Economy' },
    { id: 'cantillon-effect', term: 'Cantillon Effect', definition: 'When new money enters an economy, those who receive it first benefit most (banks, government). Last receivers suffer.', category: 'Economy' },
    { id: 'supply-and-demand', term: 'Supply and Demand', definition: 'The economic model of price determination. Prices rise when demand exceeds supply and fall when supply exceeds demand.', category: 'Economy' },
    { id: 'wage-price-spiral', term: 'Wage-Price Spiral', definition: 'A cycle where rising wages cause higher prices (inflation), which in turn causes workers to demand higher wages.', category: 'Economy' },
    { id: 'hedonics', term: 'Hedonics', definition: 'Adjusting prices for quality improvements. A better product at the same price is considered a price drop.', category: 'Economy' },
    { id: 'substitution-bias', term: 'Substitution Bias', definition: 'A flaw in CPI where consumers switching to cheaper goods masks the true rise in cost of living.', category: 'Economy' },

    // Central Banks & Rates
    { id: 'federal-reserve', term: 'Federal Reserve (Fed)', definition: 'The central bank of the United States, responsible for monetary policy, regulating banks, and maintaining financial stability.', category: 'Central Banking' },
    { id: 'central-bank', term: 'Central Bank', definition: 'An institution that manages a country\'s currency, money supply, and interest rates (e.g., Fed, ECB, BOJ).', category: 'Central Banking' },
    { id: 'fed-funds-rate', term: 'Federal Funds Rate', definition: 'The interest rate at which banks lend money to each other overnight. Set by the Fed and influences all other rates.', category: 'Central Banking' },
    { id: 'monetary-policy', term: 'Monetary Policy', definition: 'Actions by a central bank to control money supply and interest rates to achieve economic objectives.', category: 'Central Banking' },
    { id: 'quantitative-easing', term: 'Quantitative Easing (QE)', definition: 'A central bank creates new money electronically to buy government bonds and stimulate the economy when rates hit zero.', category: 'Central Banking' },
    { id: 'quantitative-tightening', term: 'Quantitative Tightening (QT)', definition: 'The reverse of QE: the central bank reduces its balance sheet by letting bonds mature without replacement.', category: 'Central Banking' },
    { id: 'interest-rate', term: 'Interest Rate', definition: 'The cost of borrowing money, expressed as a percentage. Also the reward for lending/saving.', category: 'Central Banking' },
    { id: 'prime-rate', term: 'Prime Rate', definition: 'The interest rate banks charge their most creditworthy customers. Moves with the Fed Funds Rate.', category: 'Central Banking' },
    { id: 'zirp', term: 'ZIRP (Zero Interest Rate Policy)', definition: 'A macroeconomic concept describing conditions with a very low nominal interest rate, used to stimulate the economy.', category: 'Central Banking' },

    // Bonds & Fixed Income
    { id: 'bond', term: 'Bond', definition: 'A loan you give to a government or company. They pay you interest (coupon) and return your principal at maturity.', category: 'Bonds' },
    { id: 'yield', term: 'Yield', definition: 'The income return on an investment, expressed as a percentage of the investment\'s price.', category: 'Bonds' },
    { id: 'yield-curve', term: 'Yield Curve', definition: 'A chart showing interest rates of bonds with different maturities. Inverted curve = recession warning.', category: 'Bonds' },
    { id: 'inverted-yield-curve', term: 'Inverted Yield Curve', definition: 'When short-term rates exceed long-term rates. The most reliable recession predictor.', category: 'Bonds' },
    { id: 'coupon', term: 'Coupon', definition: 'The interest payment made by a bond, usually semi-annually. Named from when bonds had physical coupons to clip.', category: 'Bonds' },
    { id: 'maturity', term: 'Maturity', definition: 'The date when a bond or loan must be repaid in full. Short-term < 3 years, Long-term > 10 years.', category: 'Bonds' },
    { id: 'treasury', term: 'Treasury Bond', definition: 'A government bond issued by the US Treasury. Considered "risk-free" because the US has never defaulted.', category: 'Bonds' },
    { id: 'credit-rating', term: 'Credit Rating', definition: 'A grade (AAA to D) indicating how likely a borrower is to repay debt. Higher rating = lower risk = lower yield.', category: 'Bonds' },
    { id: 'duration-risk', term: 'Duration Risk', definition: 'The risk that a bond\'s price will fall when interest rates rise. Longer-term bonds have higher duration risk.', category: 'Bonds' },

    // Stocks & Markets
    { id: 'stock', term: 'Stock', definition: 'A share of ownership in a company. Also called equity or shares. Buying stock makes you a part-owner.', category: 'Stocks' },
    { id: 'market-cap', term: 'Market Capitalization', definition: 'The total value of all a company\'s shares: Stock Price × Number of Shares Outstanding.', category: 'Stocks' },
    { id: 'bull-market', term: 'Bull Market', definition: 'A market where prices are rising (typically 20%+ from lows). Characterized by optimism and buying.', category: 'Stocks' },
    { id: 'bear-market', term: 'Bear Market', definition: 'A market where prices are falling (typically 20%+ from highs). Characterized by fear and selling.', category: 'Stocks' },
    { id: 'volatility', term: 'Volatility', definition: 'How much and how quickly prices change. High volatility = big swings. Measured by standard deviation or VIX.', category: 'Stocks' },
    { id: 'liquidity', term: 'Liquidity', definition: 'How easily an asset can be converted to cash without affecting its price. Cash is most liquid; real estate is illiquid.', category: 'Stocks' },
    { id: 'bid-ask-spread', term: 'Bid-Ask Spread', definition: 'The difference between the highest price a buyer will pay (bid) and the lowest price a seller will accept (ask).', category: 'Stocks' },
    { id: 'ipo', term: 'IPO (Initial Public Offering)', definition: 'When a private company first sells shares to the public. The company "goes public."', category: 'Stocks' },
    { id: 'blue-chip', term: 'Blue Chip Stock', definition: 'Shares of large, well-established, financially stable companies with a long track record. Examples: Apple, Microsoft.', category: 'Stocks' },

    // Investment Strategies
    { id: 'diversification', term: 'Diversification', definition: 'Spreading investments across different assets to reduce risk. "Don\'t put all your eggs in one basket."', category: 'Strategy' },
    { id: 'dollar-cost-averaging', term: 'Dollar Cost Averaging (DCA)', definition: 'Investing a fixed amount at regular intervals, regardless of price. Reduces impact of volatility.', category: 'Strategy' },
    { id: 'index-fund', term: 'Index Fund', definition: 'A fund that tracks a market index (like S&P 500). Low cost, passive investing. Beats most active managers.', category: 'Strategy' },
    { id: 'etf', term: 'ETF (Exchange-Traded Fund)', definition: 'A fund traded on exchanges like a stock. Contains many assets (stocks/bonds). Combines diversification with trading flexibility.', category: 'Strategy' },
    { id: 'expense-ratio', term: 'Expense Ratio', definition: 'Annual fee charged by a fund, expressed as a percentage of assets. Lower is better. Index funds charge ~0.03%.', category: 'Strategy' },
    { id: 'rebalancing', term: 'Rebalancing', definition: 'Periodically adjusting your portfolio back to your target allocation by selling winners and buying losers.', category: 'Strategy' },
    { id: 'buy-and-hold', term: 'Buy and Hold', definition: 'Long-term strategy of buying investments and holding them for years/decades regardless of short-term volatility.', category: 'Strategy' },
    { id: 'asset-allocation', term: 'Asset Allocation', definition: 'How you divide your portfolio among different asset classes (stocks, bonds, cash, real estate).', category: 'Strategy' },
    { id: 'value-investing', term: 'Value Investing', definition: 'Buying stocks trading below their intrinsic value. Popularized by Benjamin Graham and Warren Buffett.', category: 'Strategy' },
    { id: 'growth-investing', term: 'Growth Investing', definition: 'Buying stocks of fast-growing companies, often at high valuations, expecting future earnings to justify price.', category: 'Strategy' },
    { id: 'debt-snowball', term: 'Debt Snowball', definition: 'A debt reduction strategy where you pay off debt in order of smallest to largest balance, gaining psychological momentum.', category: 'Strategy' },
    { id: 'debt-avalanche', term: 'Debt Avalanche', definition: 'A debt reduction strategy where you pay off debt in order of highest interest rate to lowest, mathematically saving the most money.', category: 'Strategy' },
    { id: '50-30-20-rule', term: '50/30/20 Rule', definition: 'A budgeting rule: 50% of income for needs, 30% for wants, and 20% for savings/debt repayment.', category: 'Strategy' },

    // Risk & Returns
    { id: 'risk', term: 'Risk', definition: 'The chance of losing money or not achieving expected returns. Higher potential returns usually mean higher risk.', category: 'Risk' },
    { id: 'risk-tolerance', term: 'Risk Tolerance', definition: 'How much risk you can emotionally handle. Can you sleep when your portfolio drops 30%?', category: 'Risk' },
    { id: 'risk-capacity', term: 'Risk Capacity', definition: 'How much risk you can financially afford. Based on age, income, savings, time horizon.', category: 'Risk' },
    { id: 'sharpe-ratio', term: 'Sharpe Ratio', definition: 'A measure of risk-adjusted return: how much excess return you get for each unit of risk taken.', category: 'Risk' },
    { id: 'correlation', term: 'Correlation', definition: 'How two assets move together. +1 = same direction, -1 = opposite, 0 = no relationship.', category: 'Risk' },
    { id: 'black-swan', term: 'Black Swan', definition: 'A rare, unpredictable event with massive consequences (2008 crisis, COVID). Can\'t be predicted by historical data.', category: 'Risk' },
    { id: 'systematic-risk', term: 'Systematic Risk', definition: 'Risk affecting the entire market (recessions, wars). Cannot be diversified away.', category: 'Risk' },
    { id: 'unsystematic-risk', term: 'Unsystematic Risk', definition: 'Risk specific to one company/sector (bad CEO, fraud). CAN be diversified away.', category: 'Risk' },
    { id: 'margin-of-safety', term: 'Margin of Safety', definition: 'Buying assets below their intrinsic value to protect against errors in valuation or unforeseen events.', category: 'Risk' },
    { id: 'risk-premium', term: 'Risk Premium', definition: 'The return in excess of the risk-free rate of return an investment is expected to yield.', category: 'Risk' },

    // Financial Statements
    { id: 'income-statement', term: 'Income Statement', definition: 'Financial statement showing revenue, expenses, and profit over a period. Also called Profit & Loss (P&L).', category: 'Statements' },
    { id: 'balance-sheet', term: 'Balance Sheet', definition: 'Financial statement showing what a company owns (assets) and owes (liabilities) at a specific moment.', category: 'Statements' },
    { id: 'cash-flow-statement', term: 'Cash Flow Statement', definition: 'Financial statement tracking actual cash movement from operations, investing, and financing activities.', category: 'Statements' },
    { id: 'revenue', term: 'Revenue', definition: 'Total money earned from sales before any expenses. Also called "top line" or sales.', category: 'Statements' },
    { id: 'net-income', term: 'Net Income', definition: 'Final profit after all expenses, taxes, and deductions. Also called "bottom line" or earnings.', category: 'Statements' },
    { id: 'free-cash-flow', term: 'Free Cash Flow', definition: 'Cash from operations minus capital expenditures. The actual cash available to shareholders.', category: 'Statements' },
    { id: 'ebitda', term: 'EBITDA', definition: 'Earnings Before Interest, Taxes, Depreciation, and Amortization. Measure of operating profitability.', category: 'Statements' },

    // Valuation
    { id: 'pe-ratio', term: 'P/E Ratio', definition: 'Price-to-Earnings ratio. Stock price divided by earnings per share. Shows how expensive a stock is.', category: 'Valuation' },
    { id: 'ps-ratio', term: 'P/S Ratio', definition: 'Price-to-Sales ratio. Stock price divided by revenue per share. Useful when company has no earnings.', category: 'Valuation' },
    { id: 'pb-ratio', term: 'P/B Ratio', definition: 'Price-to-Book ratio. Stock price divided by book value per share. Shows premium over net assets.', category: 'Valuation' },
    { id: 'intrinsic-value', term: 'Intrinsic Value', definition: 'The true underlying worth of an asset based on fundamentals, regardless of market price.', category: 'Valuation' },
    { id: 'dcf', term: 'DCF (Discounted Cash Flow)', definition: 'Valuation method calculating present value of all expected future cash flows.', category: 'Valuation' },
    { id: 'roe', term: 'ROE (Return on Equity)', definition: 'Net Income / Shareholder Equity. Shows how efficiently management uses shareholder capital.', category: 'Valuation' },

    // Taxes
    { id: 'capital-gains', term: 'Capital Gains', definition: 'Profit from selling an asset for more than you paid. Short-term (<1 year) taxed higher than long-term.', category: 'Taxes' },
    { id: 'capital-gains-tax', term: 'Capital Gains Tax', definition: 'Tax on investment profits. Long-term (>1 year): 0%, 15%, or 20%. Short-term: taxed as ordinary income.', category: 'Taxes' },
    { id: 'tax-loss-harvesting', term: 'Tax-Loss Harvesting', definition: 'Selling losers to offset gains and reduce taxes. Limited by the "wash sale" rule (30-day wait).', category: 'Taxes' },
    { id: 'roth-ira', term: 'Roth IRA', definition: 'A retirement account where you contribute after-tax money but withdrawals in retirement are 100% tax-free.', category: 'Taxes' },
    { id: '401k', term: '401(k)', definition: 'An employer-sponsored retirement account. Contributions reduce taxable income. Often includes employer matching.', category: 'Taxes' },
    { id: 'drip', term: 'DRIP (Dividend Reinvestment Plan)', definition: 'Automatically reinvest dividends to buy more shares. Compounds growth without manual action.', category: 'Taxes' },
    { id: 'wash-sale', term: 'Wash Sale Rule', definition: 'Cannot claim tax loss if you buy "substantially identical" security within 30 days before/after sale.', category: 'Taxes' },

    // Technical Terms
    { id: 'leverage', term: 'Leverage', definition: 'Using borrowed money to amplify returns (and losses). Margin trading is a form of leverage.', category: 'Advanced' },
    { id: 'margin', term: 'Margin', definition: 'Borrowing money from your broker to buy investments. Dangerous because you can lose more than you invested.', category: 'Advanced' },
    { id: 'margin-call', term: 'Margin Call', definition: 'When your broker demands you deposit more money because your leveraged position has lost too much value.', category: 'Advanced' },
    { id: 'short-selling', term: 'Short Selling', definition: 'Betting a stock will fall by borrowing shares, selling them, and buying them back cheaper. Unlimited loss potential.', category: 'Advanced' },
    { id: 'hedge', term: 'Hedge', definition: 'An investment made to reduce the risk of another investment. Insurance for your portfolio.', category: 'Advanced' },
    { id: 'derivative', term: 'Derivative', definition: 'A financial contract whose value derives from an underlying asset (options, futures, swaps).', category: 'Advanced' },
    { id: 'options', term: 'Options', definition: 'Contracts giving the right (not obligation) to buy/sell an asset at a set price by a certain date.', category: 'Advanced' },
    { id: 'futures', term: 'Futures', definition: 'Contracts obligating purchase/sale of an asset at a predetermined price on a future date.', category: 'Advanced' },
    { id: 'stop-loss', term: 'Stop Loss', definition: 'An automatic sell order triggered when price drops below a set threshold. Limits downside.', category: 'Advanced' },
    { id: 'carry-trade', term: 'Carry Trade', definition: 'Borrowing money in a currency with low interest rates to invest in a currency with high interest rates.', category: 'Advanced' },

    // Central Banking (additional from ff_5)
    { id: 'money-multiplier', term: 'Money Multiplier', definition: 'Effect of fractional reserve banking: each dollar deposited can create multiple dollars in loans.', category: 'Central Banking' },
    { id: 'shadow-banking', term: 'Shadow Banking', definition: 'Non-bank financial intermediaries (money market funds, hedge funds) operating outside traditional regulation.', category: 'Central Banking' },
    { id: 'credit-crunch', term: 'Credit Crunch', definition: 'When banks stop lending, contracting the money supply regardless of central bank actions.', category: 'Central Banking' },
    { id: 'forward-guidance', term: 'Forward Guidance', definition: 'Central bank communication about future policy intentions. Words move markets before actions.', category: 'Central Banking' },
    { id: 'dual-mandate', term: 'Dual Mandate', definition: 'The Fed\'s two goals: price stability (low inflation) AND maximum employment.', category: 'Central Banking' },
    { id: 'lender-of-last-resort', term: 'Lender of Last Resort', definition: 'Central bank role of providing emergency liquidity to prevent financial system collapse.', category: 'Central Banking' },
    { id: 'dot-plot', term: 'Dot Plot', definition: 'Fed chart showing each official\'s projection for future interest rates. Closely watched by markets.', category: 'Central Banking' },

    // Economic Cycles (additional from ff_6)
    { id: 'leading-indicators', term: 'Leading Indicators', definition: 'Economic metrics that predict future activity: stock market, building permits, yield curve.', category: 'Cycles' },
    { id: 'lagging-indicators', term: 'Lagging Indicators', definition: 'Economic metrics that confirm past activity: unemployment rate, CPI, corporate profits.', category: 'Cycles' },
    { id: 'sector-rotation', term: 'Sector Rotation', definition: 'Strategy of moving money between sectors based on economic cycle phase.', category: 'Cycles' },
    { id: 'fiscal-policy', term: 'Fiscal Policy', definition: 'Government spending and taxation decisions. Used alongside monetary policy to manage economy.', category: 'Cycles' },
    { id: 'fat-tails', term: 'Fat Tails', definition: 'Statistical phenomenon where extreme events occur more frequently than normal distribution predicts.', category: 'Cycles' },
    { id: 'commodities', term: 'Commodities', definition: 'Raw materials traded on exchanges: gold, oil, wheat, copper. Often used as inflation hedges.', category: 'Cycles' },
    { id: 'coincident-indicators', term: 'Coincident Indicators', definition: 'Economic metrics that change at the same time as the economy (e.g., GDP, employment).', category: 'Cycles' },

    // Financial Statements (additional from ff_7)
    { id: 'cogs', term: 'COGS (Cost of Goods Sold)', definition: 'Direct costs to produce goods sold by a company. Subtracted from revenue to get gross profit.', category: 'Statements' },
    { id: 'gross-profit', term: 'Gross Profit', definition: 'Revenue minus COGS. Shows pricing power before operating expenses.', category: 'Statements' },
    { id: 'operating-income', term: 'Operating Income', definition: 'Profit from core business operations, before interest and taxes.', category: 'Statements' },
    { id: 'profit-margin', term: 'Profit Margin', definition: 'Net Income divided by Revenue. Shows what percentage of sales becomes profit.', category: 'Statements' },
    { id: 'current-ratio', term: 'Current Ratio', definition: 'Current Assets / Current Liabilities. Above 1 means company can pay short-term debts.', category: 'Statements' },
    { id: 'debt-to-equity', term: 'Debt-to-Equity Ratio', definition: 'Total Debt / Shareholder Equity. Lower is generally safer. High ratio = more financial risk.', category: 'Statements' },
    { id: 'accounts-receivable', term: 'Accounts Receivable', definition: 'Money owed to company by customers. Growing faster than revenue = potential red flag.', category: 'Statements' },
    { id: '10k-report', term: '10-K Report', definition: 'Annual filing required by SEC. Most detailed view of company\'s financial condition.', category: 'Statements' },
    { id: '10q-report', term: '10-Q Report', definition: 'Quarterly filing required by SEC. Less detailed than 10-K but more timely.', category: 'Statements' },
    { id: 'operating-expenses', term: 'Operating Expenses', definition: 'Expenses incurred in carrying out day-to-day activities, but not directly associated with production (e.g., rent, marketing).', category: 'Statements' },

    // Valuation (additional from ff_8)
    { id: 'ev-ebitda', term: 'EV/EBITDA', definition: 'Enterprise Value / EBITDA. Valuation ratio that accounts for debt. Popular for comparing companies.', category: 'Valuation' },
    { id: 'enterprise-value', term: 'Enterprise Value', definition: 'Market Cap + Debt - Cash. Total value required to acquire a company.', category: 'Valuation' },
    { id: 'book-value', term: 'Book Value', definition: 'Total assets minus total liabilities. The accounting value of a company.', category: 'Valuation' },
    { id: 'cape-ratio', term: 'CAPE Ratio', definition: 'Shiller\'s Cyclically Adjusted P/E. Uses 10-year average earnings to smooth business cycles.', category: 'Valuation' },
    { id: 'discount-rate', term: 'Discount Rate', definition: 'Interest rate used to calculate present value of future cash flows. Higher rate = lower value.', category: 'Valuation' },

    // Risk (additional from ff_9)
    { id: 'beta', term: 'Beta', definition: 'Measure of stock volatility relative to market. Beta 1.5 = 50% more volatile than S&P 500.', category: 'Risk' },
    { id: 'standard-deviation', term: 'Standard Deviation', definition: 'Statistical measure of how much returns vary from average. Higher = more volatile.', category: 'Risk' },
    { id: 'max-drawdown', term: 'Maximum Drawdown', definition: 'Largest peak-to-trough decline in portfolio value. The pain you actually feel in crashes.', category: 'Risk' },
    { id: 'position-sizing', term: 'Position Sizing', definition: 'How much of portfolio to put in each investment. Never risk more than 2% on a single trade.', category: 'Risk' },
    { id: 'currency-risk', term: 'Currency Risk', definition: 'Risk that exchange rates move against your international investments.', category: 'Risk' },
    { id: 'barbell-strategy', term: 'Barbell Strategy', definition: 'Nassim Taleb\'s approach: 90% ultra-safe assets + 10% high-risk bets. Nothing in middle.', category: 'Risk' },
    { id: 'risk-parity', term: 'Risk Parity', definition: 'Allocation strategy based on risk contribution, not dollar amount. Equalizes risk across assets.', category: 'Risk' },
    { id: 'tail-risk', term: 'Tail Risk', definition: 'Risk of rare extreme events in the "tails" of probability distribution. Often underestimated.', category: 'Risk' },
    { id: 'gold', term: 'Gold', definition: 'Precious metal used as store of value and inflation hedge. Often rises during financial crises.', category: 'Risk' },

    // Portfolio Building (additional from ff_10)
    { id: 'emergency-fund', term: 'Emergency Fund', definition: '3-6 months of expenses in cash/savings. Foundation before investing. Prevents forced selling.', category: 'Portfolio' },
    { id: 'three-fund-portfolio', term: 'Three-Fund Portfolio', definition: 'Simple strategy: US stocks + International stocks + Bonds. Instant diversification, low cost.', category: 'Portfolio' },
    { id: 'brokerage-account', term: 'Brokerage Account', definition: 'Account at a brokerage firm that allows you to buy and sell investments.', category: 'Portfolio' },
    { id: 'target-date-fund', term: 'Target Date Fund', definition: 'Fund that automatically adjusts allocation more conservative as target retirement date approaches.', category: 'Portfolio' },
    { id: 'traditional-ira', term: 'Traditional IRA', definition: 'Retirement account with pre-tax contributions. Pay taxes on withdrawal in retirement.', category: 'Portfolio' },
    { id: 'hsa', term: 'HSA (Health Savings Account)', definition: 'Triple tax-advantaged account for medical expenses. Best account in tax code if eligible.', category: 'Portfolio' },
    { id: 'employer-match', term: 'Employer Match', definition: 'Free money from employer matching your 401(k) contributions. Always contribute enough to get full match.', category: 'Portfolio' },

    // Behavioral (additional from ff_11)
    { id: 'behavioral-gap', term: 'Behavioral Gap', definition: 'The 2-4% annual underperformance investors suffer due to emotional decisions vs. staying invested.', category: 'Behavioral' },
    { id: 'overconfidence', term: 'Overconfidence', definition: 'Believing you can beat the market or have special skill after a few wins. Leads to excessive risk.', category: 'Behavioral' },
    { id: 'gamblers-fallacy', term: 'Gambler\'s Fallacy', definition: 'Belief that past outcomes affect future probabilities. "Black is due" after 5 reds.', category: 'Behavioral' },
    { id: 'hot-hand-fallacy', term: 'Hot Hand Fallacy', definition: 'Belief that recent success predicts continued success. Past winners often become losers.', category: 'Behavioral' },
    { id: 'investment-policy-statement', term: 'Investment Policy Statement', definition: 'Written document outlining your strategy, goals, and rules. Follow during emotional times.', category: 'Behavioral' },
    { id: 'contrarian', term: 'Contrarian Investing', definition: 'Buying when others are fearful, selling when others are greedy. Uncomfortable but often profitable.', category: 'Behavioral' },

    // Taxes (additional from ff_12)
    { id: 'qualified-dividend', term: 'Qualified Dividend', definition: 'Dividend held 60+ days, taxed at favorable capital gains rates (0-20%) instead of income.', category: 'Taxes' },
    { id: 'asset-location', term: 'Asset Location', definition: 'Strategy of placing assets in optimal account types for tax efficiency.', category: 'Taxes' },
    { id: 'step-up-basis', term: 'Step-Up in Basis', definition: 'When heirs inherit assets, cost basis resets to current value, erasing all unrealized gains.', category: 'Taxes' },
    { id: 'estate-tax', term: 'Estate Tax', definition: 'Tax on assets transferred at death. Only applies to estates over $13M+ (2024). Most don\'t pay.', category: 'Taxes' },
    { id: 'roth-conversion', term: 'Roth Conversion', definition: 'Moving money from Traditional to Roth IRA. Pay taxes now for tax-free growth forever.', category: 'Taxes' },
    { id: 'tax-drag', term: 'Tax Drag', definition: 'Reduction in returns due to taxes on dividends and capital gains in taxable accounts.', category: 'Taxes' },
    { id: 'rmd', term: 'RMD (Required Minimum Distribution)', definition: 'Mandatory withdrawals from Traditional IRA/401(k) starting at age 73. Roth IRAs have no RMDs.', category: 'Taxes' },

    // Cryptocurrency
    { id: 'bitcoin', term: 'Bitcoin', definition: 'The first and largest cryptocurrency. Digital, decentralized, limited to 21 million coins. Created 2008.', category: 'Crypto' },
    { id: 'blockchain', term: 'Blockchain', definition: 'A decentralized, public ledger recording all transactions. Maintained by a network of computers.', category: 'Crypto' },
    { id: 'cryptocurrency', term: 'Cryptocurrency', definition: 'Digital currency using cryptography for security. Operates without a central bank (Bitcoin, Ethereum).', category: 'Crypto' },
    { id: 'cbdc', term: 'CBDC (Central Bank Digital Currency)', definition: 'Digital currency issued by a central bank. Unlike Bitcoin, it is centralized and government-controlled.', category: 'Crypto' },
    { id: 'double-spend', term: 'Double Spend Problem', definition: 'The challenge of preventing digital money from being spent twice. Bitcoin solved this with blockchain.', category: 'Crypto' },

    // Economic Cycles
    { id: 'recession', term: 'Recession', definition: 'A significant decline in economic activity lasting months or years. Officially: two consecutive quarters of negative GDP.', category: 'Cycles' },
    { id: 'gdp', term: 'GDP (Gross Domestic Product)', definition: 'The total value of all goods and services produced in a country. Main measure of economic health.', category: 'Cycles' },
    { id: 'business-cycle', term: 'Business Cycle', definition: 'The natural fluctuation of the economy through expansion, peak, contraction, and trough phases.', category: 'Cycles' },
    { id: 'stagflation', term: 'Stagflation', definition: 'The worst economic scenario: high inflation + high unemployment + stagnant growth. Very hard to fix.', category: 'Cycles' },
    { id: 'soft-landing', term: 'Soft Landing', definition: 'When the Fed raises rates enough to cool inflation without causing a recession. Rare achievement.', category: 'Cycles' },
    { id: 'hard-landing', term: 'Hard Landing', definition: 'When rate hikes cause a recession. The more common outcome of inflation-fighting cycles.', category: 'Cycles' },

    // Behavioral
    { id: 'loss-aversion', term: 'Loss Aversion', definition: 'Psychological bias where losses feel 2x more painful than equivalent gains feel good.', category: 'Behavioral' },
    { id: 'fomo', term: 'FOMO (Fear of Missing Out)', definition: 'Anxiety that others are profiting while you are not, leading to irrational buying at market tops.', category: 'Behavioral' },
    { id: 'recency-bias', term: 'Recency Bias', definition: 'Overweighting recent events when making decisions. Assuming current trends will continue forever.', category: 'Behavioral' },
    { id: 'confirmation-bias', term: 'Confirmation Bias', definition: 'Seeking information that confirms existing beliefs while ignoring contradicting evidence.', category: 'Behavioral' },
    { id: 'herd-mentality', term: 'Herd Mentality', definition: 'Following the crowd instead of independent analysis. Often leads to buying highs and selling lows.', category: 'Behavioral' },
    { id: 'present-bias', term: 'Present Bias', definition: 'Valuing immediate pleasure over future rewards. Makes saving and investing difficult.', category: 'Behavioral' },

    // Module 2: Investment Basics Terms
    // Financial Independence
    { id: 'fire', term: 'FIRE', definition: 'Financial Independence, Retire Early. When your passive income exceeds your living expenses. You can stop working for money.', category: 'Strategy' },
    { id: 'passive-income', term: 'Passive Income', definition: 'Money earned from assets (dividends, rent, interest) without active work. Contrasts with salary/wages.', category: 'Basic' },
    { id: 'active-income', term: 'Active Income', definition: 'Money earned by trading time for pay (salaries, hourly wages). Limited by available hours.', category: 'Basic' },

    // Risk Terms
    { id: 'permanent-loss', term: 'Permanent Loss of Capital', definition: 'An investment goes to zero (bankruptcy). Unlike volatility, this loss cannot recover.', category: 'Risk' },
    { id: 'antifragile', term: 'Antifragile', definition: 'Nassim Taleb concept: systems that gain strength from shocks and volatility, rather than breaking.', category: 'Risk' },
    { id: 'sequence-risk', term: 'Sequence of Returns Risk', definition: 'Risk of poor market returns early in retirement, which can permanently deplete savings even if average returns are good.', category: 'Risk' },
    { id: 'time-horizon', term: 'Time Horizon', definition: 'How long until you need the money. Longer horizons allow more risk since you can recover from crashes.', category: 'Risk' },
    { id: 'vix', term: 'VIX (Fear Index)', definition: 'Measures expected market volatility. VIX > 30 signals fear/panic. VIX < 15 signals calm/complacency.', category: 'Risk' },

    // Market Terms
    { id: 'all-weather-portfolio', term: 'All-Weather Portfolio', definition: 'Ray Dalio strategy: 30% stocks, 55% bonds, 15% commodities/gold. Designed to perform in any economic environment.', category: 'Portfolio' },
    { id: 'efficient-frontier', term: 'Efficient Frontier', definition: 'The optimal portfolios offering highest return for each risk level. Core concept of Modern Portfolio Theory.', category: 'Portfolio' },
    { id: 'home-bias', term: 'Home Bias', definition: 'Tendency to only invest in your own country. Reduces diversification since US is only 60% of global market.', category: 'Behavioral' },

    // Trading & Brokerage
    { id: 'settlement', term: 'Settlement (T+2)', definition: 'Time for a trade to officially complete. Stock trades settle in 2 business days after the trade date.', category: 'Trading' },
    { id: 'cash-account', term: 'Cash Account', definition: 'Brokerage account where you can only trade with deposited cash. No borrowing. Safer but slower.', category: 'Trading' },
    { id: 'margin-account', term: 'Margin Account', definition: 'Brokerage account that allows borrowing money from the broker to buy more securities. Amplifies gains and losses.', category: 'Trading' },
    { id: 'pdt-rule', term: 'PDT Rule', definition: 'Pattern Day Trader Rule: accounts under $25k cannot make more than 3 day trades in 5 business days.', category: 'Trading' },
    { id: 'sipc', term: 'SIPC Insurance', definition: 'Protects brokerage accounts up to $500k if the broker fails. Does NOT protect against investment losses.', category: 'Trading' },
    { id: 'fractional-shares', term: 'Fractional Shares', definition: 'Ability to buy less than one whole share. Allows investing any dollar amount regardless of share price.', category: 'Trading' },
    { id: 'pfof', term: 'PFOF (Payment for Order Flow)', definition: 'How "free" brokers make money. They sell your order data to market makers who may get slightly better prices.', category: 'Trading' },

    // Order Types
    { id: 'market-order', term: 'Market Order', definition: 'Buy/sell immediately at best available price. Guarantees execution but not price.', category: 'Trading' },
    { id: 'limit-order', term: 'Limit Order', definition: 'Buy/sell only at specified price or better. Guarantees price but not execution.', category: 'Trading' },
    { id: 'stop-loss', term: 'Stop Loss Order', definition: 'Automatic sell order triggered when price falls to a specific level. Limits potential losses.', category: 'Trading' },
    { id: 'trailing-stop', term: 'Trailing Stop', definition: 'Stop loss that follows price upward. Locks in gains while limiting downside.', category: 'Trading' },
    { id: 'slippage', term: 'Slippage', definition: 'Difference between expected price and actual execution price. Caused by fast markets or low liquidity.', category: 'Trading' },
    { id: 'gtc', term: 'GTC (Good Til Canceled)', definition: 'Order that remains active until filled or manually canceled (typically 60-90 days maximum).', category: 'Trading' },

    // Market Participants
    { id: 'market-maker', term: 'Market Maker', definition: 'Firm that provides liquidity by always being ready to buy or sell. Profits from the bid-ask spread.', category: 'Stocks' },
    { id: 'hft', term: 'HFT (High-Frequency Trading)', definition: 'Algorithmic trading using supercomputers to trade in microseconds. 70-80% of market volume.', category: 'Stocks' },
    { id: 'dark-pools', term: 'Dark Pools', definition: 'Private exchanges where large institutional trades happen anonymously to avoid moving market prices.', category: 'Stocks' },
    { id: 'insider-trading', term: 'Insider Trading', definition: 'Trading based on non-public material information. Illegal. Insiders must report trades to SEC (Form 4).', category: 'Stocks' },

    // Market Cycles
    { id: 'correction', term: 'Correction', definition: 'Market drop of 10-20%. Normal and healthy. Happens every 1-2 years on average.', category: 'Cycles' },
    { id: 'dead-cat-bounce', term: 'Dead Cat Bounce', definition: 'Temporary price recovery during a bear market. Trap that lures buyers before another leg down.', category: 'Cycles' },
    { id: 'secular-market', term: 'Secular Market', definition: 'Long-term market trend lasting 15-20 years. Secular bull (all-time highs) or secular bear (stagnation).', category: 'Cycles' },
    { id: 'v-recovery', term: 'V-Shaped Recovery', definition: 'Sharp market drop followed by equally sharp recovery. Example: March 2020 COVID crash.', category: 'Cycles' },
    { id: 'buffett-indicator', term: 'Buffett Indicator', definition: 'Total stock market cap divided by GDP. Above 100% suggests overvaluation.', category: 'Valuation' },

    // Stock Analysis
    { id: 'eps', term: 'EPS (Earnings Per Share)', definition: 'Company profit divided by shares outstanding. Core measure of profitability per share.', category: 'Valuation' },
    { id: 'forward-pe', term: 'Forward P/E', definition: 'Price divided by estimated future earnings. Lower than trailing P/E suggests expected growth.', category: 'Valuation' },
    { id: 'peg-ratio', term: 'PEG Ratio', definition: 'P/E divided by growth rate. PEG < 1 suggests undervalued growth; PEG > 2 suggests overvalued.', category: 'Valuation' },
    { id: 'value-trap', term: 'Value Trap', definition: 'Stock that looks cheap (low P/E, high yield) but is actually a dying business. The price stays low.', category: 'Valuation' },
    { id: 'short-interest', term: 'Short Interest', definition: 'Percentage of shares sold short. High short interest (>20%) can trigger violent short squeezes.', category: 'Stocks' },
    { id: 'short-squeeze', term: 'Short Squeeze', definition: 'When shorts rush to cover causing price spikes. Occurred with GameStop in 2021.', category: 'Stocks' },

    // Fees & Costs
    { id: 'expense-ratio', term: 'Expense Ratio', definition: 'Annual fee charged by funds, expressed as percentage. Good: <0.10%. Bad: >0.75%.', category: 'Strategy' },
    { id: 'load-fund', term: 'Load Fund', definition: 'Mutual fund that charges sales commission (front-end or back-end). Avoid these entirely.', category: 'Strategy' },
    { id: '12b-1-fee', term: '12b-1 Fee', definition: 'Hidden annual fee funds charge for marketing. You pay for them to find more customers.', category: 'Strategy' },
    { id: 'aum-fee', term: 'AUM Fee', definition: 'Assets Under Management fee. Financial advisors typically charge 1% yearly of your total portfolio.', category: 'Strategy' },
    { id: 'turnover-ratio', term: 'Turnover Ratio', definition: 'How often a fund trades its holdings. High turnover = higher hidden transaction costs and taxes.', category: 'Strategy' },

    // Tax Terms for Module 2
    { id: 'wash-sale-rule', term: 'Wash Sale Rule', definition: 'Cannot claim tax loss if you buy the same security within 30 days. The loss is disallowed.', category: 'Taxes' },
    { id: 'cost-basis', term: 'Cost Basis', definition: 'Original purchase price of an investment. Used to calculate capital gains or losses when sold.', category: 'Taxes' },
    { id: 'fifo', term: 'FIFO (First In, First Out)', definition: 'Selling oldest shares first. Default method for calculating cost basis.', category: 'Taxes' },
    { id: 'muni-bonds', term: 'Municipal Bonds', definition: 'Bonds issued by state/local governments. Interest is often federal tax-free and sometimes state tax-free.', category: 'Bonds' },
    { id: '1031-exchange', term: '1031 Exchange', definition: 'Swap investment property for another to defer capital gains tax indefinitely. Real estate only.', category: 'Taxes' },

    // Robo & Automation
    { id: 'robo-advisor', term: 'Robo-Advisor', definition: 'Automated investment platform that builds and manages a portfolio based on your risk profile. Low fees (~0.25%).', category: 'Strategy' },

    // Trading Terms
    { id: 'technical-analysis', term: 'Technical Analysis', definition: 'Analysis of price charts and patterns to predict future movements. Uses historical price and volume data.', category: 'Trading' },
    { id: 'fundamental-analysis', term: 'Fundamental Analysis', definition: 'Analysis of financial statements, economic factors, and industry conditions to determine intrinsic value.', category: 'Trading' },
    { id: 'day-trading', term: 'Day Trading', definition: 'Buying and selling securities within the same trading day. Positions are not held overnight.', category: 'Trading' },
    { id: 'swing-trading', term: 'Swing Trading', definition: 'Holding positions for days to weeks to profit from expected price swings or momentum.', category: 'Trading' },
    { id: 'position-trading', term: 'Position Trading', definition: 'Long-term trading strategy holding positions for months to years based on major trends.', category: 'Trading' },
    { id: 'scalping', term: 'Scalping', definition: 'Making many trades to profit from small price changes, typically holding for seconds to minutes.', category: 'Trading' },
    { id: 'breakout', term: 'Breakout', definition: 'When price moves above resistance or below support with increased volume, signaling a new trend.', category: 'Trading' },
    { id: 'support', term: 'Support', definition: 'Price level where buying pressure tends to prevent further decline. Acts as a "floor."', category: 'Trading' },
    { id: 'resistance', term: 'Resistance', definition: 'Price level where selling pressure tends to prevent further rise. Acts as a "ceiling."', category: 'Trading' },
    { id: 'trend', term: 'Trend', definition: 'The general direction of price movement—uptrend (higher highs/lows) or downtrend (lower highs/lows).', category: 'Trading' },
    { id: 'momentum', term: 'Momentum', definition: 'The rate of acceleration of price movement. Strong momentum often continues in the same direction.', category: 'Trading' },
    { id: 'reversal', term: 'Reversal', definition: 'When price changes direction from an established trend, signaling a potential new trend.', category: 'Trading' },
    { id: 'consolidation', term: 'Consolidation', definition: 'Period when price trades in a narrow range, often before a significant move in either direction.', category: 'Trading' },
    { id: 'pullback', term: 'Pullback', definition: 'Temporary price decline during an uptrend, often providing buying opportunities.', category: 'Trading' },
    { id: 'rally', term: 'Rally', definition: 'Sustained increase in prices, often following a period of flat or declining prices.', category: 'Trading' },
    { id: 'candlestick', term: 'Candlestick', definition: 'Chart type showing open, high, low, and close prices as candle-shaped bars with wicks.', category: 'Trading' },
    { id: 'chart-pattern', term: 'Chart Pattern', definition: 'Recognizable formations on price charts that suggest future price movements (e.g., head and shoulders).', category: 'Trading' },
    { id: 'moving-average', term: 'Moving Average', definition: 'Average price over a specific period that "moves" as new data comes in. Used to identify trends.', category: 'Trading' },
    { id: 'rsi', term: 'RSI', definition: 'Relative Strength Index. Momentum indicator measuring speed and change of price movements (0-100 scale).', category: 'Trading' },
    { id: 'macd', term: 'MACD', definition: 'Moving Average Convergence Divergence. Trend-following momentum indicator showing relationship between two moving averages.', category: 'Trading' },
    { id: 'bollinger-bands', term: 'Bollinger Bands', definition: 'Volatility bands placed above and below a moving average. Width changes with volatility.', category: 'Trading' },
    { id: 'volume', term: 'Volume', definition: 'The number of shares or contracts traded in a security. High volume confirms price moves.', category: 'Trading' },
    { id: 'overbought', term: 'Overbought', definition: 'Condition when a security has risen too quickly and may be due for a pullback. RSI > 70.', category: 'Trading' },
    { id: 'oversold', term: 'Oversold', definition: 'Condition when a security has fallen too quickly and may be due for a bounce. RSI < 30.', category: 'Trading' },
    { id: 'entry-point', term: 'Entry Point', definition: 'The price at which a trader opens a position. Determined by strategy and analysis.', category: 'Trading' },
    { id: 'exit-point', term: 'Exit Point', definition: 'The price at which a trader closes a position, whether for profit or loss.', category: 'Trading' },
    { id: 'take-profit', term: 'Take Profit', definition: 'Order to automatically close a position when it reaches a specified profit target.', category: 'Trading' },
    { id: 'risk-reward', term: 'Risk-Reward Ratio', definition: 'Ratio comparing potential profit to potential loss. A 2:1 ratio means risking $1 to gain $2.', category: 'Trading' },
    { id: 'trading-journal', term: 'Trading Journal', definition: 'Record of all trades including rationale, emotions, and outcomes. Essential for improvement.', category: 'Trading' },
    { id: 'paper-trading', term: 'Paper Trading', definition: 'Simulated trading without real money to practice strategies and build confidence.', category: 'Trading' },
    { id: 'backtesting', term: 'Backtesting', definition: 'Testing a trading strategy on historical data to evaluate its effectiveness.', category: 'Trading' },
    { id: 'demo-account', term: 'Demo Account', definition: 'Practice account with virtual money to learn trading without financial risk.', category: 'Trading' },

    // Forex Terms
    { id: 'forex', term: 'Forex', definition: 'Foreign Exchange market—the global marketplace for trading currencies. Largest financial market.', category: 'Forex' },
    { id: 'currency-pair', term: 'Currency Pair', definition: 'Two currencies quoted together (e.g., EUR/USD). First is base, second is quote currency.', category: 'Forex' },
    { id: 'pip', term: 'Pip', definition: 'Smallest price move in forex. Usually 0.0001 for most pairs (4th decimal place).', category: 'Forex' },
    { id: 'lot', term: 'Lot', definition: 'Standard unit size in forex trading. Standard lot = 100,000 units of base currency.', category: 'Forex' },
    { id: 'base-currency', term: 'Base Currency', definition: 'The first currency in a pair. The one being bought (or sold) in a trade.', category: 'Forex' },
    { id: 'quote-currency', term: 'Quote Currency', definition: 'The second currency in a pair. Shows how much is needed to buy one unit of base.', category: 'Forex' },
    { id: 'major-pairs', term: 'Major Pairs', definition: 'Most traded currency pairs involving USD (EUR/USD, GBP/USD, USD/JPY, USD/CHF).', category: 'Forex' },
    { id: 'exotic-pairs', term: 'Exotic Pairs', definition: 'Pairings of major currency with emerging market currency (USD/TRY, EUR/ZAR).', category: 'Forex' },
    { id: 'spread', term: 'Spread', definition: 'Difference between bid (buy) and ask (sell) price. The cost of trading.', category: 'Forex' },
    { id: 'long-position', term: 'Long Position', definition: 'Buying an asset expecting its price to rise. You profit when price increases.', category: 'Forex' },
    { id: 'short-position', term: 'Short Position', definition: 'Selling an asset expecting its price to fall. You profit when price decreases.', category: 'Forex' },
    { id: 'rollover', term: 'Rollover', definition: 'Interest paid or earned for holding forex positions overnight. Based on interest rate differential.', category: 'Forex' },
    { id: 'swap', term: 'Swap', definition: 'The interest differential between two currencies in a forex pair, paid or received for overnight positions.', category: 'Forex' },

    // Crypto Terms
    { id: 'altcoin', term: 'Altcoin', definition: 'Any cryptocurrency other than Bitcoin. Examples: Ethereum, Solana, Cardano.', category: 'Crypto' },
    { id: 'wallet', term: 'Wallet', definition: 'Software or hardware that stores your cryptocurrency private keys and allows transactions.', category: 'Crypto' },
    { id: 'hot-wallet', term: 'Hot Wallet', definition: 'Cryptocurrency wallet connected to the internet. Convenient but less secure.', category: 'Crypto' },
    { id: 'cold-wallet', term: 'Cold Wallet', definition: 'Cryptocurrency wallet stored offline (hardware wallet, paper wallet). Most secure option.', category: 'Crypto' },
    { id: 'mining', term: 'Mining', definition: 'Process of validating transactions and adding them to blockchain, earning new coins as reward.', category: 'Crypto' },
    { id: 'staking', term: 'Staking', definition: 'Locking up cryptocurrency to support network operations and earn rewards. Proof of Stake.', category: 'Crypto' },
    { id: 'defi', term: 'DeFi', definition: 'Decentralized Finance—financial services built on blockchain without traditional intermediaries.', category: 'Crypto' },
    { id: 'nft', term: 'NFT', definition: 'Non-Fungible Token. Unique digital asset representing ownership of art, collectibles, etc.', category: 'Crypto' },
    { id: 'smart-contract', term: 'Smart Contract', definition: 'Self-executing contract with terms written in code, running on blockchain automatically.', category: 'Crypto' },
    { id: 'gas-fee', term: 'Gas Fee', definition: 'Transaction fee paid to process operations on blockchain networks like Ethereum.', category: 'Crypto' },
    { id: 'halving', term: 'Halving', definition: 'Event reducing Bitcoin mining rewards by 50%. Occurs every 210,000 blocks (~4 years).', category: 'Crypto' },
    { id: 'token', term: 'Token', definition: 'Digital asset built on existing blockchain (unlike coins with their own blockchain).', category: 'Crypto' },
    { id: 'ico', term: 'ICO', definition: 'Initial Coin Offering. Fundraising method where new crypto projects sell tokens to investors.', category: 'Crypto' },
    { id: 'proof-of-work', term: 'Proof of Work', definition: 'Consensus mechanism requiring computational work to validate transactions (Bitcoin).', category: 'Crypto' },
    { id: 'proof-of-stake', term: 'Proof of Stake', definition: 'Consensus mechanism where validators stake coins as collateral to validate transactions.', category: 'Crypto' },
    { id: 'decentralization', term: 'Decentralization', definition: 'Distribution of control away from a central authority. Core principle of cryptocurrency.', category: 'Crypto' },
    { id: 'private-key', term: 'Private Key', definition: 'Secret code that proves ownership and allows spending of cryptocurrency. Never share.', category: 'Crypto' },
    { id: 'public-key', term: 'Public Key', definition: 'Derived from private key. Used to receive cryptocurrency. Safe to share.', category: 'Crypto' },
    { id: 'seed-phrase', term: 'Seed Phrase', definition: '12-24 words that can recover your entire wallet. Store securely offline.', category: 'Crypto' },

    // Commodities Terms
    { id: 'commodity', term: 'Commodity', definition: 'Raw material or primary product traded on exchanges (gold, oil, wheat, copper).', category: 'Commodities' },
    { id: 'spot-price', term: 'Spot Price', definition: 'Current market price for immediate delivery of a commodity.', category: 'Commodities' },
    { id: 'contango', term: 'Contango', definition: 'Market condition where futures price exceeds spot price. Normal for storable commodities.', category: 'Commodities' },
    { id: 'backwardation', term: 'Backwardation', definition: 'Market condition where spot price exceeds futures price. Suggests immediate supply shortage.', category: 'Commodities' },
    { id: 'hedging', term: 'Hedging', definition: 'Using derivatives to protect against adverse price movements in an existing position.', category: 'Commodities' },
    { id: 'physical-delivery', term: 'Physical Delivery', definition: 'Settlement of futures contract with actual delivery of the underlying commodity.', category: 'Commodities' },
    { id: 'cash-settlement', term: 'Cash Settlement', definition: 'Settlement of futures contract with cash payment instead of physical delivery.', category: 'Commodities' },
    { id: 'cot-report', term: 'COT Report', definition: 'Commitment of Traders report showing positions of commercials vs speculators. Published weekly.', category: 'Commodities' },

    // Options Terms
    { id: 'call-option', term: 'Call Option', definition: 'Contract giving the right (not obligation) to BUY an asset at a set price by expiration.', category: 'Options' },
    { id: 'put-option', term: 'Put Option', definition: 'Contract giving the right (not obligation) to SELL an asset at a set price by expiration.', category: 'Options' },
    { id: 'strike-price', term: 'Strike Price', definition: 'The predetermined price at which an option can be exercised.', category: 'Options' },
    { id: 'premium', term: 'Premium', definition: 'The price paid for an option contract. The maximum loss for option buyers.', category: 'Options' },
    { id: 'expiration', term: 'Expiration', definition: 'The date an option contract expires and becomes worthless if not exercised.', category: 'Options' },
    { id: 'implied-volatility', term: 'Implied Volatility', definition: 'Market expectation of future volatility, derived from option prices. Higher IV = higher premiums.', category: 'Options' },
    { id: 'greeks', term: 'Greeks', definition: 'Measures of option price sensitivity: Delta, Gamma, Theta, Vega, Rho.', category: 'Options' },
    { id: 'delta', term: 'Delta', definition: 'Measures option price change relative to $1 move in underlying. Also probability of expiring ITM.', category: 'Options' },
    { id: 'theta', term: 'Theta', definition: 'Time decay—how much option value decreases as expiration approaches. Negative for buyers.', category: 'Options' },
    { id: 'gamma', term: 'Gamma', definition: 'Rate of change of delta. Highest for ATM options near expiration.', category: 'Options' },
    { id: 'vega', term: 'Vega', definition: 'Option price sensitivity to 1% change in implied volatility.', category: 'Options' },
    { id: 'covered-call', term: 'Covered Call', definition: 'Selling call options on stock you own. Income strategy that caps upside.', category: 'Options' },
    { id: 'protective-put', term: 'Protective Put', definition: 'Buying put options on stock you own. Insurance against downside.', category: 'Options' },
    { id: 'straddle', term: 'Straddle', definition: 'Buying both call and put at same strike. Profits from big moves in either direction.', category: 'Options' },
    { id: 'strangle', term: 'Strangle', definition: 'Buying OTM call and put. Cheaper than straddle but needs bigger move.', category: 'Options' },

    // Portfolio Terms
    { id: 'alpha', term: 'Alpha', definition: 'Return above benchmark. Positive alpha = outperformance. The goal of active management.', category: 'Portfolio' },
    { id: 'benchmark', term: 'Benchmark', definition: 'Standard for measuring investment performance (e.g., S&P 500 for US stocks).', category: 'Portfolio' },

    // Bond Terms
    { id: 'treasury-bills', term: 'Treasury Bills', definition: 'Short-term government debt (under 1 year). Safest investment. T-Bills.', category: 'Bonds' },
    { id: 'corporate-bonds', term: 'Corporate Bonds', definition: 'Debt issued by companies. Higher yield than treasuries but more risk.', category: 'Bonds' },
    { id: 'junk-bonds', term: 'Junk Bonds', definition: 'High-yield bonds rated below investment grade (BB+ or lower). High risk, high reward.', category: 'Bonds' },
    { id: 'par-value', term: 'Par Value', definition: 'Face value of a bond, typically $1,000. The amount repaid at maturity.', category: 'Bonds' },
    { id: 'default', term: 'Default', definition: 'Failure to make required interest or principal payments on debt. Bankruptcy risk.', category: 'Bonds' },
    { id: 'investment-grade', term: 'Investment Grade', definition: 'Bonds rated BBB- or higher by rating agencies. Lower risk of default.', category: 'Bonds' },

    // Behavioral Terms
    { id: 'fud', term: 'FUD', definition: 'Fear, Uncertainty, and Doubt. Negative sentiment often spread deliberately to drive prices down.', category: 'Behavioral' },
    { id: 'revenge-trading', term: 'Revenge Trading', definition: 'Trading impulsively to recover losses. Usually leads to bigger losses.', category: 'Behavioral' },
    { id: 'overtrading', term: 'Overtrading', definition: 'Trading too frequently, often from boredom or overconfidence. Generates unnecessary costs.', category: 'Behavioral' },
    { id: 'anchoring', term: 'Anchoring', definition: 'Fixating on a reference point (e.g., purchase price) when making decisions.', category: 'Behavioral' },
    { id: 'sunk-cost-fallacy', term: 'Sunk Cost Fallacy', definition: 'Continuing to hold losers because of money already invested. "I can\'t sell at a loss."', category: 'Behavioral' },

    // Stock Terms
    { id: 'earnings', term: 'Earnings', definition: 'Company profits. Net income after all expenses. Drives stock valuations.', category: 'Stocks' },
    { id: 'earnings-report', term: 'Earnings Report', definition: 'Quarterly disclosure of company financial results. Major market-moving event.', category: 'Stocks' },
    { id: 'earnings-season', term: 'Earnings Season', definition: 'Periods when most companies report quarterly earnings. Increased volatility.', category: 'Stocks' },
    { id: 'guidance', term: 'Guidance', definition: 'Company forecasts for future performance. Often impacts stock more than actual results.', category: 'Stocks' },
    { id: 'stock-split', term: 'Stock Split', definition: 'Dividing shares to lower price per share. 2:1 split doubles shares, halves price.', category: 'Stocks' },
    { id: 'buyback', term: 'Buyback', definition: 'Company repurchasing its own shares. Reduces shares outstanding, increases EPS.', category: 'Stocks' },
    { id: 'dilution', term: 'Dilution', definition: 'Reduction in existing ownership percentage when new shares are issued.', category: 'Stocks' },
    { id: 'penny-stock', term: 'Penny Stock', definition: 'Stocks trading under $5, often on OTC markets. Extremely speculative.', category: 'Stocks' },
    { id: 'growth-stock', term: 'Growth Stock', definition: 'Companies expected to grow faster than market. Often high P/E, low dividends.', category: 'Stocks' },
    { id: 'value-stock', term: 'Value Stock', definition: 'Companies trading below intrinsic value. Often low P/E, higher dividends.', category: 'Stocks' },
    { id: 'dividend-yield', term: 'Dividend Yield', definition: 'Annual dividend divided by stock price. Shows income return on investment.', category: 'Stocks' },
    { id: 'payout-ratio', term: 'Payout Ratio', definition: 'Percentage of earnings paid as dividends. Lower ratio = more sustainable dividend.', category: 'Stocks' },
    { id: 'float', term: 'Float', definition: 'Shares available for public trading (excluding insider holdings, restricted shares).', category: 'Stocks' },
    { id: 'shares-outstanding', term: 'Shares Outstanding', definition: 'Total number of shares issued by company, including insider shares.', category: 'Stocks' },

    // Risk Terms
    { id: 'risk-management', term: 'Risk Management', definition: 'Identifying, assessing, and prioritizing risks to minimize negative impact on capital.', category: 'Risk' },
    { id: 'drawdown', term: 'Drawdown', definition: 'Peak-to-trough decline in account value. Maximum drawdown = worst historical decline.', category: 'Risk' },
    { id: 'kelly-criterion', term: 'Kelly Criterion', definition: 'Formula for optimal bet sizing based on edge and odds. Often used at half-Kelly.', category: 'Risk' },
    { id: 'var', term: 'Value at Risk', definition: 'Statistical measure of maximum expected loss over a period at a confidence level.', category: 'Risk' },

    // Advanced Terms
    { id: 'arbitrage', term: 'Arbitrage', definition: 'Profiting from price differences between markets. Buying low in one, selling high in another.', category: 'Advanced' },
    { id: 'pairs-trading', term: 'Pairs Trading', definition: 'Trading two correlated securities, going long one and short the other.', category: 'Advanced' },
    { id: 'mean-reversion', term: 'Mean Reversion', definition: 'Theory that prices eventually return to their average. Basis for some trading strategies.', category: 'Advanced' },
    { id: 'trend-following', term: 'Trend Following', definition: 'Strategy that attempts to capture gains by riding the momentum of market trends.', category: 'Advanced' },
    { id: 'algo-trading', term: 'Algorithmic Trading', definition: 'Using computer programs to execute trades based on predefined criteria at high speed.', category: 'Advanced' },

    // Additional Money & History Terms
    { id: 'promissory-note', term: 'Promissory Note', definition: 'A written promise to pay a specified sum of money at a specific date or on demand. Historically used by goldsmiths as receipts for deposited gold.', category: 'Money' },
    { id: 'bretton-woods', term: 'Bretton Woods', definition: 'The 1944 international monetary agreement where currencies were pegged to the US Dollar, and the Dollar was pegged to gold at $35/oz.', category: 'Money' },
    { id: 'nixon-shock', term: 'Nixon Shock', definition: 'President Nixon\'s 1971 decision to end the Dollar\'s convertibility to gold, ending the Bretton Woods system and beginning the fiat currency era.', category: 'Money' },
    { id: 'electrum', term: 'Electrum', definition: 'A natural alloy of gold and silver used to make the first standardized coins in ancient Lydia around 600 BC.', category: 'Money' },
    { id: 'flying-cash', term: 'Flying Cash', definition: 'Paper receipts created by Tang Dynasty China around 700 AD that could be exchanged for coins, considered an early form of paper money.', category: 'Money' },
    { id: 'usury', term: 'Usury', definition: 'The practice of lending money at unreasonably high interest rates. Historically considered sinful or illegal in many cultures.', category: 'Money' },
    { id: 'dunbar-number', term: 'Dunbar\'s Number', definition: 'The theoretical cognitive limit (~150 people) to the number of stable social relationships one can maintain, relevant to why gift economies don\'t scale.', category: 'Money' },

    // Inflation & Economy Additional Terms
    { id: 'big-mac-index', term: 'Big Mac Index', definition: 'An informal measure of purchasing power parity between currencies using the price of a McDonald\'s Big Mac as a standardized comparison.', category: 'Economy' },
    { id: 'financial-repression', term: 'Financial Repression', definition: 'Government policies that keep interest rates below inflation, effectively transferring wealth from savers to debtors (including the government).', category: 'Economy' },
    { id: 'oer', term: 'Owner\'s Equivalent Rent', definition: 'A method used in CPI calculation where homeowners estimate what they would pay to rent their home, often understating true housing costs.', category: 'Economy' },
    { id: 'm2-money-supply', term: 'M2 Money Supply', definition: 'A measure of the money supply including cash, checking deposits, savings deposits, and money market securities. Key indicator of monetary inflation.', category: 'Economy' },

    // Interest Rate Terms
    { id: 'risk-free-rate', term: 'Risk-Free Rate', definition: 'The theoretical return on an investment with zero risk, typically represented by US Treasury yields as the benchmark.', category: 'Interest' },
    { id: 'taylor-rule', term: 'Taylor Rule', definition: 'A formula used by central banks to set interest rates based on inflation and economic output gaps.', category: 'Central Banking' },
    { id: 'nirp', term: 'NIRP (Negative Interest Rate Policy)', definition: 'When central banks set interest rates below zero, meaning depositors pay banks to hold their money.', category: 'Central Banking' },
    { id: 'zombie-company', term: 'Zombie Company', definition: 'A company that earns just enough to service its debt but cannot grow or pay down principal, kept alive by low interest rates.', category: 'Economy' },
    { id: 'malinvestment', term: 'Malinvestment', definition: 'Investments in unproductive projects caused by artificially low interest rates distorting price signals.', category: 'Economy' },
    { id: 'volcker-shock', term: 'Volcker Shock', definition: 'Fed Chair Paul Volcker\'s aggressive interest rate hikes (to 20%) in 1980-1982 to break inflation, causing a severe but necessary recession.', category: 'Central Banking' },

    // Valuation Terms
    { id: 'story-stock', term: 'Story Stock', definition: 'A stock that trades on a compelling narrative rather than fundamentals, often with no earnings and high speculation.', category: 'Valuation' },
    { id: 'pricing-power', term: 'Pricing Power', definition: 'A company\'s ability to raise prices without losing customers, indicating strong competitive advantage.', category: 'Valuation' },
    { id: 'terminal-value', term: 'Terminal Value', definition: 'In DCF analysis, the estimated value of a business beyond the explicit forecast period, often the largest component of valuation.', category: 'Valuation' },

    // Risk Terms
    { id: 'concentration-risk', term: 'Concentration Risk', definition: 'The risk of significant losses from having too large a position in a single asset, sector, or geography.', category: 'Risk' },
    { id: 'liquidity-risk', term: 'Liquidity Risk', definition: 'The risk of not being able to sell an asset quickly enough at a fair price when you need to.', category: 'Risk' },
    { id: 'interest-rate-risk', term: 'Interest Rate Risk', definition: 'The risk that changes in interest rates will negatively affect the value of fixed-income investments.', category: 'Risk' },
    { id: 'reinvestment-risk', term: 'Reinvestment Risk', definition: 'The risk that future cash flows will have to be reinvested at a lower rate than the original investment.', category: 'Risk' },

    // Trading Strategy Terms
    { id: 'core-satellite', term: 'Core & Satellite Strategy', definition: 'Portfolio approach using 80-90% in passive index funds (core) and 10-20% in active bets (satellite).', category: 'Strategy' },
    { id: 'factor-investing', term: 'Factor Investing', definition: 'Investment strategy targeting specific drivers of returns like value, momentum, quality, or size factors.', category: 'Strategy' },
    { id: 'contrarian-investing', term: 'Contrarian Investing', definition: 'Strategy of going against prevailing market sentiment, buying when others are fearful and selling when others are greedy.', category: 'Strategy' },
    { id: 'lump-sum-investing', term: 'Lump Sum Investing', definition: 'Investing all available capital at once rather than spreading it over time. Historically outperforms DCA in rising markets.', category: 'Strategy' },

    // Financial Statement Terms
    { id: 'working-capital', term: 'Working Capital', definition: 'Current Assets minus Current Liabilities. Measures a company\'s short-term liquidity and operational efficiency.', category: 'Statements' },
    { id: 'goodwill', term: 'Goodwill', definition: 'An intangible asset representing the premium paid above fair value in an acquisition. Can be written down if overpaid.', category: 'Statements' },
    { id: 'capex', term: 'CapEx (Capital Expenditure)', definition: 'Money spent on acquiring or maintaining physical assets like property, buildings, or equipment.', category: 'Statements' },
    { id: 'depreciation', term: 'Depreciation', definition: 'An accounting method of allocating the cost of a tangible asset over its useful life, reducing taxable income.', category: 'Statements' },
    { id: 'amortization', term: 'Amortization', definition: 'Similar to depreciation but for intangible assets like patents or goodwill, spread over the asset\'s useful life.', category: 'Statements' },
    { id: 'footnotes', term: 'Footnotes', definition: 'Detailed explanations in financial statements that often reveal important information about accounting policies and risks.', category: 'Statements' },
    { id: 'mda', term: 'MD&A (Management Discussion & Analysis)', definition: 'Section of annual report where management discusses financial condition, results, and outlook. Read skeptically.', category: 'Statements' },
    { id: 'auditors-opinion', term: 'Auditor\'s Opinion', definition: 'Independent auditor\'s assessment of financial statements. "Unqualified" is clean; anything else is a red flag.', category: 'Statements' },

    // Market Structure Terms
    { id: 'flash-crash', term: 'Flash Crash', definition: 'A very rapid, deep, and volatile market decline that recovers quickly, often caused by algorithmic trading glitches.', category: 'Stocks' },
    { id: 'accumulation-phase', term: 'Accumulation Phase', definition: 'The market cycle phase where smart money quietly buys after a crash while sentiment is still negative.', category: 'Cycles' },
    { id: 'distribution-phase', term: 'Distribution Phase', definition: 'The market cycle phase where smart money sells to latecomers while asset prices are high and sentiment is euphoric.', category: 'Cycles' },
    { id: 'capitulation', term: 'Capitulation', definition: 'The point in a market decline when remaining investors give up hope and sell, often marking the bottom.', category: 'Cycles' },
    { id: 'dead-cat-bounce', term: 'Dead Cat Bounce', definition: 'A temporary recovery in a declining market, often mistaken for a reversal before prices continue falling.', category: 'Cycles' },
    { id: 'smart-money', term: 'Smart Money', definition: 'Institutional investors, hedge funds, and experienced traders considered to have superior market insight.', category: 'Stocks' },
    { id: 'dumb-money', term: 'Dumb Money', definition: 'Retail investors perceived to make emotional decisions and consistently buy high and sell low. Often unfair characterization.', category: 'Stocks' },

    // Behavioral Finance Terms
    { id: 'steelman', term: 'Steelman', definition: 'Presenting the strongest version of an opposing argument. If you can\'t steelman the bear case, you don\'t understand your investment.', category: 'Behavioral' },
    { id: 'present-bias', term: 'Present Bias', definition: 'The tendency to prefer immediate rewards over future benefits, making saving and investing psychologically difficult.', category: 'Behavioral' },
    { id: 'endowment-effect', term: 'Endowment Effect', definition: 'Overvaluing things simply because you own them, leading to reluctance to sell losing positions.', category: 'Behavioral' },
    { id: 'hindsight-bias', term: 'Hindsight Bias', definition: 'The tendency to believe past events were predictable after they occurred, leading to overconfidence about future predictions.', category: 'Behavioral' },
    { id: 'disposition-effect', term: 'Disposition Effect', definition: 'The tendency to sell winners too early (to lock in gains) and hold losers too long (hoping to break even).', category: 'Behavioral' },

    // Account & Brokerage Terms
    { id: 't2-settlement', term: 'T+2 Settlement', definition: 'Standard settlement period where stock trades officially complete two business days after execution.', category: 'Trading' },
    { id: 'acat', term: 'ACAT (Automated Customer Account Transfer)', definition: 'The standard system for transferring brokerage accounts between firms, typically taking 5-7 business days.', category: 'Trading' },
    { id: 'instant-deposit', term: 'Instant Deposit', definition: 'Feature allowing immediate access to transferred funds (up to a limit) before actual bank transfer completes.', category: 'Trading' },
    { id: 'sec', term: 'SEC (Securities and Exchange Commission)', definition: 'The US federal agency responsible for regulating securities markets and protecting investors from fraud.', category: 'Trading' },
    { id: 'finra', term: 'FINRA (Financial Industry Regulatory Authority)', definition: 'Self-regulatory organization overseeing broker-dealers and registered representatives in the United States.', category: 'Trading' },
    { id: 'accredited-investor', term: 'Accredited Investor', definition: 'SEC designation for individuals meeting income (>$200k) or net worth (>$1M) requirements, allowing access to private investments.', category: 'Trading' },

    // Fund & ETF Terms
    { id: 'adr', term: 'ADR (American Depositary Receipt)', definition: 'A way to own shares of foreign companies traded on US exchanges, representing shares held by a US depositary bank.', category: 'Stocks' },
    { id: 'nav', term: 'NAV (Net Asset Value)', definition: 'The per-share value of a mutual fund or ETF, calculated by dividing total assets minus liabilities by shares outstanding.', category: 'Strategy' },
    { id: 'tracking-error', term: 'Tracking Error', definition: 'The difference between an index fund\'s performance and its benchmark index, ideally close to zero.', category: 'Strategy' },
    { id: 'total-return', term: 'Total Return', definition: 'The complete return on an investment including both price appreciation and any dividends or interest received.', category: 'Strategy' },

    // Tax Terms
    { id: 'unrealized-gains', term: 'Unrealized Gains', definition: 'Paper profits on investments you still hold. Not taxed until you sell (realize) the gains.', category: 'Taxes' },
    { id: 'realized-gains', term: 'Realized Gains', definition: 'Actual profits from selling an investment above your cost basis. Triggers capital gains tax.', category: 'Taxes' },
    { id: 'tax-drag', term: 'Tax Drag', definition: 'The reduction in investment returns caused by annual taxes on dividends and capital gains distributions.', category: 'Taxes' },
    { id: 'in-kind-transfer', term: 'In-Kind Transfer', definition: 'Moving investments between accounts without selling, avoiding taxable events. Common with ETF creation/redemption.', category: 'Taxes' },

    // Crypto Terms
    { id: 'satoshi', term: 'Satoshi', definition: 'The smallest unit of Bitcoin (0.00000001 BTC). Named after Bitcoin\'s anonymous creator, Satoshi Nakamoto.', category: 'Crypto' },
    { id: 'hash-rate', term: 'Hash Rate', definition: 'The computing power used to mine and process cryptocurrency transactions. Higher hash rate = more secure network.', category: 'Crypto' },
    { id: 'rug-pull', term: 'Rug Pull', definition: 'A crypto scam where developers abandon a project and run away with investor funds.', category: 'Crypto' },
    { id: 'layer-1', term: 'Layer 1', definition: 'The base blockchain network (Bitcoin, Ethereum) on which other applications and Layer 2 solutions are built.', category: 'Crypto' },
    { id: 'layer-2', term: 'Layer 2', definition: 'Secondary frameworks built on top of Layer 1 blockchains to improve scalability and reduce transaction costs.', category: 'Crypto' },

    // Commodities Terms
    { id: 'opec', term: 'OPEC', definition: 'Organization of Petroleum Exporting Countries. Cartel of oil-producing nations that coordinates production to influence prices.', category: 'Commodities' },
    { id: 'precious-metals', term: 'Precious Metals', definition: 'Rare metallic elements with high economic value: gold, silver, platinum, and palladium. Often used as stores of value.', category: 'Commodities' },
    { id: 'industrial-metals', term: 'Industrial Metals', definition: 'Metals used in manufacturing and construction: copper, aluminum, steel. Prices reflect economic activity.', category: 'Commodities' },

    // Portfolio Terms
    { id: 'glide-path', term: 'Glide Path', definition: 'The gradual shift from stocks to bonds as retirement approaches, implemented automatically in target-date funds.', category: 'Portfolio' },
    { id: 'asset-class', term: 'Asset Class', definition: 'A grouping of investments with similar characteristics and behavior: stocks, bonds, real estate, commodities, cash.', category: 'Portfolio' },
    { id: 'risk-adjusted-return', term: 'Risk-Adjusted Return', definition: 'Investment return accounting for the risk taken to achieve it. Higher is better at the same risk level.', category: 'Portfolio' },
];

const Glossary: React.FC = () => {
    const { t, i18n } = useTranslation();
    const location = useLocation();
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const termRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

    // Get glossary terms for the current language
    const localizedGlossaryTerms = useMemo(() => {
        return getGlossaryTermsForLanguage(i18n.language);
    }, [i18n.language]);

    // Get unique categories from localized terms
    const categories = Array.from(new Set(localizedGlossaryTerms.map(term => term.category)));

    // Filter terms based on search and category
    const filteredTerms = localizedGlossaryTerms.filter(term => {
        const matchesSearch = term.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
            term.definition.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = !selectedCategory || term.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    // Scroll to term if hash is present
    useEffect(() => {
        const hash = location.hash.replace('#', '');
        if (hash && termRefs.current[hash]) {
            setTimeout(() => {
                termRefs.current[hash]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                // Highlight the term briefly
                termRefs.current[hash]?.classList.add('ring-2', 'ring-purple-500');
                setTimeout(() => {
                    termRefs.current[hash]?.classList.remove('ring-2', 'ring-purple-500');
                }, 2000);
            }, 300);
        }
    }, [location.hash]);

    return (
        <div className="min-h-screen pb-20" style={{ background: 'var(--bg-primary)' }}>
            <div className="p-4 space-y-4">
                {/* Back Button */}
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-2 text-sm opacity-70 hover:opacity-100 transition-opacity"
                    style={{ color: 'var(--text-primary)' }}
                >
                    <ChevronRight className="w-4 h-4 rotate-180" />
                    {t('back')}
                </button>

                {/* Header */}
                <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl p-6 border border-purple-500/30">
                    <div className="flex items-center gap-3 mb-2">
                        <BookOpen className="w-8 h-8 text-purple-400" />
                        <h1 className="text-2xl font-black" style={{ color: 'var(--text-primary)' }}>
                            {t('glossary_title', 'Investment Glossary')}
                        </h1>
                    </div>
                    <p className="text-sm opacity-70" style={{ color: 'var(--text-primary)' }}>
                        {t('glossary_desc', 'All the investment terms you need to know')}
                    </p>
                </div>

                {/* Search */}
                <div className="relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 opacity-50" style={{ color: 'var(--text-primary)' }} />
                    <input
                        type="text"
                        placeholder={t('search_terms', 'Search terms...')}
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-700/50 bg-slate-800/50 focus:border-purple-500/50 focus:outline-none transition-colors"
                        style={{ color: 'var(--text-primary)' }}
                    />
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap gap-2">
                    <button
                        onClick={() => setSelectedCategory(null)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${!selectedCategory
                            ? 'bg-purple-500 text-white'
                            : 'bg-slate-800/50 border border-slate-700/50'
                            }`}
                        style={{ color: selectedCategory ? 'var(--text-primary)' : undefined }}
                    >
                        {t('all', 'All')}
                    </button>
                    {categories.map(category => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${selectedCategory === category
                                ? 'bg-purple-500 text-white'
                                : 'bg-slate-800/50 border border-slate-700/50'
                                }`}
                            style={{ color: selectedCategory === category ? undefined : 'var(--text-primary)' }}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Terms List */}
                <div className="space-y-3">
                    {filteredTerms.map((term, index) => (
                        <motion.div
                            key={term.id}
                            ref={el => { termRefs.current[term.id] = el; }}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.02 }}
                            className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl p-4 border border-slate-700/50 transition-all duration-300"
                        >
                            <div className="flex items-start justify-between gap-2 mb-2">
                                <h3 className="font-bold text-purple-400">{term.term}</h3>
                                <span className="text-xs px-2 py-0.5 rounded-full bg-slate-700/50 opacity-70" style={{ color: 'var(--text-primary)' }}>
                                    {term.category}
                                </span>
                            </div>
                            <p className="text-sm opacity-80 leading-relaxed" style={{ color: 'var(--text-primary)' }}>
                                {term.definition}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {filteredTerms.length === 0 && (
                    <div className="text-center py-8 opacity-50" style={{ color: 'var(--text-primary)' }}>
                        {t('no_terms_found', 'No terms found')}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Glossary;
