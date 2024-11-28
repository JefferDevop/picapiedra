import { BASE_API } from "@/config/constants"; 


export async function addSaucesApi(data, token) {
  try {
    const url = `${BASE_API}/api/sauce/`;
    const params = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    const response = await fetch(url, params);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}

export async function updateSaucesApi(id, data, token) {
  try {
    const url = `${BASE_API}/api/sauce/${id}/`;
    const params = {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    const response = await fetch(url, params);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}

export async function getSauceToIdApi(idSauce) {
  try {
    const url = `${BASE_API}/api/sauce/${idSauce}/`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}

export async function getSaucesActiveApi() {
  try {
    const statusFilter = "active=True";

    const url = `${BASE_API}/api/sauce/?${statusFilter}`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}

export async function getSaucesApi() {
  try {
    const url = `${BASE_API}/api/sauce/`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}

export async function deleteSauceApi(id, token) {
  try {
    const url = `${BASE_API}/api/sauce/${id}/`;
    const params = {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await fetch(url, params);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}


//---------------------------------


export async function addSaucesToProductApi(idproduct, idSauce, name, token) {
 
    try {
    const url = `${BASE_API}/api/saucesproduct/`;
    const params = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
        body: JSON.stringify({
        product: idproduct,
        sauces: idSauce,
        description: name,      
      }),
    };

    const response = await fetch(url, params);
   // const result = await response.json();
   // return result;
  } catch (error) {
    throw error;
  }
}


export async function getSaucesToProductIdApi(idProduct) {
 
  const filter = `product=${idProduct}`;
  try {
    const url = `${BASE_API}/api/saucesproduct/?${filter}`;
    const response = await fetch(url);
    const result = await response.json();    
    return result;
  } catch (error) {
    throw error;
  }
}

export async function getSauceToProductApi(idProduct, idSauce) {
 
  const product = `product=${idProduct}`;
  const sauce = `sauces=${idSauce}`;
  try {
    const url = `${BASE_API}/api/saucesproduct/?${product}&${sauce}`;
    const response = await fetch(url);
    const result = await response.json();    
    return result;
  } catch (error) {
    throw error;
  }
}

export async function deleteSaucesToProductApi(idProduct, token) {
  try {
    const url = `${BASE_API}/api/saucesproduct/${idProduct}/`;
    const params = {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await fetch(url, params);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}



export async function getSaucesByOrderIdApi(idOrder) {
 
  const filter = `order=${idOrder}`;
  try {
    const url = `${BASE_API}/api/sauceorder/?${filter}`;
    const response = await fetch(url);
    const result = await response.json();    
    return result;
  } catch (error) {
    throw error;
  }
}
