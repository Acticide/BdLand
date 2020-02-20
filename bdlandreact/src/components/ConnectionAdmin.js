import React from 'react'

export const ConnectionAdmin = () => {
    return (
        <div className="ConnectionAdmin">
        <form class="form-inline">
        <div class="form-group mb-2">
          <label for="staticEmail2" class="sr-only">Email</label>
          <input type="text" readonly class="form-control" id="staticEmail2" placeholder="email@example.com"/>
        </div>
        <div class="form-group mx-sm-3 mb-2">
          <label for="inputPassword2" class="sr-only">Password</label>
          <input type="password" class="form-control" id="inputPassword2" placeholder="Password"/>
        </div>
        <button type="submit" class="btn btn-primary mb-2">Confirm identity</button>
      </form>
      </div>
    )
}

export default ConnectionAdmin;
