import React, {Component} from 'react';
import {View, FlatList, Text,ScrollView} from 'react-native';
import Modal from 'react-native-modal';
import {Navigation} from 'react-native-navigation';
import {connect} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Button, TopBar} from 'component';
import {getCurrency} from '../../redux/actions';

import {currency} from 'helper';

class SettingContainer extends Component {
  state = {
    isModalVisible: false,
  };

  componentDidMount() {
    Navigation.events().bindComponent(this);
  }

  componentDidAppear() {
    this.getCurrencySymbol();
  }

  getCurrencySymbol() {
    this.props.getCurrency('currency');
  }

  toggleModal = () => {
    this.setState(prevState => ({
      isModalVisible: !prevState.isModalVisible,
    }));
  };

  async onPressCurrency(symbol) {
    await AsyncStorage.setItem('currency', symbol);
    this.getCurrencySymbol();
    this.setState({isModalVisible: false});
  }

  renderItem = ({item}) => {
    return (
      <Button
        style={{height: 40, padding: 5}}
        buttonTitle={`${item.name} (${item.symbol})`}
        onPress={() => {
          this.onPressCurrency(item.symbol);
        }}
      />
    );
  };

  render() {
    const {isModalVisible} = this.state;
    return (
      <Setting
        toggleModal={this.toggleModal}
        isModalVisible={isModalVisible}
        renderItem={this.renderItem}
        currencySymbol={this.props.currencySymbol}
      />
    );
  }
}

function Setting({toggleModal, renderItem, isModalVisible, currencySymbol}) {
  return (
    <View>
      <TopBar title="Tips" />
      <ScrollView>
      {/* <Button
        onPress={toggleModal}
        buttonTitle="Mata uang"
        symbol={currencySymbol}
      />

      <Modal isVisible={isModalVisible} onBackdropPress={toggleModal}>
        <View style={{height: 400, backgroundColor: '#fff', padding: 15}}>
          <Text>Currency List</Text>

          <View>
            <FlatList
              data={currency}
              renderItem={renderItem}
              keyExtractor={item => item.name}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </View>
      </Modal> */}
      <ScrollView style={{backgroundColor: '#fff', padding: 15}}>
        <Text style={{color: '#000',fontSize:22}}>Tips Menabung</Text>
        <Text style={{color: '#000',fontSize:16,marginTop:12,fontWeight:'bold'}}>1. Sisihkan minimal 10 persen dari gaji ke tabungan</Text>
        <Text style={{color: '#000',fontSize:16,marginTop:12,}}>Dalam prinsip dasar mengatur keuangan, anggaran untuk pos tabungan minimal 10 persen dari gaji atau penghasilan. Mau 20 persen? Itu lebih baik. Kalau kamu sedang dalam tahap belajar mengelola keuangan, menyisihkan 10 persen sudah bagus. Jika gajimu Rp 5 juta per bulan, berarti minimal Rp 500.000. Langsung sisihkan begitu kamu terima gaji atau penghasilan. Jangan menunggu dari sisa gaji karena biasanya tidak sesuai kenyataan. Inginnya menabung, tetapi lihat pakaian, sepatu, tiket murah, menabung hanya sekadar angan-angan.</Text>
        <Text style={{color: '#000',fontSize:16,marginTop:12,fontWeight:'bold'}}>2. Masukkan dana tersebut ke rekening tabungan</Text>
        <Text style={{color: '#000',fontSize:16,marginTop:12,}}>Kids zaman now harusnya sudah melek keuangan. Ada bank sebagai wadah mengumpulkan dan menyimpan uang dengan aman. Jadi, tidak perlu lagi simpan uang di bawah bantal atau kasur, maupun di lemari baju. Kamu bisa buka rekening tabungan di bank. Pilih yang sesuai dengan kebutuhan dan kemampuan keuanganmu. Misalnya yang setoran awalnya Rp 50.000. Bebas biaya administrasi, atau yang menawarkan keuntungan lain. Kalau kamu punya rekening tabungan di bank, bukan hanya uang bakal aman, tetapi juga akan memudahkanmu bila sewaktu-waktu ingin mengajukan pinjaman atau kredit di bank. Dengan memiliki rekening tabungan, kamu pun tidak perlu repot jika mendapatkan bantuan dari pemerintah di masa pandemi ini. Sebab bantuan sekarang sifatnya non-tunai. Langsung ditransfer ke rekening penerima</Text>
        <Text style={{color: '#000',fontSize:16,marginTop:12,fontWeight:'bold'}}>3. Simpan uang receh di celengan</Text>
        <Text style={{color: '#000',fontSize:16,marginTop:12,}}>Selain menabung di bank, cara mengumpulkan uang berikutnya adalah di celengan. Tetapi, bukan uang yang nominalnya besar, cukup uang receh. Misalnya uang koin Rp 1.000, Rp 500, atau Rp 200 dan Rp 100. Uang pecahan Rp 2.000 juga bisa. Jangan sepelekan uang receh. Kalau dikumpulkan setiap hari, lama-lama akan banyak. Menabung Rp 2.000 setiap hari, jika rutin selama 5 tahun, bisa mencapai Rp 3,6 juta. Sudah cukup buat DP motor. Itulah the power of receh.</Text>
        <Text style={{color: '#000',fontSize:16,marginTop:12,fontWeight:'bold'}}>4. Menabung sesuai tanggal</Text>
        <Text style={{color: '#000',fontSize:16,marginTop:12,}}>Cara ini bisa kamu terapkan buat yang susah nabung jumlah besar sekaligus. Menabung sesuai tanggal. Maksudnya adalah nominal uang yang disimpan mengikuti tanggal, dan dimulai dari tanggal 30 atau 31 setiap bulan. Contohnya, bulan Januari 2021, ada 31 hari. Tanggal 31 menabung Rp 31.000, tanggal 30 sebesar Rp 30.000, tanggal 29 menyisihkan Rp 29.000, begitu seterusnya. Maka, total tabunganmu dalam sebulan (31 hari) menjadi Rp 496.000. Dengan cara di atas, tidak akan terlalu menjadi beban keuanganmu. Tetapi ingat, jangan sampai lupa menabung. Terlewat sehari saja, target menabungmu bisa buyar, dan kemudian jadi malas lagi menyisihkan uang. Oleh karenanya, pasang alarm di ponsel sebagai pengingat. Tidak ada alasan lagi untuk mangkir menabung demi tujuanmu.</Text>
        <Text style={{color: '#000',fontSize:16,marginTop:12,fontWeight:'bold'}}>5. Jangan Nafsu Bobok Tabungan di Rumah atau Bank </Text>
        <Text style={{height:210,color: '#000',fontSize:16,marginTop:12,}}>Di mana pun kamu menabung, apakah itu di rumah ataupun di bank, jangan pernah menarik atau mengambil uang simpananmu. Apalagi untuk memenuhi kebutuhan sehari-hari. Gunakan gajimu untuk membiayai keperluan tersebut. Tabunganmu hanya boleh diambil bila ada kebutuhan sangat mendesak.</Text>
      </ScrollView></ScrollView>
    </View>
  );
}

export default connect(
  state => ({currencySymbol: state.currency.activeSymbol}),
  {getCurrency},
)(SettingContainer);
