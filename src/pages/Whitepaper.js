import React from 'react';
import { hot } from 'react-hot-loader/root';

import MarketingLayout from '../layouts/MarketingLayout';
import LegalTextLayout from '../layouts/LegalTextLayout';

import graph31 from 'images/graph3_1.jpg';
import graph32 from 'images/graph3_2.jpg';
import graph33 from 'images/graph3_3.jpg';
import graph34 from 'images/graph3_4.jpg';

const Whitepaper = () => (
  
  <MarketingLayout>
    <div className="wp_wrap">
    <div className="sidebar_menu">
      <div className="menu_wp">
      <h2 className="text_center">Table of Contents</h2>
      <table className="table_contents">
        <tr>
          <td><a href="#introduction">1. Introduction</a></td>
        </tr>
        <tr>
          <td><a href="#protocol">2. The Freeliquid Protocol</a></td>
        </tr>
        <tr>
          <td><a href="#info">2.1 General information</a></td>
        </tr>
        <tr>
          <td><a href="#borrow">2.2 Freeliquid Borrow</a></td>
        </tr>
        <tr>
          <td><a href="#stable">The USDFL stablecoin</a></td>
        </tr>
        <tr>
          <td><a href="#vault">Freeliquid Vaults</a></td>
        </tr>
        <tr>
          <td><a href="#example">Working example</a></td>
        </tr>
        <tr>
          <td><a href="#save">2.3 Freeliquid Save</a></td>
        </tr>
        <tr>
          <td><a href="#reserve">2.4 Freeliquid Reserve</a></td>
        </tr>
        <tr>
          <td><a href="#oracle">2.5 Oracles</a></td>
        </tr>
        <tr>
          <td><a href="#gov">3. Freeliquid Governance</a></td>
        </tr>
        <tr>
          <td><a href="#token">3.1 FL governance token</a></td>
        </tr>
        <tr>
          <td><a href="#voting">3.2 Freeliquid Voting</a></td>
        </tr>
        <tr>
          <td><a href="#iss">3.3 FL token issuance</a></td>
        </tr>
        <tr>
          <td><a href="#charts">FL issuance charts</a></td>
        </tr>
        <tr>
          <td><a href="#emergency">4. Emergency Shutdown</a></td>
        </tr>

      </table>
      </div>
      </div>
    <div className="wp">
      <h1 className="text_center">The Freeliquid Protocol</h1>
      <h2 className="text_center">White Paper</h2>
      <h5 className="text_center">Version 1.1: October 2020</h5>
      <br /><br /><br />
      <h2 className="text_center">Abstract</h2>

      <p>
        Freeliquid Protocol is an open-source platform built on the Ethereum
        blockchain. It serves as a decentralized finance protocol that offers
        borrowing and savings programs to crypto asset holders. One of the
        innovative features of Freeliquid is the ability to receive USD
        stablecoins for providing liquidity pools (e.g., from Uniswap) as
        collateral. Pools that are locked on Freeliquid remain fully functional
        and continue to earn commission fees on their native platforms. Borrowed
        funds can be used for any purposes, such as creating more liquidity
        pools, thereby significantly increasing user profits. The USDFL token is
        Freeliquid’s native stablecoin, which is soft-pegged to the US dollar.
        FL serves as the governance token used in Freeliquid Voting. Both FL and
        USDFL tokens operate on the ERC-20 standard. The Fair Launch model
        implies a distribution of the initial FL tokens through reward programs.
        Freeliquid users play a defining part in the development of the Protocol
        through community work and proposal voting.
      </p>
     
      <h2 className="text_center" id="introduction">
        1. Introduction
      </h2>

      <p>
        One of the most popular trends of the cryptocurrency industry in the
        year 2020 have been DeFi projects – solutions and protocols for
        decentralized finance. Among the many benefits that DeFi offers, two
        services stand out – using liquidity pools to facilitate coin exchange
        between users and offering loans with crypto assets as serving as
        security. Until now, these services lacked a connection, as existing
        lending platforms do not accept liquidity pools as collaterals.
        Freeliquid’s developer team has decided to change this.
      </p>
      <p>
        The Freeliquid Protocol enables users to receive USD stablecoins by
        locking liquidity pools as collaterals. The main advantage of this
        solution is that investors can now get extra funding, while keeping the
        passive income from the liquidity provider fees. The newly-obtained
        stablecoins can be used to increase the size of the existing liquidity
        pool or create another one. The process can be repeated several times,
        effectively leveraging the initial investment with no risks.
        Alternatively, the funds can be used for any other purpose, such as
        trading or yield farming. In any case, Freeliquid users can therefore
        turn their liquidity pools into a source of extra funding, potentially
        multiplying their profits.
      </p>
      <p>
        The Freeliquid developer team firmly believes in the principles of
        decentralized peer-to-peer networks. The Freeliquid Protocol will be
        governed by its community through the FL governance token for voting
        (see Chapter 3). To fairly distribute the voting power inside the
        community, the initially generated FL tokens will not be held by the
        developers or offered through an initial coin offering (ICO). Instead,
        the FL tokens will be distributed only as rewards for actively using the
        Freeliquid platform or for providing liquidity to the native tokens of
        Freeliquid.{' '}
      </p>
      <p>
        This white paper presents a thorough overview of the Freeliquid project.
      </p>
      <p>
        Readers who are interested in the technological underpinnings are
        welcome to go through the
        <a href="https://github.com/Freeliquid" target="_blank">
          code
        </a>
        of the Freeliquid smart contracts.
      </p>

      <h2 className="text_center" id="protocol">
        2. The Freeliquid Protocol
      </h2>
      <h3 className="text_center" id="info">
        2.1 General information
      </h3>

      <p>
        The Freeliquid Protocol is a fork of the MakerDAO platform. The main
        operating principles of Freeliquid are completely identical to MakerDAO
        smart contracts (see{' '}
        <a href="https://makerdao.com/en/whitepaper" target="_blank">
          Maker documentation
        </a>
        ). The decision to use the proven MakerDAO framework has been made to
        ensure security, transparency, and efficiency of the Freeliquid
        Protocol. The chosen framework also contains a well-designed governance
        system, which relies on community-driven voting using a governance
        token.
      </p>
      <p>
        The Freeliquid Protocol operates on the Ethereum blockchain. The
        Protocol’s entire codebase is available as open source on
        <a href="https://github.com/Freeliquid" target="_blank">
          Github
        </a>
        . The web platform is currently hosted at
        <a href="https://freeliquid.io" target="_blank">
          https://freeliquid.io
        </a>
        and can be accessed by connecting a crypto wallet, such as Metamask or
        Ledger Nano.
      </p>
      <p>
        The Freeliquid Protocol has been developed by a group of enthusiasts,
        who continue to support and further develop the project. The
        decision-making, however, is mainly done by the decentralized community
        of Freeliquid users. The changes to the Protocol are proposed and voted
        on by the community using the FL governance token (see Chapter 3.1),
        while the developer team remains responsible with implementing
        decisions.
      </p>

      <h3 className="text_center" id="borrow">
        2.2 Freeliquid Borrow
      </h3>

      <p>
        Freeliquid Borrow enables its users to lock crypto assets in the form of
        liquidity pools as collateral to borrow USDFL stablecoins. We first give
        an overview of the USDFL stablecoin and then describe how the borrowing
        process works.
      </p>
      <h4 className="text_center" id="stable">The USDFL stablecoin</h4>
      <p>
        USD Freeliquid (USDFL) is an ERC-20 stablecoin, which is soft-pegged to
        the US dollar. Its value is backed by user-provided collateral.
      </p>
      <p>
        The USDFL token serves as the main currency of Freeliquid Protocol and
        has all proper functions of sound money, namely:
      </p>
      <p>
      <ul className="pl20">
        <li> - a unit of account;</li>
        <li> - a medium of exchange;</li>
        <li> - a store of value with a stable market price;</li>
        <li> - a standard of deferred payment.</li>
      </ul>
      </p>
      <p>
        As any other ERC-20 token, USDFL is easy to hold and transfer by using
        cryptocurrency wallets. USDFL can also be traded on decentralized
        exchanges, where users will be providing the respective liquidity pairs.
      </p>
      <br />
      <h4 className="text_center" id="vault">
        Freeliquid Vaults
      </h4>

      <p>
        Freeliquid Vaults are smart contracts that generate USDFL after users
        lock collaterals in Freeliquid Borrow and specify their preferred loan
        size. Initially, only pools consisting of stablecoin pairs will be
        accepted as possible collateral. Additional collateral types can be
        added later through community voting.
      </p>
      <p>
        Users can borrow USDFL in an amount of up to 90% of the collateralized
        asset value. The borrowed USDFL tokens constitute the outstanding Vault
        debt which is charged with an interest rate (‘Stability Fee’), displayed
        in annual terms. Initially, to support the early growth of the
        Freeliquid Borrow, the Stability Fees for each collateral type are set
        to zero. The maximum borrow amount percentage and Stability Fees may be
        changed later by the community to ensure the financial stability of
        Freeliquid. Note that these parameters are applied to each liquidity
        pair independently. Collected Stability Fees are stored in the
        Freeliquid Reserve (see Chapter 2.4).
      </p>
      <p>
        The loans do not require an approval from a third party and are not
        restricted by any repayment date. Borrowing is processed instantly and
        can be repaid at any time by covering the outstanding amount of USDFL
        back to Freeliquid Borrow. It is always possible to only repay a portion
        of the outstanding debt or to generate additional USDFL, if the
        collateral provided is large enough.{' '}
      </p>
      <p>
        Since the volatility of stablecoins and the risk of extreme price surges
        are very low, the liquidation module is switched off completely, meaning
        that liquidation is not possible. In the future, pairs with more
        volatile assets will be added to Freeliquid as possible collateral
        types. To account for potential risks, the liquidation function, which
        is already available for smart contracts, can be introduced through
        governance voting.
      </p>
      <br />
      <h4 className="text_center" id="example">
        Working example
      </h4>

      <p>
        To better illustrate how Freeliquid Borrow works, consider the following
        example:
      </p>
      <p>
      <ul className="pl20">
        <li>
        ●	Assume there is a liquidity provider (further called “the LP”) who has a USDT/USDC pool on Uniswap, which earns thema passive income in the form of liquidity provider fees. 
        </li>
        <li>
        ● The LP’s position has the total value of both tokens locked. Let us
          take this value to be equal to 100,000 USD as an example.
        </li>
        <li>
        ● By using Freeliquid Borrow, the LP can lock his liquidity tokens as a
          collateral and receive up to 90% of the pool’s total value in the
          USDFL stablecoin. In our example, that would be approx. 90,000 USDFL,
          which could be immediately issued for the borrower.
        </li>
        <li>
        ● The LP now can use the obtained funds for their own purposes, such as
          exchanging USDFL for USDT or USDC and creating another liquidity pool
          on Uniswap with a total value of $90,000. In the end, the LP will hold
          a liquidity pool of $190,000 in total, which almost doubles the income
          from liquidity provider fees, while taking almost no risks.
        </li>
        <li>
        ● Alternatively, the borrowed funds can be used for trading or investing
          in crypto assets. This might bring much larger returns on the initial
          Vault value, but also entails higher risks.
        </li>
      </ul>
      </p>
      <h3 className="text_center" id="save">
        2.3 Freeliquid Save
      </h3>

      <p>
        The USDFL Savings Rate (USDFLSR) is a component of the Freeliquid
        Protocol that enables users to lock USDFL and receive yields on their
        investment. Users can deposit (withdraw) their USDFL to (from) USDFLSR
        at any time and without any restrictions by only paying the Ethereum
        network fees. The funds for paying the Savings Rate yields come
        fromStability Fee earnings (see Chapter 2.2). Since Stability Fees are
        not charged at the early stage of Freeliquid, the Savings Rate will be
        initially set to zero.
      </p>
      <p>
        After the USDFL tokens are locked in Freeliquid Save, earned USDFL are
        continuously generated and accrued to the user's balance. The
        accumulated profits for the past time can be claimed at any time. The
        current yield rate is susceptible to change through the means of
        community voting.
      </p>
      <p>
        The profits from the Savings Rate can be calculated using the following
        formula:.
      </p>
      <h4 className="text_center"> A=P(1+r)^t</h4>
      <p className="pl20">
        where:
        <br />
        A = final deposit value;.
        <br />
        P = invested deposit value;.
        <br />
        r = annual yield rate (determined through voting by FL holders);
        <br />
        t = number of years, during which the deposit remains in USDFLSR.
        <br />
      </p>

      <h3 className="text_center" id="reserve">
        2.4 Freeliquid Reserve
      </h3>

      <p>
        The Freeliquid Reserve contains USDFL acquired from the revenues of the
        Freeliquid Platform. The Freeliquid Reserve is fully controlled by smart
        contracts and belongs neither to the developer team, nor to any user.
      </p>
      <p>
        Freeliquid Reserve funding comes from the difference between revenue
        flows from Stability Fees (earned by the protocol in Freeliquid Borrow)
        and the Savings Rate (paid by the protocol in Freeliquid Save). The
        earned USDFL are used for the buyback of FL tokens from users, via
        auctions. After the auction is closed following the best bid, the FL
        tokens bought from users are burned, effectively reducing the supply of
        FL.
      </p>

      <h3 className="text_center" id ="oracle">
        2.5 Oracles
      </h3>

      <p>
        In all financial operations on the Freeliquid Platform, crypto asset
        prices are derived from Price Oracles. As in MakerDAO, Oracles consist
        of a decentralized network of individual external nodes called Oracle
        Feeds. Every user can initiate a transaction by paying the Ethereum
        network fees and thus updating Oracle prices on the Freeliquid platform.
        To cover the transaction costs and incentivize users to use Oracles, a
        total of 50,000 FL tokens will be reserved as rewards (see Chapter 3.3).
        Transaction initiators will receive FL rewards after each price update
        from the Oracles, but not more than once an hour.
      </p>
      <p>
        At the time of the launch of Freeliquid, the prices of USDC, USDN, and
        DAI stablecoins, which are used in calculating collateral value, are
        assumed to be exactly equal to 1 US dollar. The price of USDT will be
        calculated by using Chainlink‘s decentralized Oracles.
      </p>

      <h2 className="text_center" id="gov">
        3. Freeliquid Governance
      </h2>

      <p>
        The decentralization of the governance structure is one of the highest
        priorities of the Freeliquid project. Whilethe Freeliquid developer team
        will continue to fully support the project, the decision-making about
        the current and future operations of Freeliquid belongs to the user
        community.
      </p>
      <p>
        In this chapter, we describe the functionality of FL, as well as the
        voting process.
      </p>

      <h3 className="text_center" id="token">
        3.1 FL governance token
      </h3>

      <p>
        FL is Freeliquid’s governance token, built on the ERC-20 standard.
        Holders of FL are eligible to participate in the governance of the
        project through voting. As with the USDFL token, the FL can be stored on
        or transferred to any ERC-20 wallet, as well as traded on decentralized
        exchanges.
      </p>
      <p>
        Users will be rewarded for providing liquidity pools for the FL/USDFL
        pair (see Chapter 3.3). As described in Chapter 2.4, the supply of FL
        tokens will be additionally decreased through Auctions, where users can
        receive USDFL for selling FL tokens, which are consequently burned.{' '}
      </p>

      <h3 className="text_center" id="voting">
        3.2 Freeliquid Voting
      </h3>

      <p>
        FL tokens holders have the right to vote for changes in the Freeliquid
        protocol. To access our governance portal, users need to lock their FL
        tokens by transferring them to the Voting Contract. To cast a vote,
        simply send one transaction.
      </p>
      <p>
        Every user is eligible to propose changes to facilitate further
        development of the decentralized structure of Freeliquid, but only FL
        holders can cast votes. After a vote is successfully carried out, the
        changes are implemented over a short course of time. For further
        technical details on how voting works, please refer to the following
        MakerDAO{' '}
        <a
          href="https://makerdao.com/en/whitepaper/#use-of-the-mkr-token-in-maker-governance"
          target="_blank"
        >
          documentation.
        </a>
      </p>
      <p className="pl20">
        Through voting, FL token holders are eligible to:
        <br />
        - add new collateral types with custom risk parameters;
        <br />
        - add new risk parameters or change the existing ones;
        <br />
        - modify interest rates for the USDFL Savings Rate;
        <br />
        - determine the group of Oracles that supply the prices;
        <br />
        - execute the Emergency Shutdown of the system;
        <br />- adjust the parameters of different types of Auctions.
      </p>

      <h3 className="text_center" id="iss">
        3.3 FL token issuance
      </h3>

      <p>
        The issuance of initial FL tokens will proceed through the Fair Launch
        model. This implies that tokens will not be sold on initial coin
        offering (ICO), but rather distributed as rewards to Freeliquid users.
        This decision has been made to prevent the accumulation of large amounts
        of FL tokens in the hands of few holders as well as to make the
        distribution of FL tokens more fair and accessible. For example, MKR,
        the MakerDAO’s governance token, was distributed through an ICO, which
        led to governance being concentrated among a few big holders.
      </p>
      <p>
        Initially, 1,000,000 (one million) FL tokens will be generated, which
        will be distributed through four distinct programs:
      </p>
      <ul className="text_left">
        <li>
          <p className="pl20"><u>1. Day 1 to 10, distribution of 100,000 FL</u> <br />
          In the first 10 days, 100,000 FL will be distributed among users that
          will lock their liquidity pools with any pair consisting of the
          following stablecoins: USDT, USDC, DAI, USDN. For as long as the pool
          stays locked, users will receive FL rewards on their accounts in
          proportion to their share in the common pool.
          <br />
          During the first two days, the “Fair Distribution” rule will be in
          force to ensure a fair and uniform distribution. It implies a
          restriction of the maximum locked value of assets to $50,000 in total.
          This rule only applies to the first reward program. </p>
        </li>
        <li>
        <p className="pl20"><u>2. Day 11 to 100, distribution of 400,000 FL</u>
          <br />
          After the first 10 days and for the next 90 days, the FL tokens of
          this reward program will be shared among FL/USDFL pools. Users will
          receive rewards in proportion to the amount of locked FL/USDFL. The
          platform will ensure support for FL/USDFL pools. Users must note that
          they will not be able to borrow USDFL against FL/USDFL as collateral.</p>
        </li>
        <li>
        <p className="pl20"><u>3. Day 11 to 381, distribution of 450,000 FL</u>
          <br />
          After the first 10 days and for the next 371 days, Freeliquid will
          incentivize liquidity providers to create pools with USDFL pairs.
          Users will receive rewards in proportion to the locked pools with
          USDFL and other tokens in their pair.</p>
        </li>
        <li>
        <p className="pl20"><u>4. Day 1 to 712, distribution of 50,000 FL</u>
          <br />
          For the first 712 days, FL rewards are also reserved to incentivize
          ‘transaction initiators’ to use Oracles for price updates (see Chapter
          2.2).</p>
        </li>
      </ul>
      <br />
      <h4 className="text_center" id="charts">
        FL issuance charts
      </h4>

      <p>
        The relationship between the total (cumulative) amount of issued FL
        tokens and time (FL/USDFL pair):
      </p>
      <img src={graph31} />
     
      <p>
        The relationship between the amount of FL tokens issued per hour and
        time (FL/USDFL pair):
      </p>
      <img src={graph32} />
      
      <p>
        The relationship between total (cumulative) amount of issued FL tokens
        and time (stablecoin pairs):
      </p>
      <img src={graph33} />
     
      <p>
        The relationship between the number of FL tokens issued per hour and
        time (stablecoin pairs):
      </p>
      <img src={graph34} />
     
      <h2 className="text_center" id="emergency">
        4. Emergency Shutdown
      </h2>

      <p>
        The emergency shutdown function is an essential part of the Freeliquid
        smart contract security system. This function is necessary for
        preventing emergency situations and is meant to protect Freeliquid user
        funds from cyber-attacks, malicious acts of FL token holders, and
        extreme market volatility. Additionally, the feature can be used during
        the Freeliquid Protocol upgrades to successfully implement necessary
        changes.
      </p>
      <p>
        Emergency shutdown is only possible FL holders successfully cast their
        votes. The Emergency Shutdown module is identical to the one of MakerDAO
        and is described in detail in their{' '}
        <a
          href="https://makerdao.com/en/whitepaper/#emergency-shutdown"
          target="_blank"
        >
          documentation.
        </a>
      </p>
      </div>
    </div>
  </MarketingLayout>
);

export default hot(Whitepaper);
