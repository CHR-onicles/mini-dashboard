import { StyledWidgetLg } from "./WidgetLg.styled";

export const WidgetLg = () => {
  return (
    <StyledWidgetLg>
      <h3>Latest transactions</h3>

      <table className="table">
        <thead>
          <tr className="table-header">
            <th>Customer</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="person">
              <div className="img-wrapper">
                <img src="https://i.pravatar.cc/150" alt="Person" />
              </div>
              <p className="name">Luke Skywalker</p>
            </td>
            <td className="date">2 July 2022</td>
            <td className="amount">$2000</td>
            <td className="status">Approved</td>
          </tr>
          <tr>
            <td className="person">
              <div className="img-wrapper">
                <img src="https://i.pravatar.cc/150" alt="Person" />
              </div>
              <p className="name">Kyle Bhrums</p>
            </td>
            <td className="date">3 Jan 2022</td>
            <td className="amount">$5000</td>
            <td className="status">Pending</td>
          </tr>
          <tr>
            <td className="person">
              <div className="img-wrapper">
                <img src="https://i.pravatar.cc/150" alt="Person" />
              </div>
              <p className="name">Sherlock Holmes</p>
            </td>
            <td className="date">5 Aug 2022</td>
            <td className="amount">$500</td>
            <td className="status">Pending</td>
          </tr>
        </tbody>
      </table>
    </StyledWidgetLg>
  );
};
