package server

import (
	"context"
	"fmt"
	"time"

	"github.com/carloscacb333/codeme-go/pb"
)

type BechServer struct {
	pb.UnimplementedBenchMarkSvcServer
	// DB              *gorm.DB
}

func NewBechServer() *BechServer {
	return &BechServer{}
}

func (s *BechServer) ExecuteBenchMark(ctx context.Context, req *pb.BenchReq) (*pb.BenchRes, error) {

	var len = int(req.GetLen())
	startTime := time.Now()
	counter := 0
	for i := 0; i < len; i++ {
		counter++
		if counter%100000000 == 0 {
			fmt.Println("Iteration Go: ", counter)
		}
	}
	endTime := time.Now()

	return &pb.BenchRes{
		Status:  pb.STATUS_OK,
		Message: fmt.Sprintf("Executed %d iterations in %s in Go", len, endTime.Sub(startTime).String()),
	}, nil

}
