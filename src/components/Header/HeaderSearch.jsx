import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Input from '../shared/Input';

function HeaderSearch() {
  const [keyword, setKeyword] = useState();
  const navigate = useNavigate();
  
  function handleSubmit(e) {
    e.preventDefault();

    navigate(`/search?keyword=${keyword}`);
  }

  function handleChange(e) {
    setKeyword(e.target.value.trim());
  }

  return (
    <div className="tcl-col-4">
      {/* Header Search */}
      <form onSubmit={handleSubmit}>
        <Input type="search" onChange={handleChange} placeholder="Nhap gia tri search ..." />
      </form>
    </div>
  );
}

export default HeaderSearch;
