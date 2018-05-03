CREATE DATABASE omnitrix
GO
USE omnitrix
GO

CREATE TABLE Usuario(
Id_Usuario INT IDENTITY (1,1) PRIMARY KEY,
Nombre NVARCHAR(50) UNIQUE NOT NULL,
Nick NVARCHAR(50) UNIQUE NOT NULL,
Correo NVARCHAR(40) UNIQUE NOT NULL,
Contrasenia NVARCHAR(200) NOT NULL,
Fecha_Nacimiento DATE,
Verificacion_Clave NVARCHAR(300),
Estatus BIT DEFAULT '0',
Imagen_Perfil NVARCHAR(80),
Imagen_Portada NVARCHAR(80),
Telefono NVARCHAR(20),
Telefono_Casa NVARCHAR(20),
Biografia NVARCHAR(300),

)
GO
CREATE TABLE Amistad(
Id_Amistad INT PRIMARY KEY IDENTITY (1,1),
Id_Usuario INT FOREIGN KEY REFERENCES Usuario(Id_Usuario) NOT NULL,
Id_Usuario_Dos INT FOREIGN KEY REFERENCES Usuario(Id_Usuario) NOT NULL
)
GO

CREATE TABLE Publicacion(
Id_Publicacion INT IDENTITY PRIMARY KEY,
Id_Usuario INT FOREIGN KEY REFERENCES Usuario(Id_Usuario) NOT NULL,
Id_Amistad INT FOREIGN KEY REFERENCES Amistad(Id_Amistad),
Titulo NVARCHAR(150),
Imagen NVARCHAR(80),
Fecha_Publicacion DATETIME NOT NULL
)
GO
CREATE TABLE Comentario(
Id_Comentario INT IDENTITY (1,1) PRIMARY KEY,
Id_Usuario INT FOREIGN KEY REFERENCES Usuario(Id_Usuario) NOT NULL,
Id_Publicacion INT FOREIGN KEY REFERENCES Publicacion(Id_Publicacion) NOT NULL,
Comentario NVARCHAR(260)
)
GO

CREATE PROCEDURE [dbo].[sp_UpNombre]
@Variable NVARCHAR(50),
@Id INT
AS
UPDATE Usuario SET Nombre = @Variable 
WHERE Id_Usuario = @Id
GO

CREATE PROCEDURE [dbo].[sp_UpNick]
@Variable NVARCHAR(50),
@Id INT
AS
UPDATE Usuario SET Nick = @Variable 
WHERE Id_Usuario = @Id
GO
CREATE PROCEDURE [dbo].[sp_UpCorreo]
@Variable NVARCHAR(40),
@Id INT
AS
UPDATE Usuario SET Correo = @Variable 
WHERE Id_Usuario = @Id
GO
CREATE PROCEDURE [dbo].[sp_UpContrasenia]
@Variable NVARCHAR(50),
@Id INT
AS
UPDATE Usuario SET Contrasenia = @Variable 
WHERE Id_Usuario = @Id
GO
