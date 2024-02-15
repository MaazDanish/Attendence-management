



const toggleAttendanceFormButton = document.getElementById('getDetailsButton');
const attendanceForm = document.getElementById('attendanceForm');
const markAttendanceButton = document.getElementById('markAttendanceButton');

toggleAttendanceFormButton.addEventListener('click', async () => {
  try {

    const dateInput = document.getElementById('dateInput').value;
    const Details = document.getElementById('Details');
    console.log(dateInput);
    const date = dateInput;

    const res = await axios.get(`http://localhost:4343/student/get-attendence-list/${date}`);
    // console.log(res);
    if (res.data.length !== 0) {
      console.log(res);
      // Details.style.display = 'none';
      Details.style.display = Details.style.display === 'none' ? 'block' : 'none';
      // attendanceForm.style.display = attendanceForm.style.display === 'block' ? 'none' : 'block';
      displayOnScreen(res);
      
    } else {
      attendanceForm.style.display = attendanceForm.style.display === 'none' ? 'block' : 'none';
      // Details.style.display = Details.style.display === 'block' ? 'none' : 'block';

    }
    // localStorage.setItem('date',dateInput)
    // console.log(dateInput);
  } catch (Err) {
    console.log(Err);
  }
})
markAttendanceButton.addEventListener('click', async () => {
  try {
    const attendanceForm = document.getElementById('attendanceForm');

    const dateInput = document.getElementById('dateInput').value;
    const studentsAttendance = [];
    for (let i = 1; i <= 5; i++) {
      const studentName = document.getElementById('student' + i).value;
      const present = document.getElementById('present' + i).checked;
      const absent = document.getElementById('absent' + i).checked;
      if (present) {
        studentsAttendance.push({ name: studentName, status: 'Present' });
      } else if (absent) {
        studentsAttendance.push({ name: studentName, status: 'Absent' });
      }
    }

    console.log('Date:', dateInput);
    console.log('Attendance:', studentsAttendance);
    const body = {
      date: dateInput,
      student: studentsAttendance
    }

    const res = await axios.post('http://localhost:4343/student/post-attendence-list', body);
    if (res.status == 200) {
      console.log(res);
      location.reload()
    }
  } catch (Err) {
    console.log(Err);
  }

});

async function displayOnScreen(res) {
  try {
    // console.log(res);
    var Details = document.getElementById('Details');
    const data = res.data;
    data.forEach(students => {
      console.log(students)
      Details.innerHTML = Details.innerHTML + `
      <table class="table ">
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>${students.name}</td>
            <td>${students.attendenceStatus}</td>
          </tr>
        </tbody>
      </table>
      `
    })
  } catch (Err) {
    console.log(Err);
  }
}