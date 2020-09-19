export default {
  cdp_page: {
    liquidation_price: 'Liquidation price',
    // "liquidation_ratio": "Liquidation ratio",
    collateralization_ratio: 'Collateralization ratio',
    // "current_price_information": "Current price information",
    liquidation_penalty: 'Liquidation penalty',
    minimum_ratio: 'Minimum ratio',
    stability_fee: 'Stability fee',
    current_price_info: 'Current price information',
    position: 'position',
    // "collateral": "collateral",
    locked: 'Locked',
    // "required_for_safety": "Required for safety",
    able_withdraw: 'Able to withdraw',
    available_generate: 'Available to generate',
    // "outstanding_debt": "Outstanding debt",
    // "wallet_balance": "wallet balance",
    tx_history: 'Vault history',
    outstanding_dai_debt: 'Outstanding USDL debt',
    not_applicable: 'N/A'
  },
  landing_page: {
    meta: {
      title: 'Freeliquid.io',
      description:
        'Borrow and Save using USDL. Place orders on the marketplace using Trade, generate USDL, a stablecoin pegged to 1 USD, on Borrow and earn savings on your USDL using Save. All on Freeliquid.io.'
    },
    title:'Freeliquid',
    usdl_title:'USDL - as long as your own liquidity is provided for you passive earnings',
    usdl_desc:'Use up to 90% of your pools funds',
    block1_text:'Freeliquid makes it easy to create a stablecoin for free by collateralizing pools with DAI, USDT, USDC, USDN',
    block1_text2:'USDL is a fully decentralized, censorship-resistant stablecoin available to any liquidity provider',
    block3_title:'Derivative giving even greater financial freedom',
    block3_text:'A price-stable currency that you control. Get USDL instantly on your terms.',
    block4_title:'Decentralized governance',
    block4_text:'The work with USDL is provided by smart contracts. It is run by a decentralized community of FL token holders.',
    block5_title:'Community',
    block5_text:'Learn more about Freeliquid, connect with the team and other community members, and share your perspective on the future of DeFi.',
    headline: 'Borrow and save using USDL',
    trade_card: {
      title: 'Trade',
      description:
        'Place orders in the Marketplace, exchange your tokens, or Multiply your assets, quickly.',
      button: 'Start Trading'
    },
    borrow_card: {
      title: 'Borrow',
      description:
        'Lock your tokens as collateral to generate USDL, a decentralized stablecoin soft-pegged to 1 USD.',
      button: 'Borrow USDL'
    },
    save_card: {
      title: 'Save',
      description:
        'Earn savings on your USDL by locking it into Freeliquid Save. Automatic and non-custodial.',
      button: 'Save USDL'
    },
    token_section_title: 'Supported Tokens',
    token_section_only_on_trade: 'Only available on Freeliquid Trade',
    section1_title: 'What is Freeliquid?',
    section1_p:
      'Freeliquid is a platform for decentralized finance. Use it to exchange tokens, borrow USDL and earn savings — all in one place.',
    section2_title: 'Secure protocol built on Ethereum',
    section2_p:
      'Freeliquid is built on top of audited and formally verified smart contracts created by Maker, the industry leader in secure decentralized finance.',
    section3_title: 'Completely permissionless',
    section3_p:
      'You—and only you—control your assets. Freeliquid is a decentralized, non-custodial platform, accessible using an Ethereum-supported wallet.',
    questions_title: 'Questions',
    question1: 'What is Freeliquid?',
    answer1:
      'Freeliquid is a decentralized application that runs on the Ethereum blockchain. Anyone can use Freeliquid to trade tokens, borrow against them, and earn savings using USDL.',
    question2: 'What is USDL?',
    answer2:
      'USDL is the world’s first unbiased currency and leading decentralized stablecoin soft-pegged to the US Dollar. Learn more about USDL {0}.',
    answer2_link1_url: 'https://makerdao.com/en/',
    answer2_link1_text: 'here',
    question3: 'Do I need an account?',
    answer3:
      'You do not need an account to use Freeliquid. However, you will need an Ethereum wallet. Freeliquid supports most Ethereum browser wallets such as {0}, {1}, etc.',
    answer3_link1_url: 'https://metamask.io/',
    answer3_link1_text: 'Metamask',
    answer3_link2_url: 'https://wallet.coinbase.com/',
    answer3_link2_text: 'Coinbase Wallet',
    question4: 'Is Freeliquid secure?',
    answer4:
      'Security is our top priority. The Freeliquid team regularly conducts audits on our smart contracts. In addition, the Freeliquid code is {0}, giving the community the ability to pressure test and audit the core technology.',
    answer4_link1_url: 'https://github.com/FreeliquidDEX',
    answer4_link1_text: 'open-source',
    question5: 'Will I be charged a fee to use Freeliquid?',
    answer5:
      'Freeliquid is free to use. However, you will have to pay gas and other fees associated with the Maker Protocol, such as Stability Fees.',
    question6: 'How can I contact the Freeliquid team?',
    answer6: 'You can reach the Freeliquid team by contacting us on {0}.',
    answer6_link1_url: 'https://chat.makerdao.com',
    answer6_link1_text: 'chat',
    question7:
      'Can I buy Bitcoin or Ethereum on Freeliquid using a credit card or via my bank account?',
    answer7:
      'You cannot buy crypto from your bank account using Freeliquid. Instead, you can use USDL to buy Ethereum and other supported tokens.',
    read_only: 'Read-Only',
    wallet_connect: 'Wallet Connect',
    wallet_link: 'Coinbase Wallet'
  },
  borrow_landing: {
    meta: {
      title: 'Freeliquid Borrow',
      description:
        "Lock your liquidity pools as collateral to generate USDL, a decentralized stablecoin soft-pegged to 1 USD."
    },
    page_name: 'Freeliquid Borrow',
    headline: 'Extra assets for work',
    subheadline:
      "Vaults make it easy to utilize your collateral by generating USDL against it. Realize liquidity through a vault and ensure you don't lose long exposure to your collateral.",
    connect_to_start: 'To open or manage a Vault, connect a crypto wallet.',
    wbtc_notice: 'Bitcoin can now be used to open a Vault and generate USDL.',
    quotes_block: {
      title: 'Maximize your opportunity',
      body:
        'Seize opportunity and capitalize on future crypto asset prices. Use your generated USDL to create a multiplied position on any asset, increasing your exposure.',
      quote1:
        'Back in Sep 2018, I was looking for a place to maximize my ETH holdings. Selling was not an option, so opening a Vault was perfect for me. After locking up my ETH I was going leverage long in two transactions.',
      author1: 'Vault 2434'
    },
    calc_heading: 'How much can I borrow?',
    calc_subheading:
      'To see how much liquidity you can get right now, enter your desired collateral type',
    calc_dai_available:
      'UP TO {amount} USDL is available for you to generate right now',
    calc_footnote:
      'The above figure assumes a Collateralization Ratio of 110%',
    feature1_heading: 'Flexible repayment and terms',
    feature1_content:
      'Vaults are open-ended, meaning no fixed repayment schedules. Pay back or generate USDL when it suits you.',
    feature2_heading: 'Secure and easy to use',
    feature2_content:
      'A simple interface that allows you to manage your Vault. No middleman or third party controls your funds.',
    feature3_heading: 'Many possibilities',
    feature3_content:
      'Manage a diverse range of Vaults from a single page. Easily track the important information you need to know.',
    feature4_heading: 'No more limits',
    feature4_content:
      'You no longer have to miss out on market opportunities or sell your crypto when you need cash.',
    markets_link: 'View full list of tokens',
    questions: {
      question1: 'What assets can I use as collateral?',
      answer1:
        'Currently, Freeliquid Borrow supports Uniswap and Mooniswap pools: USDT/USDC, USDT/USDN, USDT/DAI, USDC/USDN, USDC/DAI, USDN/DAI. There are plans for more types of collateral.',
      question2: 'How much does it cost?',
      answer2:
        'The costs of generating USDL against collateral varies depending on the collateral, and the risk profile. There are also other fees associated with the Freeliquid Protocol, including a Liquidation Penalty added in the event of a liquidation and each the user will have to pay Gas Fees with each transaction submitted.',
      question3:
        "What if I don't have a supported collateral, how can I get USDL?",
      answer3:
        "If you don't have any of the supported collateral types, then you cannot use Freeliquid Borrow to generate USDL. You can still get USDL, but you would need to use an exchange to trade your collateral for USDL. You can check Freeliquid Trade which supports more collateral types.",
      question5: 'Do the rates and fees change, and if so how often?',
      answer5:
        "Yes, the fees, including Stability Fees and Liquidation Penalties are set by Maker Governance. These can be changed at any time due to continuous governance nature of the Maker Protocol. You can see more about Governance of the Maker Protocol at vote.makerdao.com. For Gas Fee's, these are determined by the activity on the Ethereum Network. In most cases, you have the option to set your Gas Fee, but if the network is busy, you will have to pay more for your transactions to go through in a timely manner.",
      bottom_link1: 'Full list of Freeliquid Vault FAQs',
      bottom_link2: 'Glossary of terms'
    }
  },
  borrow_wbtc_landing: {
    headline: 'How to use Bitcoin to generate USDL',
    subheadline:
      'Bitcoin can now be used to open a vault and generate USDL through wBTC, a bridge that brings bitcoin to the ethereum blockchain.',
    about_title: 'About WBTC',
    about_content:
      "Wrapped Bitcoin (wBTC) acts a bridge to bring BTC to the ethereum blockchain. It's the first ERC20 token backed 1:1 with Bitcoin.",
    about_learn_more: 'Learn more at {link}',
    step1: 'Signup to CoinList',
    step1_details: 'Navigate to {link} and create an account',
    step2: 'Complete KYC on CoinList',
    step2_details:
      'Enter the required information and have your wallet with BTC on it ready',
    step3: 'Wrap your BTC into WBTC',
    step3_details:
      "Using CoinList's feature, wrap your BTC, turning it into wBTC on the ethereum network",
    step4: 'Send your WBTC to a compatible wallet',
    step4_details:
      'Send your wBTC to Metamask, Ledger, Trezor, or a compatible ERC20 wallet',
    step5: 'Create a WBTC Vault to Generate USDL',
    step5_details:
      'Navigate to {link} and open your vault with wBTC as collateral and generate your new USDL',
    step5_link_text: 'Freeliquid.io/borrow'
  },
  borrow_markets: {
    meta: {
      title: 'Freeliquid Borrow - Markets'
    },
    heading: 'Borrow Markets',
    subheading:
      'The parameters and rates shown are subject to change at any time, even after a Vault has been opened. Keep an eye out for system updates and manage your Vault accordingly.',
    min_col_ratio: 'Min collateral ratio'
  },
  save_landing: {
    meta: {
      title: 'Freeliquid Save',
      description:
        'The most trusted way to earn on your USDL. Anyone with an internet connection can deposit USDL, and earn savings instantly. No fees. No minimums. No speculation.'
    },
    page_name: 'Freeliquid Save',
    headline: 'The most trusted way to earn on your USDL',
    subheadline:
      'Earn savings on your USDL by locking it into Freeliquid Save. Automatic and non-custodial.',
    connect_to_start:
      'To open or manage your savings, connect a crypto wallet.',
    quotes_block: {
      title: 'Earn a USDL Savings Rate',
      body:
        'Freeliquid Save helps you stay patient while waiting out volatile market conditions, allowing you to confidently capture steady, predictable earnings.',
      quote1:
        'When there was too much risk and volatility in the markets I decided to trade for USDL and deposit it in Freeliquid Save. It gave me peace of mind because I knew what my return would be, no more sleepless nights worrying about flash crashes',
      author1: 'Freeliquid Save User'
    },
    calc_heading: 'How much can I earn?',
    calc_subheading:
      'To see how much savings you could earn at the current USDL Savings Rate simply input how much USDL you would like to deposit and select your desired time.',
    calc_initial: 'Initial deposit',
    calc_contribution: 'Monthly contribution',
    calc_how_long: 'How long would you like to save for?',
    calc_savings_earned: 'Amount of savings earned on your USDL',
    calc_total_dai: 'Total USD you will have',
    calc_footnote:
      'The above figure assumes an average USD Savings Rate of {dsr}%',
    feature1_heading: 'A smarter, better money',
    feature1_content:
      'Manage your savings from anywhere, at anytime. Freeliquid is a decentralized application meaning that you are the only person that controls it.',
    feature2_heading: 'Less volatility, no uncertainty',
    feature2_content:
      'USDL is designed to be stable, just like cash. Stay in the crypto ecosystem without the volatility.',
    feature3_heading: 'Honest and transparent rate',
    feature3_content:
      'The USDL Savings Rate is governed by FL holders and is set based on the supply and demand of USDL on exchanges.',
    feature4_heading: 'Secure from the ground up',
    feature4_content:
      'Freeliquid regularly undergoes security audits and checks. Built by the developers of the MakerDAO protocol.',
    questions: {
      question1: 'How is the USDL Savings Rate determined?',
      answer1:
        'The USDL Savings Rate is determined through governance of the Maker Protocol by FL token holders. The rate which is chosen based on a number of parameters including, but not limited to the current supply and demand of USDL, and the current stability fees charged on Vaults.',
      question2: 'Where does the earned USDL come from?',
      answer2:
        'The earnings you receive from the USDL Savings Rate come directly from the Maker Protocol. Your USDL is never leant out, instead USDL is taken from the Maker Protocol where it charges fees for generating USDL from Vaults (known as Stability Fees).',
      question3: 'How much does it cost to use the USDL Savings Rate?',
      answer3:
        "There are no fees to pay for using the USDL Savings Rate other than the transaction, or Gas, fee's for using the Ethereum Network. The actual costs of these transaction fees varies depending on how busy the network is.",
      question4: 'Can anyone else withdraw my USDL after I deposited it?',
      answer4:
        "No. Providing you don't share your wallet or private key with anyone else, only you are able to control and access the USDL deposited into Freeliquid Save. For this reason, it is also very important to backup your wallet, as there is no way to return your USDL if you lose access to your wallet.",
      question5: 'What are the risks involved?',
      answer5:
        'As with all forms of digital, online technology, there is a risk of bugs and errors with the code. The Maker Protocol smart contracts, which run the USDL Savings Rate, have been through thorough testing, and multiple third party audits to address these risks. The biggest risk is often down to you and how you control your wallet - you should ensure you never share your private key or seed phrase with anyone else, and always make sure you keep a secure backup in case you need to restore your wallet in the future.',
      bottom_link1: 'Full list of Freeliquid Save FAQs'
    }
  },
  trade_landing: {
    meta: {
      title: 'Freeliquid Trade',
      description:
        'Peer to peer, decentralised crypto trading. Freeliquid Trade allows you to create orders where you set the Price. Using either Limit Orders or Average Price Fill or Kill, you set the price so you know you won’t pay more than you expect.'
    },
    page_name: 'Freeliquid Trade',
    headline: 'Peer to peer crypto trading',
    subheadline:
      'Freeliquid Trade is a decentralized, zero-fee token exchange with limit order support and quick token swap.',
    cta_button: 'Open Freeliquid Trade',
    quotes_block: {
      title: 'Place orders at the price you set',
      body:
        'Freeliquid Trade allows you to create orders where you set the Price. Using either Limit Orders or Average Price Fill or Kill, you set the price and slippage limit so you know you won’t pay more than you expect.',
      quote1:
        "When I am looking to make trades, I always come back to Freeliquid because I know it's where I can get the best price. Not to mention not having to deal with all the hassles of the legacy financial system., wiring funds back and forth from place to place.",
      author1: 'Freeliquid Trade User '
    },
    feature1_heading: 'Liquidity and decentralization',
    feature1_content:
      'Get the price you want with low slippage. Anyone with a supported ethereum wallet can trade.',
    feature2_heading: 'Increase exposure with Multiply',
    feature2_content:
      'A simple interface that allows you to open and manage your Multiplied Position with direct access to the Freeliquid Market.',
    feature3_heading: 'Quickly swap tokens',
    feature3_content:
      'Freeliquid Trade permits you to get in and out of positions quickly, for a price you select and you only pay Gas Fees.',
    feature4_heading: 'Non-custodial',
    feature4_content:
      'Freeliquid never touches or handles your tokens as all trades are settled within the contract. You are always in control of your funds.',
    questions: {
      question1: 'Do I have to pay any fees for using Freeliquid Trade?',
      answer1:
        "The only fee's that apply to Freeliquid Trade are fees for Gas. These are the fees you pay to use and interact with the Ethereum Blockchain. These fee's vary based on how busy the Ethereum network is, and how quickly you would like transaction to be processed.",
      question2: 'Can I buy cryptocurrency with my debit or credit card?',
      answer2:
        'Freeliquid Trade only allows you to trade selected Ethereum tokens, such as USDL, ETH, USDC and more. There is no way to buy crypto using a debit or credit card using Freeliquid Trade.',
      question3: 'What is the difference between Market and Instant trades?',
      answer3:
        "With Market, when you create an order you are placing an order in the order book. In order for your order to be matched, you need another user to 'Take' your order by either buying or selling at a price that includes your open order. Instant allows you to quickly trade one token for another at the best price available on the order book. This means you can see the price you will pay for the token and once your transaction confirms, you will get the token (the price may move slightly due to slippage).",
      question4:
        'What is slippage and is there a limit to how much the price can change?',
      answer4:
        "Slippage is where the price you think you are getting changes between the point you place your order and the time the transaction is processed. For example, you place an order to buy 1 ETH for 200 USDL, but by the time the transaction has confirmed, the price is now 202 USDL per ETH. This means you would get 0.99 ETH for 200 USDL instead. Within Freeliquid Trade you can set your slippage limit by a percentage, which means once your order is being matched, if it can't meet the price +/- slippage limit, then the order will automatically cancel. ",
      question5:
        'Does Freeliquid or anyone at Freeliquid have any access to my crypto or my wallet?',
      answer5:
        'No, Freeliquid Trade is a fully non-custodial, decentralised exchange. This means that you are in full control of your funds at all times, and only you can place orders or move your funds around. All orders are placed and settled directly in the smart contract, and everything is fully audit-able on-chain at all times.',
      bottom_link1: 'Full list of Freeliquid Trade FAQs'
    }
  },
  overview_page: {
    title: 'Overview',
    your_cdps: 'Your Vaults',
    token: 'TOKEN',
    id: 'VAULT ID',
    ratio: 'CURRENT RATIO',
    ratio_mobile: 'Ratio',
    deposited: 'DEPOSITED',
    withdraw: 'AVAIL. TO WITHDRAW',
    debt: 'USDL',
    view_cdp: 'Manage Vault',
    view_cdp_mobile: 'Manage',
    total_collateral_locked: 'total collateral locked',
    total_dai_debt: 'total USDL debt',
    get_started_title: 'Open your first Vault to start generating USDL.',
    select_another_wallet: 'Select another wallet',
    connect_ledgers_choice: 'Connect {0} or {1}',
    no_vaults: 'Address {0} has no Vaults.',
    vault_unavailable: 'Sorry, this vault is unavailable',
    loading_vaults: 'Loading Vaults...'
  },
  navbar: {
    save: 'Save',
    borrow: 'Borrow',
    governance: 'Governance',
    privacy: 'Privacy',
    terms: 'Terms',
    blog: 'Blog'
  },
  sidebar: {
    wallet_balances: 'Wallet Pools Balances',
    // "read_only_mode": "Read-Only Mode",
    price_feeds: 'Price Feeds',
    system_info: 'System Info',
    active_cdps: 'ACTIVE VAULTS',
    active_cdps_figure: '{0} Vaults',
    global_debt_ceiling: 'GLOBAL DEBT CEILING',
    current_debt: 'CURRENT DEBT',
    base_rate: 'BASE RATE',
    // "number_of_liquidations": "NUMBER OF LIQUIDATIONS",
    buy_and_burn_lot_size: 'BUY & BURN LOT SIZE',
    inflate_and_sell_lot_size: 'INFLATE & SELL LOT SIZE',
    system_collateralization: 'COLLATERALIZATION',
    view_price_feeds: 'View price feeds',
    view_mkr_tools: 'View fl.tools',
    view_more: 'View more',
    view_less: 'View less',
    asset: 'PAIR',
    balance: 'Total Value',
    usd: 'USDT',
    send: 'SEND',
    migrate: 'UPGRADE',
    no_wallet: 'Not connected',
    save_details: {
      title: 'Save Details',
      total_savings_dai: 'Total USDL in DSR',
      total_dai_supply: 'Total USDL Supply',
      dai_savings_rate: 'USDL Savings Rate'
    }
  },
  cdp_create: {
    screen_titles: {
      select_collateral: 'Select Collateral',
      vault_management: 'Vault Management',
      generate_dai: 'Generate USDL',
      confirmation: 'Confirmation'
    },
    set_allowance: 'Set Allowance',
    seconds_wait_time: 'seconds',
    minutes_wait_time_singular: 'minute',
    minutes_wait_time_plural: 'minutes',
    tx_hash: 'Transaction hash',
    view_tx_details: 'View transaction details',
    select_title: 'Select a collateral type',
    select_text:
      'Each collateral type has its own risk parameters. You can lock up additional collateral types later.',

    setup_proxy_title: 'Vault Setup and Management',
    setup_proxy_proxy_text:
      'Configure your Vault for easy management. This only has to be done once.',
    setup_proxy_allowance_text:
      'This permission allows Freeliquid to interact with your {0}. This has to be done once for each new collateral type.',
    setup_proxy_proxy_button: 'Setup',
    setup_proxy_allowance_button: 'Set',
    setup_vault: 'Setup Vault',
    max_dai_available_to_generate: 'Max USDL available to Generate',

    deposit_title: 'Deposit {0} and Generate USDL',
    deposit_text:
      'Different collateral types have different risk parameters and collateralization ratios.',
    // "deposit_sidebar_title": "{0} Risk Parameters",
    deposit_form_field1_title:
      'How much {0} would you like to lock in your Vault?',
    deposit_form_field1_text:
      'The amount of {0} you lock up determines how much USDL you can generate.',
    // "deposit_form_field2_title": "What target collateralization ratio would you like to stay above?",
    // "deposit_form_field2_text": "If your Vault drops below this target it will be considered {0} risk.",
    // "deposit_form_field2_after": "Suggested:",
    deposit_form_field3_title: 'How much USDL would you like to generate?',
    deposit_form_field3_text:
      'Generate an amount that is safely above the liquidation ratio.',
    // "deposit_form_field3_after1": "Max at target ratio",
    deposit_form_field3_after2: 'Max avail to generate',

    confirm_title: 'Confirm Vault Details',
    confirmed_title: 'Your Vault is being created',
    confirmed_text:
      'The estimated time is {0}. You can safely leave this page.',
    post_confirmed_title: 'Your Vault has been created',
    post_confirmed_text: 'You can safely leave this page.',
    insufficient_ilk_balance: 'Insufficient {0} balance',
    has_understood_stability_fee:
      'I understand the Stability Fee is not fixed and is likely to change over time',
    collateralization_warning:
      'The amount of USDL you are generating is putting your Vault at risk of liquidation',
    draw_too_much_dai: 'Vault below liquidation threshold',
    below_dust_limit: 'A Vault requires a minimum of {0} USDL to be generated',
    dust_max_payback:
      'You can repay all your outstanding debt, or a maximum of {0} USDL',
    dust_payback_below_limit:
      'Due to your Vault being below the minimum, you must repay all of your outstanding debt',
    stability_fee_description:
      'The fee calculated based on the outstanding debt of your Vault. This is continuously added to your existing debt.',
    liquidation_ratio_description:
      'The collateral-to-USDL ratio at which the Vault becomes vulnerable to liquidation.',
    liquidation_penalty_description:
      'This is the additional fee that you will pay on top of your debt when your position is liquidated. There could also be other costs involved depending on the price your collateral is sold.',
    waiting_for_comfirmations: 'Waiting for confirmations... {0} of {1}',
    confirmed_with_confirmations: 'Confirmed with {0} confirmations',
    waiting_for_confirmations_info:
      "Waiting for confirmations reduces the risk of your Vault address changing. We require users to wait 10 block confirmations to ensure it's been created successfully. This will often take around 2 minutes.",
    proxy_failure_not_mined: 'This transaction is taking longer than usual...',
    proxy_failure_not_mined_info:
      'Transactions to the network may sometimes take longer than expected. This can be for a variety of reasons but may be due to a congested network or a transaction sent with a low gas price. Some wallets enable users to resend a transaction with a higher gas price, otherwise check for your transaction on etherscan and come back again later.',
    proxy_failure_contract_data:
      'There was an error with your Ledger wallet...',
    proxy_failure_contract_data_info:
      'If you see this message and are using a Ledger hardware wallet, it often means that you need to enable "Contract Data." To do this, go to your Ethereum app on Ledger, choose Settings and then Contract Data.',
    proxy_failure_rejected: 'The transaction has been rejected on the wallet',
    proxy_failure_timeout:
      'Your transaction timed out and was automatically rejected',
    proxy_failure_timeout_info:
      'This error is often caused because you did not sign the transaction in a reasonable time, and it has been automatically rejected by the wallet. Where this has happened, you often still need to reject the transaction yourself on the wallet to allow you to sign another.'
  },
  cdp_migrate: {
    select_title: 'Select Vault to Migrate',
    select_text:
      'Select a Vault and pay back the stability fee in USDL or FL to migrate it to Multi-collateral USDL and the new CDP Portal.',
    current_ratio: 'Current Ratio',
    dai_debt: 'USDL debt',
    fee_in_dai: 'Fee in USDL',
    fee_in_mkr: 'Fee in FL',
    migrate: 'Migrate',
    payment: 'Payment',
    trust_site_with_dai: 'Trust this site with my USDL',
    pay_and_migrate: 'Pay and Migrate',
    migrate_in_progress_header: 'Your CDP is being migrated',
    migrate_in_progress_text:
      'The estimated time is 8 minutes. You can safely leave this page and return.',
    migrate_complete_header: 'CDP Migration complete',
    migrate_complete_text:
      'CDP #{0} has been successfully migrated to Multi-collateral USDL and the new CDP Portal.',
    view_transaction_details: 'View transaction details',
    migrate_another_cdp: 'Migrate another CDP',
    exit_to_cdp_portal: 'Exit to CDP Portal'
  },
  dsr_deposit: {
    screen_titles: {
      open_vault: 'Manage Proxy',
      deposit_dai: 'Deposit USDL',
      confirmation: 'Confirmation'
    },
    setup_header: 'Deploy Proxy',
    open_vault: 'Earn savings on your USDL by locking into Freeliquid Save',
    deposit_form_title: 'Enter the amount you would like to deposit.',
    setup_proxy_text:
      'Setting up your proxy will bundle multiple transactions into one, saving transaction time and gas costs. This only has to be done once.',
    confirm_title: 'Confirm Deposit'
    // "post_confirm_title": "Deposit Confirmed"
  },
  actions: {
    back: 'Back',
    continue: 'Continue',
    create_cdp: 'Open Vault',
    deposit: 'Deposit',
    withdraw: 'Withdraw',
    pay_back: 'Pay back',
    generate: 'Generate',
    send: 'Send',
    skip: 'Skip',
    get_started: 'Get Started',
    try_again: 'Try Again'
  },
  actions_past_tense: {
    deposit: 'Deposited',
    withdraw: 'Withdrew',
    pay_back: 'Paid back',
    generate: 'Generated'
  },
  event_history: {
    open: 'Opened a new Vault with id #{0}',
    deposit: 'Deposited {0} {1} into Vault',
    dsr_deposit: 'Deposited {0} USDL',
    withdraw: 'Withdrew {0} {1} from Vault',
    dsr_withdraw: 'Withdrew {0} USDL',
    generate: 'Generated {0} new USDL from Vault',
    pay_back: 'Repaid {0} USDL to Vault',
    give: 'Vault given to {0} by {1}',
    migrate: 'Vault upgraded from SCD',
    bite: 'Auctioned {0} {1} from Vault',
    reclaim: 'Reclaimed {0} {1} after auction(s)'
  },
  action_sidebar: {
    deposit_and_generate_title: 'Deposit & Generate',
    deposit_title: 'Deposit {0}',
    deposit_description: 'How much {0} would you like to deposit?',
    withdraw_title: 'Withdraw {0}',
    withdraw_description: 'How much {0} would you like to withdraw?',
    withdraw_warning:
      'The amount of collateral you are withdrawing puts your Vault at risk of liquidation',
    generate_title: 'Generate USDL',
    generate_description: 'How much USDL would you like to generate?',
    generate_warning:
      'The amount of USDL you are generating puts your Vault at risk of liquidation',
    generate_threshold:
      'The amount of USDL you are trying to generate exceeds the amount of USDL available. Please enter less than {0} USDL',
    payback_title: 'Pay Back USDL',
    payback_description: 'How much USDL would you like to pay back?',
    cdp_below_threshold: 'Vault below liquidation threshold',
    insufficient_balance: 'Insufficient {0} balance',
    cannot_payback_more_than_owed: 'Cannot pay back more than owed',
    dai_balance: 'Your USDL balance',
    dai_debt: 'USDL debt',
    locked_dsr: 'Locked in DSR',
    unlock_token: 'Unlock {0} to continue',
    unlocking_token: 'Unlocking {0}...',
    token_unlocked: '{0} unlocked',
    maximum_available_to_generate: 'Maximum available to generate',
    maximum_available_to_withdraw: 'Maximum available to withdraw',
    current_account_balance: 'Current account balance',
    gem_usd_price_feed: '{0}/USD Price feed',
    new_liquidation_price: 'New liquidation price',
    new_collateralization_ratio: 'New collateralization ratio',
    create_proxy: 'Create Proxy to continue',
    creating_proxy: 'Creating Proxy...',
    proxy_created: 'Proxy Created',
    send_title: 'Send {0}',
    send_description: 'How much {0} would you like to send?',
    your_balance: 'Your Balance',
    dest_address: 'Destination Address',
    invalid_input: 'This input is invalid',
    invalid_min_amount: 'Can only send a positive amount of {0}',
    invalid_max_amount: 'Amount is greater than your balance',
    invalid_min_gas: 'Balance is below the required tx fee: {0}',
    invalid_max_gas: 'Balance is below the Amount + tx fee: {0}',
    invalid_address: 'This is not a valid address',
    invalid_allowance: 'Amount is higher than your allowance for {0}',
    negative_debt_avail:
      'Debt ceiling has been reached. There is currently no USDL available for this collateral type.'
  },
  save: {
    title: 'Savings',
    dai_savings_rate: 'USDL Savings rate',
    description:
      'Receive savings on your USDL. Deposit or withdraw at any time.',
    deposit_amount: 'Deposit amount',
    withdraw_amount: 'Withdraw amount',
    deposit_dai: 'Deposit USDL',
    deposit_dai_subheading:
      'Start earning as soon as your deposit is confirmed.',
    get_started_title: 'Start earning {0} on your USDL today',
    start_earning:
      'Deposit USDL to see your first transaction and start earning',
    tx_history: 'History',
    savings_earned_to_date: 'Savings earned to date',
    estimated_savings: 'Estimated savings',
    dai_locked_dsr: 'USDL locked in DSR',
    deposit_withdraw: 'Deposit and withdraw',
    deposit_btn_cta: 'Receive savings on your USDL. Deposit at any time',
    withdraw_btn_cta: 'Safely withdraw your USDL at any time',
    no_savings:
      "This address either doesn't exist or has no DSR account history"
  },
  verbs: {
    depositing: 'Depositing',
    generating: 'Generating',
    withdrawing: 'Withdrawing',
    paying_back: 'Paying back'
  },
  table: {
    type: 'Type',
    activity: 'Activity',
    date: 'Date',
    time: 'Time',
    sender_id: 'Sender ID',
    tx_hash: 'Tx Hash',
    loading: 'Loading...'
  },
  transactions: {
    unlocking_token: 'Unlocking {0}',
    setting_up_proxy: 'Setting up proxy',
    creating_cdp: 'Creating Vault',
    generate_dai: 'Generating {0} USDL',
    pay_back_dai: 'Paying back {0} USDL',
    withdrawing_gem: 'Withdrawing {0}',
    depositing_gem: 'Depositing {0}',
    claiming_collateral: 'Claiming collateral',
    send: 'Sending {0} to {1}',
    deposit_generate: 'Depositing & Generating {0}'
  },
  transactions_past_tense: {
    unlocking_token: 'Unlocked {0}',
    setting_up_proxy: 'Set up proxy',
    creating_cdp: 'Created Vault',
    generate_dai: 'Generated {0} USDL',
    pay_back_dai: 'Paid back {0} USDL',
    withdrawing_gem: 'Withdrew {0}',
    depositing_gem: 'Deposited {0}',
    claiming_collateral: 'Claimed collateral',
    send: 'Sent {0} to {1}',
    deposit_generate: 'Deposited & Generated {0}'
  },
  transaction_manager: {
    transaction_singular_capitalised: 'Transaction',
    transaction_plural_capitalised: 'Transactions',
    transaction_singular: 'transaction',
    transaction_plural: 'transactions',
    show: 'Show',
    hide: 'Hide'
  },
  input_validations: {
    max_float: 'Amount must be less than {0}',
    min_float: 'Amount must be greater than {0}',
    is_float: 'Please enter a valid number',
    default: 'Please enter a valid input'
  },
  connect: 'Connect',
  disconnect: 'Disconnect',
  view: 'View',
  dismiss: 'Dismiss',
  exit: 'Exit',
  close: 'Close',
  connect_to: 'Connect to {0}',
  overview: 'Overview',
  cdp_type: 'Vault Type',
  not_found: 'Not Found',
  // "network": "Network",
  // "unknown": "Unknown",
  cdp: 'Vault',
  cdp_id: 'Vault ID',
  // "connect": "Connect",
  set_max: 'Set max',
  paste: 'Paste',
  cancel: 'Cancel',
  current_price: 'Current Price',
  stability_fee: 'Stability Fee',
  liquidation_penalty: 'Liquidation Fee',
  collateral_debt_ceiling: 'Debt ceiling',
  dai_available: 'USDL Available',
  returned_auction: 'returned from the auction',
  liquidated_event: 'Your Vault has been liquidated',
  liquidation_ratio: 'Liquidation Ratio',
  liquidation_price: 'Your Liquidation Price',
  liquidation_penalty_shortened: 'Liq Fee',
  liquidation_ratio_shortened: 'Liq ratio',
  // "liquidation_price_shortened": "Liq Price",
  collateral_type: 'Collateral Type',
  collateral_amount: 'Collateral Amount',
  collateralization: 'Your Collateralization Ratio',
  collateralization_ratio: 'Collateralization ratio',
  current_ilk_price: 'Current {0} Price',
  your_balance: 'Your balance',
  why_is_this: 'Why is this?',
  // "risk_parameters": "Risk Parameters",
  terms_of_service_text: 'I have read and accept the {0}',
  terms_of_service: 'Terms of Service',
  cookie_notice: 'By using this website you agree to our {0}',
  privacy_policy: 'privacy policy',
  see_how_it_works: 'See how it works',
  learn_more: 'Learn more',
  providers: {
    connect_wallet: 'Connect a wallet',
    connect_wallet_long: 'Connect wallet to get started',
    more_wallets: 'More wallets',
    main_wallets: 'Main wallets',
    metamask: 'MetaMask',
    trust: 'Trust',
    coinbase: 'Coinbase Wallet',
    imtoken: 'ImToken',
    alphawallet: 'Alpha Wallet',
    ledger_nano: 'Ledger Nano',
    trezor: 'Trezor',
    dcent: "D'CENT",
    other: 'Active Wallet',
    ledger: 'Ledger',
    walletconnect: 'Wallet Connect',
    walletlink: 'Coinbase Wallet'
  },
  notifications: {
    claim: 'Claim',
    claim_collateral:
      'Your {0} Vault auction(s) have completed. You have {1} {2} to claim',
    non_vault_owner:
      'The owner of this position ({0}) does not match the connected wallet address',
    non_overview_owner:
      'You are currently viewing the Overview of another address ({0})',
    non_savings_owner:
      'You are currently viewing the savings of another address ({0})',
    emergency_shutdown_active:
      'Emergency shutdown has been initiated on {0}. This dashboard is currently read-only. If you have any vaults or USDL, please go to {1}. For more information you can read more {2}',
    vault_below_next_price:
      'Your {0} Vault has entered the liquidation phase and your collateral will be auctioned at {1}. You can still avoid auction by depositing at least {2} or repaying {3}',
    vault_below_current_price:
      'Your {0} Vault is available for liquidation and your collateral can be auctioned at any time. You can try to avoid the auction by depositing at least {1} or repaying {2}',
    vault_is_liquidated:
      'Your Vault was recently liquidated and {0} was made available for Auction. Please check back here for more details.',
    vault_under_dust_limit:
      'This Vault is currently under the required minimum amount by approximately {0} USDL which has resulted in reduced functionality. For full access again, you need to Payback the full Outstanding USDL Debt amount, or Deposit additional collateral and Generate at least {1} USDL'
  }
};
