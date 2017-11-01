using DAL.Identity;
using Microsoft.AspNetCore.Identity;

namespace NGL.Backend.Areas.Login.Identity
{
    public class CustomPasswordValidator : PasswordValidator<ApplicationUser>
    {

    }
}
