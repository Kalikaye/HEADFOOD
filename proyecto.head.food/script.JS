$(document).ready(() => {
   const c = $('#contenido');
   let i = 1;
$.get("http://localhost:300/api/producto", (rs) => {
        rs.forEach(producto => {
            c.append(`
            
            <div class="row mt-md-5" style="margin-left: 5%;">
            <div class="col-md-4">
                <div class="card shadow-1-strong " style="width: 20rem;">
                    <img class="card-img-top" src="${producto.Imagen}" alt="Pankakes">
                    <div class="card-body text-center">
                        <h5 class="card-title font-weight-bold">${producto.Nombre}</h5>
                        <p class="card-text lead "><span class="badge bg-secondary">${producto.Precio}</span></p>
                      <a href="sanduich.html" class="btn btn-info btn-sm"><i class="fas fa-utensils fa-fw"></i> &nbsp; Detalles</a>
                      <a href="carrito.html" class="btn btn-info btn-sm"><i class="fas fa-utensils fa-fw"></i> &nbsp; carrito</a>
                    </div>
                </div>  
            </div>
            <div class="col-md-4">
                <div class="card shadow-1-strong " style="width: 20rem;">
                    <img class="card-img-top" src="${producto.Imagen}" alt="Pankakes">
                    <div class="card-body text-center">
                        <h5 class="card-title font-weight-bold">${producto.Nombre}</h5>
                        <p class="card-text lead "><span class="badge bg-secondary">${producto.Precio}</span></p>
                      <a href="sanduich.html" class="btn btn-info btn-sm"><i class="fas fa-utensils fa-fw"></i> &nbsp; Detalles</a>
                      <a href="carrito.html" class="btn btn-info btn-sm"><i class="fas fa-utensils fa-fw"></i> &nbsp; carrito</a>
                    </div>
                </div>  
            </div>
            <div class="col-md-4">
                <div class="card shadow-1-strong " style="width: 20rem;">
                    <img class="card-img-top" src="${producto.Imagen}" alt="Pankakes">
                    <div class="card-body text-center">
                        <h5 class="card-title font-weight-bold">${producto.Nombre}</h5>
                        <p class="card-text lead "><span class="badge bg-secondary">${producto.Precio}</span></p>
                      <a href="sanduich.html" class="btn btn-info btn-sm"><i class="fas fa-utensils fa-fw"></i> &nbsp; Detalles</a>
                      <a href="carrito.html" class="btn btn-info btn-sm"><i class="fas fa-utensils fa-fw"></i> &nbsp; carrito</a>
                    </div>
                </div>  
            </div>
        </div>
            
            
            `);
            i++;
        });
    })
});


