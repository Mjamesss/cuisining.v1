import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideNav from '../../components/sideNavAdmin';

const Dashboard = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        {/* Side Navigation */}
        <SideNav />

        {/* Main Content */}
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className='mt-2'>Dashboard</h1>
          </div>

          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Revenue</h5>
                  <p className="card-text">$166,580</p>
                  <small className="text-muted">2% in the last 1 month</small>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Subscription Sold</h5>
                  <p className="card-text">5,679</p>
                  <small className="text-muted">2% in the last 1 month</small>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Daily Revenue</h5>
                  <p className="card-text">$51,801</p>
                  <small className="text-muted">3% in the last 1 week</small>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-md-12">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Overview</h5>
                  <p className="card-text">$2,500</p>
                  <div className="chart">
                    {/* Placeholder for chart */}
                    <p>Chart will be displayed here.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;