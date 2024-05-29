import HomeHeader from "./home-header/HomeHeader";
import HomeCatalog from "./home-catalog/HomeCatalog";
import HomeBanner from "./home-banner/HomeBanner";
import RecentTransactions from "./recent-transactions/RecentTransactions";
import {
  recommendedSelectData,
  filterSelectData,
  recentTransactionsData,
} from "./data";
function HomePage() {
  return (
    <div className="row p-0">
      <HomeHeader
        recommendedSelect={recommendedSelectData}
        filterSelect={filterSelectData}
      />
      <HomeCatalog />
      <HomeBanner />
      <RecentTransactions recentTransactionsData={recentTransactionsData} />
    </div>
  );
}

export default HomePage;
