@IF EXIST "%~dp0\node.exe" (
  "%~dp0\node.exe"  "%~dp0\..\index.js" %*
) ELSE (
  node  "%~dp0\..\index.js" %*
)