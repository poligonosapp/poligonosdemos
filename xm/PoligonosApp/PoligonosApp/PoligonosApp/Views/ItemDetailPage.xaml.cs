using PoligonosApp.ViewModels;
using System.ComponentModel;
using Xamarin.Forms;

namespace PoligonosApp.Views
{
    public partial class ItemDetailPage : ContentPage
    {
        public ItemDetailPage()
        {
            InitializeComponent();
            BindingContext = new ItemDetailViewModel();
        }
    }
}