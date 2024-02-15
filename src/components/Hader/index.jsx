import "./main.css";

export const Header = () => {
  return (
    <>
      <header className="Header">
        <div className="container">
          <div className="header-inner">
                <div className="header-box">
            <a href="#" className="header-item-link">
            <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ8AAAA7CAYAAABlllgYAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAa4SURBVHgB7Z3/dds2EMe/9sv/VSYIMkHVCYJM0HQCKRPYnUDMBHYmED2BmwmkTGBlAtET2Jkg5ZVAecQDSVACaYDG5717pIgfBMjjAQeA1AXOY1GKKGWptu/UMX1cI3ryeVZCFGz7qLYkBxYn8QohpZKl3JZyLOXXxELnvC9lhX6FTswEiUrhnjC9wnXJrpRPSMwSUUqOsBSuzSIKJGaDRHiWrk82SETPCnEpXVLAmUB9qFgULSngjBB4GS92DJFIREWOuBSsS46ohoYSESAQl3K5yDUSUZAjLsVykQckoiC2YRVXkUgEyaXakoc71/5RmgEJFK58c+VPJIJEK9/vmC8CyesNElI+ujFLzJsPSAQHKZ8vxStKuXCUt6X8UcrnUvYYn/dIBImv6bQjTkdi3JmVLRLB8QbjNLmfevKlYZ0fqK0ebckS0prBFfzzFokgyeHf8uUD0myM8jx4Ko8vq5wYCerzvcPLIUrJ0GwWP8M/ydsNkEuEwRqVEhL0otAefknKFyB6qGUK6M2zAvXbaSZXrCzf4B+Bl4XqlilZIfGfwzGV8v2Nqi9IkDOyM86tX7c8KAmRrmlI/frnviWc0un+LcW5Q1hI1A/oP+h+TXWtts8q7slQZ3wKh2NtnNfmWEgVJj2ViYvA+RwdzkNxVpa0gsXZITxyuF8rL47cJV6mORKwn3fMl8KnsvAC1Y1Mawl7mNLhIGuwVUJWz1SGAnVzK+Ef38pnztrQLMoXFr5BcnQ6eYPpkD3hGdvPEd9XCQpUdfiAqq6keNRHzDGMNaq6L1Ue1BocVD59/USKf6XyEOoYT0vHbtTx72he83Ohc987xKOJhP8dSl99qr4+n4tsWB5Lj2Xj/clzOLL82shYHL6cS6C7z0fhfQPsR7Q/kHS9nnrSrtnvrZE+x3l9PgG3+7DWCaa0fC5kpfxE9XTQE0ueVGxrDT+w/R+OaQQqhRTqN1m7O7UVKk/B4n1Ec8hKH1+w9HTtHo30NxgPOueXlrAN23/SO1MqH10M82bQOkJTuaigOarKfEO4yicsx6jJk2r/K9rHNE0yNJtJUq5n41xb1MMhWxVHQ78XjunHgs6XWY5zxSMdaIzh/vIk3ATn6DC3BjtLXN1cCY/lkzifo8N56MnOLGkF7M0uP97VrC7QbFZ1vOWJ6bdGeI7zml0bsqtsIUyv2YZXYl6FQvX5bUB8vvpnj3ZrqZtijW4R5ID0XzEdpOxcwTMYZaNm9xkvMySgV1DbmtWCxfFFAb98NH5r73aFaoxvaYljgyvfY0/cA9sX7Lya73BPPza3qMuYw+KpT6l8W7gt6ixQX6QlwmVvOUZ9Grqeuu9HijhkGu0Z4zJ2/po16lmeAi2OSCirWjjayyNifPPslu3/5RC/YPuiJ66wpOMK1fewuj7MrsbIpswCTScjQ0urc4mwvnNMfZJM7Qv49XQLTAO/cS59vz3bX/XE5eEHY6vDuxTnqiOM59N13SXbt3UTMvQ0txwalfbhTXLPJx+YdodmhRfw/06HD3iZ2tjA7lEK2L1doOnxbxzyPXak3zqkt8WTaHrswpKHeV9WRvjaKGOnBaU5yRx+1pcVqN8S01NDrukK9lugeiB89vcK+HmDjQ8X2FZcUzeBP0TvUddNoFaaPZrOiLnEjPqOfJCZ7o9syRcqjCs0hWWoB5nN9ERuqQN1Ga5YHnvUTsw7VI7UgoXza0rHH1BfnzvY+8V7sLJn8G/5TmWNcb4Zs4MfjgPOeW2kFT3lIaXtq/sT2pvEzCHtNbotpJ6f7asbVzJb/bpkrROQt1vAHxLDEaie/BXG87p/YhoK1AtF9xgGWTvqd2WoLCi/FnqM7xbt9ytTedAUmjTC9qisnEA3dB5yktawW8s9Kkt4C0++goR/SxOaZIgPeiAlTlvZs1Bpze4PHeuyfLZ8BEb65AhZvgPmT4zf6RtyXwTbL9C+nH/IgDbQ/Geo0TgiLks2VATmzQ51XWVHvAfHeJOSIx5FGipHzJ8MzfpKI5yazBsEek24FzQ32WL+6GEOXm/6fa/E9KIFAoIKH4MinSKv5eOQdA9zoLcV8Dl+ehYXbH+H+X2/uMDr+zyaQNWS8Q9+FqgcGD5vHhQScViy1OTOlB3iUq6+JkYgEQ0ScSlYl1wjER1z8Hxd3h9NBEqGuJSNi+1rCInIyBCX0mmLlxRvJkjEMfWmlwslZsgaYSqhfkc2WbtXgES1lmuMj3YPUbgt6o/xJCLlAqej37ulkfT3aqvXf52rFHopT6GElv8clBRIzIJzlK+PBWolFD1xi5b9xIz5F9XUvy77evJhAAAAAElFTkSuQmCC"
                alt="" width={138} height={48}
              />
            </a>
                <nav className="header-nav">
                    <ul className="nav-list">
                        <li className="nav-item-list">
                            <a className="nav-a" href="#">Bosh sahifa</a>
                        </li>
                        <li className="nav-item-list">
                            <a  className="nav-a"href="#">Biz haqimizda</a> 
                        </li>
                        <li className="nav-item-list">
                            <a className="nav-a" href="#">Rasmlar</a>
                        </li>
                        <li className="nav-item-list">
                            <a className="nav-a" href="#">Savolar</a>
                        </li>
                    </ul>
                </nav>
                        <button className="nav-btn">
                        <div className="nav-icom"><i class="fa-solid fa-user"></i></div>
                            Bog'lanish
                        </button>
              </div>
          </div>
        </div>
      </header>
    </>
  );
};
